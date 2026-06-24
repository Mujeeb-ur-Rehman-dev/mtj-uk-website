
import React from 'react';
import './FooterNew.css';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaLinkedin } from 'react-icons/fa';

const FooterNew = () => {
  return (
    <footer className="footer-new">
      <div className="footer-new-container">
        <div className="footer-new-section">
          <h4 className="footer-new-title">About TH</h4>
          <ul className="footer-new-list">
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">How it works</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Supporting Organizations</a></li>
            <li><a href="#">Transparency in our processes</a></li>
            <li><a href="#">Jobs</a></li>
            <li><a href="#">Awards & Publications</a></li>
            <li><a href="#">TH Impact Force</a></li>
            <li><a href="#">Audit Reports</a></li>
          </ul>
          <div className="footer-new-apps-inline">
            <p>Download our Mobile App</p>
            <div className="app-badges">
              <a href="#" className="app-badge">
                <svg className="apple-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <div className="app-text">
                  <span className="store-name">Download on the</span>
                  <span className="app-name">App Store</span>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-new-section">
          <h4 className="footer-new-title">The Basics</h4>
          <ul className="footer-new-list">
            <li><a href="#">FAQ's</a></li>
            <li><a href="#">Payment FAQ</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Use</a></li>
            <li><a href="#">Testimonials</a></li>
            <li><a href="#">Press Release</a></li>
            <li><a href="#">Crowdfunding</a></li>
            <li><a href="#">Archive Stories</a></li>
            <li><a href="#">Join TH Impact Force</a></li>
          </ul>
        </div>

        <div className="footer-new-section">
          <h4 className="footer-new-title">Donation Plans</h4>
          <ul className="footer-new-list">
            <li><a href="#">Eid-al-Adha 2026</a></li>
            <li><a href="#">Sadaqah Donations</a></li>
            <li><a href="#">Friday Blessings</a></li>
            <li><a href="#">Muharram Donation Plan</a></li>
            <li><a href="#">Pay Zakat Online</a></li>
            <li><a href="#">Sadaqah vs Zakat</a></li>
            <li><a href="#">Zakat Calculator</a></li>
          </ul>
        </div>

        <div className="footer-new-section footer-new-right">
          <h4 className="footer-new-title">Follow Us</h4>
          <div className="footer-new-whatsapp">
            <p>Questions? We will reply in 15 minutes!</p>
            <a href="#" className="footer-new-whatsapp-btn">
              <span className="whatsapp-icon">💬</span>
              Chat with us via whatsapp
            </a>
          </div>
          <div className="footer-new-newsletter">
            <input type="email" placeholder="Enter your email..." />
            <button>SUBMIT</button>
          </div>
          <div className="footer-new-address">
            <p>2A Plaza, XX Block, Phase 3, DHA, Lahore, Pakistan</p>
            <p>UAN: +92-304-1111-021</p>
            <p>Tel: +92-309-6666-021</p>
            <p><a href="mailto:info@transparenethands.org">info@transparenethands.org</a></p>
          </div>
          <div className="footer-new-social">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaYoutube /></a>
            <a href="#"><FaLinkedin /></a>
          </div>
          <div className="footer-new-certifications">
            <div className="certification-badge">
              <span>Charity</span>
              <span>Navigator</span>
            </div>
            <div className="certification-badge">
              <span>Platinum</span>
              <span>Transparency</span>
              <span>Candid.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterNew;
