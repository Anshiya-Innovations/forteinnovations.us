import React from 'react';
import { useNavigate } from 'react-router-dom';
import cloudOpt from '../../assets/case-studies/cloud_optimization.png';
import cloudOptMobile from '../../assets/case-studies/cloud_optimization-mobile.webp';
import netSec from '../../assets/case-studies/network_security.png';
import netSecMobile from '../../assets/case-studies/network_security-mobile.webp';
import crmSuccess from '../../assets/case-studies/crm_success.png';
import crmSuccessMobile from '../../assets/case-studies/crm_success-mobile.webp';
import dataMig from '../../assets/case-studies/data_migration.png';
import dataMigMobile from '../../assets/case-studies/data_migration-mobile.webp';
import './CaseStudy.css';

const CaseStudy = () => {
  const navigate = useNavigate();
  const cases = [
    {
      slug: "cloud-infrastructure-optimization",
      image: cloudOpt,
      imageMobile: cloudOptMobile,
      title: "Cloud Infrastructure Optimization",
      description: "Modernized infrastructure and reduced operational costs by 35%.",
    },
    {
      slug: "network-security-enhancement",
      image: netSec,
      imageMobile: netSecMobile,
      title: "Network Security Enhancement",
      description: "Strengthened network security and improved threat prevention by 60%.",
    },
    {
      slug: "crm-integration-success",
      image: crmSuccess,
      imageMobile: crmSuccessMobile,
      title: "CRM Integration Success",
      description: "Integrated CRM systems for 40% improvement in customer response time.",
    },
    {
      slug: "real-time-data-migration",
      image: dataMig,
      imageMobile: dataMigMobile,
      title: "Real-time Data Migration",
      description: "Migrated critical data with zero downtime and high reliability.",
    }
  ];

  return (
    <section id="case-study" className="case-study-section">
      <div className="container">
        <div className="case-study-header">
          <h2 className="case-study-main-title">REAL RESULTS, REAL IMPACT.</h2>
          <p className="case-study-subtitle">
            We drive measurable outcomes that help businesses succeed in a rapidly evolving digital world.
          </p>
        </div>

        <div className="grid-2 case-study-grid">
          {cases.map((item, index) => (
            <div 
              key={index} 
              className="case-study-card"
              onClick={() => {
                navigate(`/case-study/${item.slug}`);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              style={{ cursor: 'pointer' }}
            >
              <div className="case-study-img-wrapper">
                <picture>
                  <source media="(max-width: 768px)" srcSet={item.imageMobile} type="image/webp" />
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="case-study-img" 
                    width="577"
                    height="267"
                  />
                </picture>
              </div>
              <div className="case-study-card-content">
                <h3 className="case-study-card-title">{item.title}</h3>
                <p className="case-study-card-desc">{item.description}</p>
                <span className="case-study-read-more">Read More</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
