import Button from '../../common/components/buttons/Button';
import './Hero.css'
import mobileBackground from '../../assets/img/home/mbl-background.png'

const Hero = ({
  className = "",

  // Background
  backgroundImage,

  // Right-side image (desktop). If not provided, the right column
  // is simply not rendered and the left column takes the full width.
  heroImage,
  showRightImage = true, // set false to force-hide even if heroImage is passed

  // Mobile-only image — ALWAYS pass this separately for the mobile view.
  // It is fully independent from `heroImage` (desktop). If omitted, a
  // generic default background is used — it does NOT fall back to
  // `heroImage`, since desktop hero images are usually the wrong
  // aspect ratio / crop for the mobile stamp-border layout.
  mobileImage,

  // Left column text content — ignored if `customContent` is provided
  title,
  description,

  // Primary button (e.g. "Donate Now")
  buttonText,
  buttonLink,
  hideButton = false,
  buttonVariant = "default",

  // Optional second button (e.g. "Zakat Now") — only rendered if
  // either secondaryButtonText or secondaryButtonLink is provided
  secondaryButtonText,
  secondaryButtonLink,
  secondaryButtonVariant = "default",

  // Fully custom left-column content — e.g. a donation form.
  // When provided, this REPLACES title/description/buttons entirely.
  customContent,

  // Renders BELOW the title, in place of description + buttons
  // (title stays visible). Use this for pages like "Lebanon Emergency"
  // where a donation card (amount tiers, one-time/monthly tabs, etc.)
  // appears under the heading instead of the usual description + button.
  cardContent,

  // Some campaign pages (e.g. "Lebanon Emergency") use a heavier,
  // bold green title instead of the default thin navy homepage style.
  boldTitle = false,

  children,

  // Mobile-specific button placement
  hideMobileButton = false,
  showMobileButtonAboveText = false,
}) => {
  const resolvedMobileImage = mobileImage || mobileBackground;
  const hasRightImage = showRightImage && !!heroImage;
  const hasSecondaryButton = !!(secondaryButtonText || secondaryButtonLink);
  const titleClassName = `hero-title${boldTitle ? " hero-title--bold" : ""}`;
  const isEmergencyStyle = boldTitle || !!cardContent;
  const textSectionClassName = `hero-text-section${isEmergencyStyle ? " hero-text-section--emergency" : ""}`;

  const goTo = (link) => {
    if (!link) return;

    if (link.startsWith("#")) {
      const target = document.querySelector(link);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      return;
    }

    window.location.href = link;
  };

  const handleButtonClick = () => goTo(buttonLink);
  const handleSecondaryButtonClick = () => goTo(secondaryButtonLink);

  const renderButtons = () => (
    <div className="hero-button-group">
      {!hideButton && (
        <Button
          text={buttonText || "Quick Donate"}
          onClick={handleButtonClick}
          size="md"
          wrapperClass="nav-btn-group hero-donate-btn-group"
          buttonClass="btn btn-donate-animated hero-donate-btn"
          variant={buttonVariant}
        />
      )}
      {hasSecondaryButton && (
        <Button
          text={secondaryButtonText || "Donate Now"}
          onClick={handleSecondaryButtonClick}
          size="md"
          wrapperClass="nav-btn-group hero-donate-btn-group"
          buttonClass="btn btn-donate-animated hero-donate-btn"
          variant={secondaryButtonVariant}
        />
      )}
    </div>
  );

  const renderTextBlock = () => (
    <>
      <h1 className={titleClassName}>{title}</h1>
      {cardContent ? (
        <div className="hero-card-wrapper">{cardContent}</div>
      ) : (
        <>
          <p className="hero-description">{description}</p>
          {renderButtons()}
        </>
      )}
    </>
  );

  return (
    <section
      className={`hero-section ${className}`.trim()}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Navbar/Children */}
      {children}

      {/* Desktop Hero Content */}
      <div className="hero-content hero-content-desktop">
        <div className={`hero-content-inner${!hasRightImage ? " hero-content-inner--no-image" : ""}`}>
          {/* Left Text/Form Section */}
          <div className={textSectionClassName}>
            {customContent ? customContent : renderTextBlock()}
          </div>

          {/* Right Image Section — only rendered when a heroImage is given */}
          {hasRightImage && (
            <div className="hero-image-section">
              <img src={heroImage} alt="" className="hero-main-image" />
            </div>
          )}
        </div>
      </div>

      {/* Mobile Hero Content */}
      <div className="hero-content hero-content-mobile">
        <div className="hero-content-inner">
          {/* Hero Image with Stamp Border */}
          <div className="hero-image-wrapper">
            <div className="hero-stamp-border">
              <div className="hero-side-borders"></div>
              <img src={resolvedMobileImage} alt="" className="hero-main-image" />
            </div>
          </div>

          {!customContent && !cardContent && showMobileButtonAboveText && !hideMobileButton && (
            <div className="hero-mobile-button-row">
              {renderButtons()}
            </div>
          )}

          {/* Text/Form Section */}
          <div className="hero-text-section">
            {customContent ? (
              customContent
            ) : (
              <>
                <h1 className={titleClassName}>{title}</h1>
                {cardContent ? (
                  <div className="hero-card-wrapper">{cardContent}</div>
                ) : (
                  <>
                    <p className="hero-description">{description}</p>
                    {!hideMobileButton && !showMobileButtonAboveText && renderButtons()}
                  </>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero