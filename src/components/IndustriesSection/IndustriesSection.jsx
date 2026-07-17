import React from 'react';
import { useNavigate } from 'react-router-dom';
import bgHealthcare from '../../assets/industry/bg/image 3.png';
import bgHealthcareMobile from '../../assets/industry/bg/image 3-mobile.webp';
import bgBanking from '../../assets/industry/bg/image 4.png';
import bgBankingMobile from '../../assets/industry/bg/image 4-mobile.webp';
import bgManufacturing from '../../assets/industry/bg/image 5.png';
import bgManufacturingMobile from '../../assets/industry/bg/image 5-mobile.webp';
import bgLogistics from '../../assets/industry/bg/image 8.png';
import bgLogisticsMobile from '../../assets/industry/bg/image 8-mobile.webp';
import './IndustriesSection.css';

const IndustriesSection = () => {
  const navigate = useNavigate();

  const industryCards = [
    {
      title: "Manufacturing",
      bgImage: bgManufacturing,
      bgImageMobile: bgManufacturingMobile,
    },
    {
      title: "FinTech",
      bgImage: bgBanking,
      bgImageMobile: bgBankingMobile,
    },
    {
      title: "Healthcare",
      bgImage: bgHealthcare,
      bgImageMobile: bgHealthcareMobile,
    },
    {
      title: "Logistics",
      bgImage: bgLogistics,
      bgImageMobile: bgLogisticsMobile,
    }
  ];

  return (
    <section id="industry-section" className="industry-section">
      <div className="container">
        <div className="industry-section-header">
          <div className="industry-header-left">
            <span className="industry-section-subtitle">INDUSTRIES WE SERVE</span>
            <h2 className="industry-section-title">Tailored Solutions for Specialized Industries</h2>
          </div>
          <div className="industry-header-right">
            <button 
              onClick={() => {
                navigate('/industries');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }} 
              className="industry-view-all-btn"
            >
              View All Industries
            </button>
          </div>
        </div>

        <div className="grid-4 industry-section-grid">
          {industryCards.map((card, index) => (
            <div 
              key={index} 
              className="industry-section-card"
              onClick={() => {
                navigate('/industries');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <div 
                className="industry-section-card-bg" 
                style={{ 
                  '--bg-desktop': `url("${card.bgImage}")`, 
                  '--bg-mobile': `url("${card.bgImageMobile}")` 
                }}
              ></div>
              <div className="industry-section-card-overlay"></div>
              <div className="industry-section-card-content">
                <h3 className="industry-section-card-title">{card.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
