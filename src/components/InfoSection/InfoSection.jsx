import React from "react";
import { FaHeart } from "react-icons/fa";
import "./InfoSection.css";

/**
 * InfoSection
 *
 * Fully prop-driven — this component holds no hardcoded content.
 * Each page that uses it must pass its own title, paragraphs, image, etc.
 *
 * Props:
 *   title              {string}   – heading text (e.g. "WHY GIVE ZAKAT?")
 *   paragraphs         {string[]} – array of body paragraphs, rendered in order
 *   buttonText         {string}   – button label (e.g. "Donate Now")
 *   buttonIcon         {node}     – icon shown before the button text (default: <FaHeart />)
 *   onDonate           {func}     – click handler for the button
 *   buttonLink         {string}   – alternative to onDonate: a URL or "#anchor" to navigate/scroll to
 *   hideButton         {bool}     – hide the button entirely (default: false)
 *
 *   image              {string}  – path/URL for the right-column stamp photo.
 *                                   If omitted, the right column is not rendered
 *                                   and the left text takes the full width.
 *   imageAlt           {string}  – alt text for the photo
 *   showImage          {bool}    – force-hide the right column even if `image` is passed (default: true)
 *   imageBackground    {string}  – optional background image/color for the stamp
 *                                   frame itself (behind the photo)
 *   showStampFrame     {bool}    – whether to apply the CSS scalloped stamp
 *                                   border + padding around the photo (default: true).
 *                                   Set to false when `image` already has its own
 *                                   border/frame baked into the image file itself,
 *                                   to avoid a double border.
 *
 *   sectionBackground  {string}  – optional background image for the whole
 *                                   section (used on pages that have a
 *                                   background image but NO right-side photo)
 *   showDeco           {bool}    – show/hide the decorative corner flowers (default: true)
 */
export default function InfoSection({
  title,
  paragraphs = [],
  buttonText,
  buttonIcon = <FaHeart className="wzk__btn-icon" />,
  onDonate,
  buttonLink,
  hideButton = false,

  image,
  imageAlt,
  showImage = true,
  imageBackground,
  showStampFrame = true,

  sectionBackground,
  showDeco = true,
}) {
  const hasImage = showImage && !!image;

  const handleClick = (e) => {
    if (onDonate) {
      onDonate(e);
      return;
    }
    if (!buttonLink) return;

    if (buttonLink.startsWith("#")) {
      const target = document.querySelector(buttonLink);
      if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    window.location.href = buttonLink;
  };

  return (
    <section
      className={`wzk${!hasImage ? " wzk--no-image" : ""}`}
      style={sectionBackground ? { backgroundImage: `url(${sectionBackground})` } : undefined}
    >
      {/* decorative corner SVG flowers — right side */}
      {showDeco && (
        <>
          <div className="wzk__deco wzk__deco--tr" aria-hidden="true">
            <svg viewBox="0 0 80 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M40 10 C50 30 70 40 60 60 C50 80 20 70 30 50 C40 30 20 20 40 10Z" fill="#c8a870" opacity="0.85"/>
              <path d="M20 60 C10 80 30 100 40 80 C50 60 30 50 20 60Z" fill="#c8a870" opacity="0.7"/>
              <line x1="40" y1="80" x2="40" y2="115" stroke="#c8a870" strokeWidth="2" opacity="0.6"/>
            </svg>
          </div>
          <div className="wzk__deco wzk__deco--br" aria-hidden="true">
            <svg viewBox="0 0 90 70" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 60 Q30 20 60 35 Q80 45 70 60Z" fill="#c8a870" opacity="0.75"/>
              <path d="M30 55 Q20 30 45 25 Q65 20 55 50Z" fill="#c8a870" opacity="0.6"/>
              <circle cx="10" cy="62" r="4" fill="#c8a870" opacity="0.5"/>
              <circle cx="25" cy="58" r="3" fill="#c8a870" opacity="0.5"/>
            </svg>
          </div>
        </>
      )}

      <div className="wzk__inner">

        {/* ── LEFT: text content ── */}
        <div className="wzk__text">
          <h2 className="wzk__title">{title}</h2>

          {paragraphs.map((p, i) => (
            <p className="wzk__body" key={i}>{p}</p>
          ))}

          {!hideButton && (
            <button className="wzk__btn" onClick={handleClick} type="button">
              {buttonIcon}
              {buttonText}
            </button>
          )}
        </div>

        {/* ── RIGHT: postage stamp photo — only rendered when an image is given ── */}
        {hasImage && (
          <div className="wzk__stamp-wrap">
            <div
              className={`wzk__stamp${!showStampFrame ? " wzk__stamp--plain" : ""}`}
              style={imageBackground ? { backgroundImage: `url(${imageBackground})` } : undefined}
            >
              <img className="wzk__photo" src={image} alt={imageAlt} />
            </div>
          </div>
        )}

      </div>
    </section>
  );
}