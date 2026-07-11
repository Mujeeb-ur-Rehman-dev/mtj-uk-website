import './Button.css';
import PropTypes from 'prop-types';
import donateNowImg from '../../../assets/img/button_back_gr/donate-now.svg';
import hoverImg from '../../../assets/img/button_back_gr/hover-image.svg';
import heartHandIcon from '../../../assets/img/button_back_gr/icon-heart-hand.svg';

/**
 * Named background-image variants. Add more entries here as new
 * button styles are needed across the site (e.g. a maroon/Zakat
 * version), instead of hardcoding a single background everywhere.
 * You can also skip this entirely and pass `bgImage`/`hoverBgImage`
 * directly for a one-off custom background.
 */
const VARIANTS = {
  default: { bg: donateNowImg, hoverBg: hoverImg },
  maroon: { bg: donateNowImg, hoverBg: hoverImg },
};

/**
 * Named size presets (padding + font-size). Use `size="sm"|"md"|"lg"`
 * for the common cases, or override with explicit `padding`/`fontSize`/
 * `width`/`height` props for anything more specific.
 */
const SIZES = {
  sm: { padding: '10px 18px', fontSize: '14px' },
  md: { padding: '14px 24px', fontSize: '16px' },
  lg: { padding: '18px 36px', fontSize: '19px' },
};

const Button = ({
  // Leading icon — TWO ways to provide one:
  //  - `icon`: a React component (e.g. a react-icons icon) — takes priority if set
  //  - `iconSrc`: an image/SVG file path (default: the heart-hand icon shown in the reference)
  icon: Icon,
  iconSrc = heartHandIcon,
  showIconBadge = true, // wraps the icon in a small circular badge, matching the reference button

  trailingIcon: TrailingIcon, // e.g. an arrow icon shown AFTER the text
  text = "Quick Donate",
  ariaLabel = "Navigate to donation form",
  wrapperClass = "nav-btn-group",
  buttonClass = "btn btn-donate-animated",
  onClick,
  showStampBorder = false,

  // Background image variant
  variant = "default",   // looks up VARIANTS map for bg/hoverBg
  bgImage,                // explicit override — takes priority over variant
  hoverBgImage,           // explicit override — takes priority over variant

  // Size — either use a preset...
  size = "md",            // 'sm' | 'md' | 'lg' — looks up SIZES map
  // ...or override any of these directly (each takes priority over the preset)
  width,
  height,
  fontSize,
  padding,
}) => {
  const resolvedVariant = VARIANTS[variant] || VARIANTS.default;
  const resolvedBg = bgImage || resolvedVariant.bg;
  const resolvedHoverBg = hoverBgImage || resolvedVariant.hoverBg;
  const sizePreset = SIZES[size] || SIZES.md;

  const style = {
    '--donate-now-img': `url(${resolvedBg})`,
    '--hover-img': `url(${resolvedHoverBg})`,
    '--btn-padding': padding || sizePreset.padding,
    '--btn-font-size': fontSize || sizePreset.fontSize,
    '--btn-width': width || 'auto',
    '--btn-height': height || 'auto',
  };

  const renderLeadingIcon = () => {
    if (Icon) {
      return <Icon className="btn-donate-icon" size={20} />;
    }
    if (iconSrc) {
      return <img src={iconSrc} alt="" className="btn-donate-icon" />;
    }
    return null;
  };

  const leadingIcon = renderLeadingIcon();

  return (
    <div className={wrapperClass} style={style}>
      <button
        className={buttonClass}
        aria-label={ariaLabel}
        onClick={onClick}
      >
        <span className="btn-donate-content">
          {showStampBorder && <span className="btn-stamp-left" />}
          {leadingIcon && (
            showIconBadge ? (
              <span className="btn-icon-badge">{leadingIcon}</span>
            ) : (
              leadingIcon
            )
          )}
          <span>{text}</span>
          {TrailingIcon && (
            <TrailingIcon className="btn-donate-icon btn-donate-icon--trailing" size={18} />
          )}
          {showStampBorder && <span className="btn-stamp-right" />}
        </span>
      </button>
    </div>
  );
}

Button.propTypes = {
  icon: PropTypes.elementType,
  iconSrc: PropTypes.string,
  showIconBadge: PropTypes.bool,
  trailingIcon: PropTypes.elementType,
  text: PropTypes.string,
  ariaLabel: PropTypes.string,
  wrapperClass: PropTypes.string,
  buttonClass: PropTypes.string,
  onClick: PropTypes.func,
  showStampBorder: PropTypes.bool,
  variant: PropTypes.oneOf(['default', 'maroon']),
  bgImage: PropTypes.string,
  hoverBgImage: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  width: PropTypes.string,
  height: PropTypes.string,
  fontSize: PropTypes.string,
  padding: PropTypes.string,
};

export default Button;