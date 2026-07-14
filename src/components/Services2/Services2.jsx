import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Services2.css';

// Import icons
import iconMonitor from '../../assets/services2/icon-monitor.png';
import iconLock from '../../assets/services2/icon-lock.png';
import iconShieldDoc from '../../assets/services2/icon-shield-doc.png';
import iconGearBriefcase from '../../assets/services2/icon-gear-briefcase.png';
import iconCloud from '../../assets/services2/icon-cloud.png';
import iconPeople from '../../assets/services2/icon-people.png';
import iconCap from '../../assets/services2/icon-cap.png';
import iconPhone from '../../assets/services2/icon-phone.png';

const Services2 = () => {
  const navigate = useNavigate();

  const allServices = [
    {
      type: "image",
      icon: iconMonitor,
      title: <>AI Integration &<br />Automation</>,
      description: "Transform your business with AI-powered automation that streamlines workflows, enhances operational efficiency, reduces manual effort, and enables faster, data-driven decision-making across your organization.",
      slug: "ai-integration-automation"
    },
    {
      type: "text",
      iconText: "SAP",
      title: <>SAP BTP</>,
      description: "Build, extend, integrate, and modernize SAP applications using SAP Business Technology Platform to accelerate innovation, improve business processes, and connect enterprise systems seamlessly.",
      slug: "sap-btp"
    },
    {
      type: "image",
      icon: iconLock,
      title: <>Cyber Security</>,
      description: "Protect your organization with comprehensive cybersecurity solutions, including threat detection, vulnerability management, endpoint protection, network security, and proactive risk mitigation strategies.",
      slug: "cyber-security"
    },
    {
      type: "image",
      icon: iconShieldDoc,
      title: <>Security<br />Compliance & Audit</>,
      description: "Achieve and maintain regulatory compliance with robust security audits, including SOC 2, ISO 27001, GDPR, and HIPAA compliance frameworks, safeguarding your business from legal and operational risks.",
      slug: "security-compliance-audit"
    },
    {
      type: "image",
      icon: iconGearBriefcase,
      title: <>Business Automations</>,
      description: "Streamline your day-to-day operations by automating repetitive tasks, designing smart workflows, and integrating modern automation tools to boost team productivity and reduce operational costs.",
      slug: "business-automations"
    },
    {
      type: "image",
      icon: iconCloud,
      title: <>Cloud Solutions</>,
      description: "Design, migrate, and scale your workloads on secure, high-performance cloud environments (AWS, Azure, GCP) with reliable infrastructure, disaster recovery, and continuous cost optimization.",
      slug: "cloud-solutions"
    },
    {
      type: "image",
      icon: iconCap,
      title: <>Employee Training Program</>,
      description: "Empower your workforce with specialized, hands-on corporate training in modern technology stacks, including AI, Cloud DevOps, Software Engineering, and SAP systems, to drive in-house innovation.",
      slug: "employee-training-program"
    },
    {
      type: "image",
      icon: iconPeople,
      title: <>Internship for Students</>,
      description: "Provide aspiring tech professionals with real-world project experience, mentor-led guidance, and hands-on training in cutting-edge domains like Agentic AI, full-stack development, and SAP systems.",
      slug: "internship-for-students"
    },
    {
      type: "image",
      icon: iconPhone,
      title: <>Mobile App Development</>,
      description: "Build high-performance, user-friendly, and scalable mobile applications for iOS and Android platforms using native technologies, React Native, or Flutter, optimized for seamless user experiences.",
      slug: "mobile-app-development"
    }
  ];

  return (
    <section id="services2-section" className="services2-section">
      <div className="container">
        <div className="services2-header">
          <span className="services2-subtitle">OUR SERVICES</span>
          <h2 className="services2-title">Our services for complete digital transformation.</h2>
        </div>
      </div>

      {/* Infinite slider container */}
      <div className="services2-slider-container">
        <div className="services2-slider-track">
          {/* Double list mapping for seamless infinite loop */}
          {[...allServices, ...allServices].map((service, index) => {
            return (
              <div 
                key={index} 
                className="service2-card"
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  navigate(`/service-details/${service.slug}`);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                <div className="service2-icon-wrapper">
                  {service.type === "image" ? (
                    <img src={service.icon} alt="Service Icon" className="service2-icon-img" />
                  ) : (
                    <span className="service2-icon-text">{service.iconText}</span>
                  )}
                </div>
                <h3 className="service2-card-title">{service.title}</h3>
                <p className="service2-card-description">{service.description}</p>
                <span 
                  className="service2-card-link"
                  style={{ cursor: 'pointer' }}
                >
                  See More Details &gt;
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services2;
