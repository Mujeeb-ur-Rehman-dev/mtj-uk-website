import Button from '../../common/components/buttons/Button';
import './hero.css'
import mobileBackground from '../../assets/img/home/mbl-background.png'
import { FaHeart } from 'react-icons/fa'

const Hero = ({
  backgroundImage,
  heroImage,
  title,
  description,
  buttonText,
  buttonLink,
  children,
}) => {
  // Component for corner decoration
  const CornerDecoration = ({ className }) => (
    <div className={`corner-decoration ${className}`}>
      <div className="petal" style={{ top: 0, left: '50%', transform: 'translateX(-50%)' }}></div>
      <div className="petal" style={{ right: 0, top: '50%', transform: 'translateY(-50%)' }}></div>
      <div className="petal" style={{ bottom: 0, left: '50%', transform: 'translateX(-50%)' }}></div>
      <div className="petal" style={{ left: 0, top: '50%', transform: 'translateY(-50%)' }}></div>
      <div className="center-petal"></div>
    </div>
  );

  return (
    <section 
      className="hero-section"
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
            <p className="hero-description">{description}</p>
            <Button icon={FaHeart} text="Donate Now" />
          </div>

          {/* Right Image Section */}
          <div className="hero-image-section">
            <img src={heroImage} alt="Hero" className="hero-main-image" />
          </div>
        </div>
      </div>

      {/* Mobile Hero Content */}
      <div className="hero-content hero-content-mobile">
        <div className="hero-content-inner">
          {/* Hero Image with Stamp Border */}
          <div className="hero-image-wrapper">
            <div className="hero-stamp-border">
              <div className="hero-side-borders"></div>
              <img src={mobileBackground} alt="Hero" className="hero-main-image" />
            </div>
          </div>

          {/* Text Section */}
          <div className="hero-text-section">
            <h1 className="hero-title">{title}</h1>
            <p className="hero-description">{description}</p>
            <Button icon={FaHeart} text="Donate Now" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
