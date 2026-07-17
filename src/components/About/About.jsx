import React from 'react';
import aboutAiBoardroom from '../../assets/about_ai_boardroom.png';
import aboutAiBoardroomMobile from '../../assets/about_ai_boardroom-mobile.webp';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container about-container-full">
        {/* Centered Heading */}
        <h2 className="about-section-main-title">Transforming Business with Technology</h2>
        
        <div className="grid-2 about-grid-content">
          {/* Left Side: High Quality Image */}
          <div className="about-image-wrapper">
            <picture>
              <source media="(max-width: 768px)" srcSet={aboutAiBoardroomMobile} type="image/webp" />
              <img 
                src={aboutAiBoardroom} 
                alt="Forte Innovations AI Boardroom Meeting" 
                className="about-img-boardroom"
                width="597"
                height="335"
              />
            </picture>
          </div>

          {/* Right Side: Text details, bullets and Stats */}
          <div className="about-content">
            <p className="about-description">
              At Forte Innovations, we deliver secure, scalable, and future-ready IT solutions. Our expertise spans the entire digital lifecycle, from strategic consultancy to cloud-native development.
            </p>

            <ul className="about-bullets-list">
              <li>
                <span className="bullet-marker">&bull;</span>
                <span className="bullet-text">Specialized expertise in SAP Business Technology Platform (BTP)</span>
              </li>
              <li>
                <span className="bullet-marker">&bull;</span>
                <span className="bullet-text">End-to-end AI integration and workflow automation</span>
              </li>
              <li>
                <span className="bullet-marker">&bull;</span>
                <span className="bullet-text">Next-gen Application Security and Compliance audits</span>
              </li>
            </ul>

            <div className="about-stats-row">
              <div className="about-stat-item">
                <span className="about-stat-number">50+</span>
                <span className="about-stat-label">Experts Delivered</span>
              </div>
              <div className="about-stat-item">
                <span className="about-stat-number">30+</span>
                <span className="about-stat-label">Happy Clients</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
