import { FcDonate } from 'react-icons/fc'
import './Button.css';
import PropTypes from 'prop-types';

const Button = ({
  icon: Icon = FcDonate,
  text = "Quick Donate",
  ariaLabel = "Navigate to donation form",
  wrapperClass = "nav-btn-group",
  buttonClass = "btn btn-donate-animated",
  onClick,
  showStampBorder = false,
}) => {
  return (
    <div className={wrapperClass}>
     <button 
      className={buttonClass} 
      aria-label={ariaLabel}
      onClick={onClick}
        >
        <span className="btn-donate-content">
          {showStampBorder && <span className="btn-stamp-left" />}
          {Icon && <Icon className="btn-donate-icon" size={20} />}
          <span>{text}</span>
          {showStampBorder && <span className="btn-stamp-right" />}
       </span>
        </button>
        </div>
  );
}

Button.propTypes = {
  icon: PropTypes.elementType,
  text: PropTypes.string,
  ariaLabel: PropTypes.string,
  wrapperClass: PropTypes.string,
  buttonClass: PropTypes.string,
  onClick: PropTypes.func,
  showStampBorder: PropTypes.bool,
};

export default Button;
