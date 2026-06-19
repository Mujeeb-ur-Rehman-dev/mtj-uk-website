import React from 'react';
import './Footer.css';
import footerLogo from '../../assets/img/logos/footer_logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <img src={footerLogo} alt="MTJF Logo" className="footer-logo" />
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/about-us">About Us</a></li>
            <li><a href="/our-team">Our Team</a></li>
            <li><a href="/blogs">Blogs</a></li>
            <li><a href="/contact-us">Contact Us</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Programs</h4>
          <ul>
            <li><a href="/zakat">Zakat</a></li>
            <li><a href="/food-relief">Food Relief</a></li>
            <li><a href="/education">Education</a></li>
            <li><a href="/medical-healthcare">Medical Care</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Get Involved</h4>
          <ul>
            <li><a href="/volunteer">Volunteer</a></li>
            <li><a href="/events">Events</a></li>
            <li><a href="/careers">Careers</a></li>
            <li><a href="/?form=Quick-Donate">Donate Now</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 MTJF Canada. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
