import React from 'react';
import { Link } from 'react-router-dom';

// Import footer images
import logoImg from '../../assets/logo_forte_dark_footer_new.jpg';
import iconLinkedin from '../../assets/footer-linkedin-v2.png';
import iconFacebook from '../../assets/footer-facebook-v2.png';
import iconInstagram from '../../assets/footer-instagram-v2.png';
import iconYoutube from '../../assets/footer-youtube-v2.png';
import btnNewsletter from '../../assets/footer-newsletter-btn.png';

import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;

    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        access_key: "83390b46-d43e-4acf-ac88-dd001a4ba3a6",
        subject: "Newsletter Subscription Request - Forte Innovations",
        email: email
      })
    })
    .then(res => {
      alert('Thank you for subscribing to our newsletter!');
      e.target.reset();
    })
    .catch(err => {
      alert('There was an error subscribing. Please try again.');
    });
  };

  return (
    <footer className="footer">
      <div className="container footer-container">
        {/* Column 1: Brand Info & Socials */}
        <div className="footer-brand-col">
          <Link to="/" className="footer-logo" onClick={handleScrollToTop}>
            <img src={logoImg} alt="Forte Innovations Logo" className="footer-logo-img" width="320" height="145" />
          </Link>
          <p className="footer-description">
            Empowering enterprises with innovative technology solutions that accelerate digital transformation, optimize business performance, and strengthen security in an ever-evolving digital landscape.
          </p>
          <div className="footer-socials-row">
            <a href="https://www.linkedin.com/company/forte-innovations1/" target="_blank" rel="noopener noreferrer" className="footer-social-link">
              <img src={iconLinkedin} alt="LinkedIn Icon" className="footer-social-icon" width="26" height="26" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61591348392051" target="_blank" rel="noopener noreferrer" className="footer-social-link">
              <img src={iconFacebook} alt="Facebook Icon" className="footer-social-icon" width="26" height="26" />
            </a>
            <a href="https://www.instagram.com/forte_innovations/" target="_blank" rel="noopener noreferrer" className="footer-social-link">
              <img src={iconInstagram} alt="Instagram Icon" className="footer-social-icon" width="28" height="28" />
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="footer-social-link">
              <img src={iconYoutube} alt="YouTube Icon" className="footer-social-icon" width="28" height="20" />
            </a>
          </div>
        </div>

        {/* Column 2: Company */}
        <div className="footer-links-col">
          <h3 className="footer-title">COMPANY</h3>
          <ul className="footer-links">
            <li><Link to="/about-us" onClick={handleScrollToTop}>About Us</Link></li>
            <li><Link to="/career" onClick={handleScrollToTop}>Careers</Link></li>
            <li><Link to="/service-details" onClick={handleScrollToTop}>Services</Link></li>
            <li><Link to="/contact" onClick={handleScrollToTop}>Contact Us</Link></li>
          </ul>
        </div>

        {/* Column 3: Service Links */}
        <div className="footer-links-col">
          <h3 className="footer-title">SERVICE LINKS</h3>
          <ul className="footer-links">
            <li><Link to="/service-details/ai-integration-automation" onClick={handleScrollToTop}>AI Integration & Automation</Link></li>
            <li><Link to="/service-details/sap-btp" onClick={handleScrollToTop}>SAP BTP</Link></li>
            <li><Link to="/service-details/cyber-security" onClick={handleScrollToTop}>Cyber Security</Link></li>
            <li><Link to="/service-details/cloud-solutions" onClick={handleScrollToTop}>Cloud Solutions</Link></li>
            <li><Link to="/" state={{ scrollTo: 'services2-section' }}>All Services</Link></li>
          </ul>
        </div>

        {/* Column 4: Newsletter */}
        <div className="footer-links-col footer-newsletter-col">
          <h3 className="footer-title">NEWSLETTER</h3>
          <p className="footer-newsletter-text">
            Subscribe to our newsletter for the latest tech updates and strategic business insights.
          </p>

          <form onSubmit={handleNewsletterSubmit} className="footer-newsletter-form">
            <input 
              type="email" 
              name="email"
              placeholder="Enter your email" 
              className="footer-newsletter-input"
              required 
            />
            <button type="submit" className="footer-newsletter-btn-wrapper">
              <img src={btnNewsletter} alt="Submit Arrow" className="footer-newsletter-btn-img" width="52" height="38" />
            </button>
          </form>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="footer-bottom">
        <p className="copyright-text">
          &copy; {currentYear} FORTE INNOVATIONS. ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
