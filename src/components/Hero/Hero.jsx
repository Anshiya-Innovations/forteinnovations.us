import React from 'react';
import meetingRoomHologram from '../../assets/meeting_room_hologram.jpg';
import meetingRoomHologramMobile from '../../assets/meeting_room_hologram-mobile.webp';
import './Hero.css';

const Hero = ({ onCtaClick }) => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-bg-clouds"></div>
      <div className="hero-left-clouds"></div>
      <div className="container hero-container grid-2">
        <div className="hero-content">
          <h1 className="hero-title">
            Technology That <br />
            <span className="hero-title-line2">Moves Business Forward</span>
          </h1>
          
          <div className="hero-subtitle-bullets">
            <span className="bullet-dot">&bull;</span> SAP BTP 
            <span className="bullet-dot">&bull;</span> Cloud 
            <span className="bullet-dot">&bull;</span> Cybersecurity
          </div>
          
          <p className="hero-description">
            Delivering enterprise-grade technology solutions that accelerate digital transformation through artificial intelligence, cloud modernization, SAP BTP implementation, and custom software development.
          </p>
          
          <div className="hero-actions">
            <button onClick={() => window.open('https://calendly.com/contact-forteinnovations/30min', '_blank', 'noopener,noreferrer')} className="btn-primary hero-btn">
              Get Free Consultation
            </button>
            <button onClick={() => onCtaClick('services2-section')} className="btn-outline hero-btn">
              Explore Our Services
            </button>
          </div>
        </div>
        
        <div className="hero-image-wrapper">
          <picture>
            <source media="(max-width: 768px)" srcSet={meetingRoomHologramMobile} type="image/webp" />
            <img 
              src={meetingRoomHologram} 
              alt="Forte Innovations Meeting Room Hologram" 
              className="hero-dashboard-img"
              fetchPriority="high"
              width="735"
              height="490"
            />
          </picture>
        </div>
      </div>
    </section>
  );
};

export default Hero;
