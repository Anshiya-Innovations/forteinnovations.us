import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CTA.css';

const CTA = ({ 
  title = "Ready to Accelerate Your Digital Transformation?",
  subtitle = "Partner with Forte Innovations Inc. to build intelligent, secure, and scalable technology solutions that empower your business. Let's build the future together.",
  primaryText = "Schedule a Free Consultation",
  primaryClass = "cta-btn-primary",
  primaryOnClick,
  secondaryText = null,
  secondaryClass = "cta-btn-outline",
  secondaryOnClick
}) => {
  const navigate = useNavigate();

  const handlePrimaryClick = () => {
    if (primaryOnClick) {
      primaryOnClick();
    } else {
      window.open('https://calendly.com/forteinnovations/30min', '_blank', 'noopener,noreferrer');
    }
  };

  const handleSecondaryClick = () => {
    if (secondaryOnClick) {
      secondaryOnClick();
    } else {
      navigate('/contact');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <section className="industry-bottom-cta-section">
      <div className="container">
        <div className="industry-bottom-cta-container">
          <h2 className="industry-bottom-cta-title">{title}</h2>
          <p className="industry-bottom-cta-subtitle">{subtitle}</p>
          <div className="industry-bottom-cta-actions">
            <button 
              onClick={handlePrimaryClick} 
              className={`industry-bottom-cta-btn ${primaryClass}`}
            >
              {primaryText}
            </button>
            {secondaryText && (
              <button 
                onClick={handleSecondaryClick} 
                className={`industry-bottom-cta-btn ${secondaryClass}`}
              >
                {secondaryText}
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
