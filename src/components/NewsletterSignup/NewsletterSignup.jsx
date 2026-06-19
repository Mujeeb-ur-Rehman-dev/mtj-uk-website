import React from 'react';
import './NewsletterSignup.css';

const NewsletterSignup = () => {
  return (
    <section className="newsletter-wrapper">
      <div className="newsletter-inner">
        <div className="newsletter-left">
          <div className="newsletter-icon-container">
            <div className="newsletter-icon-stamp">
              <div className="icon-side-borders"></div>
              <svg className="newsletter-icon" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="10" y="12" width="30" height="25" rx="2" fill="#7a2c2c" />
                <path d="M10 18L25 28L40 18" stroke="#fff" strokeWidth="2" />
                <path d="M25 35C22 33 15 28 15 28V35H35V28S28 33 25 35Z" fill="#7a2c2c" />
                <path d="M25 35C28 33 35 28 35 28V35H25Z" fill="#fff" opacity="0.3" />
                <path d="M20 20C20 17 22 15 25 15C28 15 30 17 30 20" stroke="#fff" strokeWidth="1.5" />
              </svg>
            </div>
          </div>
          <h2 className="newsletter-title">ADD IMPACT<br />TO YOUR INBOX</h2>
        </div>

        <div className="newsletter-right">
          <div className="newsletter-form-stamp">
            <div className="form-side-borders"></div>
            <form className="newsletter-form">
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">First Name</label>
                  <input type="text" className="form-input" />
                </div>
                <div className="form-group">
                  <label className="form-label">Last Name</label>
                  <input type="text" className="form-input" />
                </div>
              </div>
              <div className="form-group full-width">
                <label className="form-label">Email Address</label>
                <input type="email" className="form-input" />
              </div>
              <div className="form-group checkbox-group">
                <input type="checkbox" id="newsletter-checkbox" className="form-checkbox" />
                <label htmlFor="newsletter-checkbox" className="form-checkbox-label">
                  Yes, keep me informed about MTJF programs and upcoming campaigns
                </label>
              </div>
              <button type="submit" className="form-button">Sign Up Now</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup;
