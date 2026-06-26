import Button from '../../common/components/buttons/Button';
import './hero.css'
import mobileBackground from '../../assets/img/home/mbl-background.png'

const Hero = ({
  className = "",
  backgroundImage,
  heroImage,
  mobileImage,
  title,
  description,
  buttonText,
  buttonLink,
  children,
  customContent,
  hideMobileButton = false,
  showMobileButtonAboveText = false,
}) => {
  const resolvedMobileImage = mobileImage || heroImage || mobileBackground;

  const handleButtonClick = () => {
    if (!buttonLink) return;

    if (buttonLink.startsWith("#")) {
      const target = document.querySelector(buttonLink);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      return;
    }

    window.location.href = buttonLink;
  };

  return (
    <section 
      className={`hero-section ${className}`.trim()}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Navbar/Children */}
      {children}

      {/* Desktop Hero Content */}
      <div className="hero-content hero-content-desktop">
        <div className="hero-content-inner">
          {/* Left Text Section */}
          <div className="hero-text-section">
            <h1 className="hero-title">{title}</h1>
            {customContent ? (
              customContent
            ) : (
              <p className="hero-description">{description}</p>
            )}
            {!customContent && (
              <Button
                text={buttonText || "Quick Donate"}
                onClick={handleButtonClick}
              />
            )}
          </div>

          {/* Right Image Section */}
          {/* <div className="hero-image-section">
            <img src={heroImage} alt="Hero" className="hero-main-image" />
          </div> */}
        </div>
      </div>

      {/* Mobile Hero Content */}
      <div className="hero-content hero-content-mobile">
        <div className="hero-content-inner">
          {/* Hero Image with Stamp Border */}
          <div className="hero-image-wrapper">
            <div className="hero-stamp-border">
              <div className="hero-side-borders"></div>
              <img src={resolvedMobileImage} alt="Hero" className="hero-main-image" />
            </div>
          </div>

          {!customContent && showMobileButtonAboveText && !hideMobileButton && (
            <div className="hero-mobile-button-row">
              <Button
                text={buttonText || "Quick Donate"}
                onClick={handleButtonClick}
              />
            </div>
          )}

          {/* Text Section */}
          <div className="hero-text-section">
            <h1 className="hero-title">{title}</h1>
            {customContent ? (
              customContent
            ) : (
              <p className="hero-description">{description}</p>
            )}
            {!customContent && !hideMobileButton && !showMobileButtonAboveText && (
              <Button
                text={buttonText || "Quick Donate"}
                onClick={handleButtonClick}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
