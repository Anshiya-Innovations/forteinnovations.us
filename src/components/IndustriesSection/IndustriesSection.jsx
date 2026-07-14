import React from 'react';
import { useNavigate } from 'react-router-dom';
import bgHealthcare from '../../assets/industry/bg/image 3.png';
import bgBanking from '../../assets/industry/bg/image 4.png';
import bgManufacturing from '../../assets/industry/bg/image 5.png';
import bgLogistics from '../../assets/industry/bg/image 8.png';
import './IndustriesSection.css';

const IndustriesSection = () => {
  const navigate = useNavigate();

  const industryCards = [
    {
      title: "Manufacturing",
      bgImage: bgManufacturing,
    },
    {
      title: "FinTech",
      bgImage: bgBanking,
    },
    {
      title: "Healthcare",
      bgImage: bgHealthcare,
    },
    {
      title: "Logistics",
      bgImage: bgLogistics,
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
                style={{ backgroundImage: `url("${card.bgImage}")` }}
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
