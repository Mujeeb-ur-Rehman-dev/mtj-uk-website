import React from "react";
import "./CalculatorCta.css";

export default function CalculatorCta({
  title,
  description,
  buttonText,
  onButtonClick,
  buttonLink,
}) {
  const handleClick = (e) => {
    if (onButtonClick) {
      onButtonClick(e);
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
    <section className="calc-cta">
      <div className="calc-cta__inner">
        <h2 className="calc-cta__title">{title}</h2>
        <p className="calc-cta__desc">{description}</p>
        <button className="calc-cta__btn" type="button" onClick={handleClick}>
          {buttonText}
        </button>
      </div>
    </section>
  );
}