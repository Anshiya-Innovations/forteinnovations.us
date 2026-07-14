import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

// Import images from case-studies assets
import cloudOpt from '../../assets/case-studies/cloud_optimization.png';
import netSec from '../../assets/case-studies/network_security.png';
import crmSuccess from '../../assets/case-studies/crm_success.png';
import dataMig from '../../assets/case-studies/data_migration.png';

import './CaseStudyDetails.css';

const caseStudiesData = {
  "cloud-infrastructure-optimization": {
    image: cloudOpt,
    title: "Cloud Infrastructure Optimization",
    subtitle: "How we refactored server provisioning, containerized operations, and optimized cloud workloads to slash monthly expenses by 35%.",
    client: "ScaleTech Solutions",
    industry: "Software & Technology",
    timeline: "3 Months",
    keyMetric: "35% Cost Reduction",
    techStack: ["AWS EC2", "Kubernetes (EKS)", "Terraform", "Prometheus", "Grafana"],
    challenge: "ScaleTech was suffering from runaway AWS spend due to over-provisioned instances, unmanaged storage buckets, and a lack of container orchestration. Their legacy virtual machine configurations struggled to handle seasonal traffic spikes, leading to manual scaling interventions and high database latency. They required a modern, automated system that could scale resources dynamically while significantly reducing monthly operations budgets.",
    approach: "Forte refactored the entire infrastructure. We containerized core applications, deployed them on Amazon EKS with dynamic auto-scaling policies, and built infrastructure-as-code modules using Terraform. Additionally, we set up real-time observability dashboards using Prometheus and Grafana to track resource utilization continuously and identify further areas for optimization.",
    methodology: [
      { phase: "Phase 1: Auditing & Analysis", detail: "Conducted a complete resource audit of the existing AWS landscape, locating idle instances and unassigned volumes." },
      { phase: "Phase 2: Blueprints & Containerization", detail: "Dockerized core monolithic components and mapped out Kubernetes autoscaling thresholds based on CPU/Memory load." },
      { phase: "Phase 3: IaC & Deployment", detail: "Wrote modular Terraform scripts to provision secure, redundant development and staging environments." },
      { phase: "Phase 4: Optimization & Verification", detail: "Implemented connection pooling, adjusted storage tiers, and verified high-availability failovers." }
    ],
    results: [
      { label: "Cost Reduction", value: "35%" },
      { label: "Auto-Scaling Time", value: "<2 mins" },
      { label: "Downtime Incidents", value: "0" }
    ],
    testimonial: "Forte's DevOps architects didn't just optimize our servers—they transformed our operating model. Our monthly cloud bill dropped instantly, and our platform is now completely self-healing under traffic spikes."
  },
  "network-security-enhancement": {
    image: netSec,
    title: "Network Security Enhancement",
    subtitle: "Securing corporate perimeters and deploying next-generation threat intelligence to boost system resilience by 60%.",
    client: "Aero Logistics Corp",
    industry: "Transport & Logistics",
    timeline: "4 Months",
    keyMetric: "60% Threat Prevention",
    techStack: ["Palo Alto NGFW", "Wiz Security", "Zero-Trust IAM", "Splunk SOAR"],
    challenge: "Aero Logistics faced frequent phishing attempts, unauthorized endpoint access, and lacked centralized visibility into security events. They needed to implement robust zero-trust access controls and a modern Security Operations Center (SOC) framework to protect global inventory databases. Their existing setup left them vulnerable to credential exploitation and supply chain configuration risks.",
    approach: "We deployed next-generation Palo Alto firewalls, integrated Wiz Security for cloud posture management, enforced Zero-Trust Identity & Access Management (IAM), and configured automated threat response playbooks via Splunk SOAR. This unified perimeter defenses with proactive exposure detection.",
    methodology: [
      { phase: "Phase 1: Risk Assessment", detail: "Audited network logs, firewall policies, and IAM permissions to find potential attack vectors." },
      { phase: "Phase 2: Zero-Trust Implementation", detail: "Reconfigured directory services to enforce multi-factor authentication and role-based least privilege access." },
      { phase: "Phase 3: Threat Center Integration", detail: "Connected endpoint sensors and cloud logging APIs to a centralized Splunk SOAR dashboard." },
      { phase: "Phase 4: Attack Simulation", detail: "Executed simulated penetration testing to verify threat detection speeds and automated playbooks." }
    ],
    results: [
      { label: "Security Visibility", value: "100%" },
      { label: "Threat Prevention Rate", value: "+60%" },
      { label: "Compliance Score", value: "99.2%" }
    ],
    testimonial: "Securing our logistics network was an absolute priority. Forte Innovations implemented a comprehensive Zero-Trust framework that has neutralized incoming threats automatically and given our leadership total peace of mind."
  },
  "crm-integration-success": {
    image: crmSuccess,
    title: "CRM Integration Success",
    subtitle: "Integrating enterprise CRM systems with legacy SAP databases to drive customer response speed by 40%.",
    client: "Nova Retail Group",
    industry: "Retail & E-commerce",
    timeline: "5 Months",
    keyMetric: "40% Faster Response",
    techStack: ["SAP BTP Integration Suite", "Salesforce CRM", "OpenAPI Gateway", "Redis Caching"],
    challenge: "Nova Retail's customer support representatives had to switch between three separate legacy billing platforms and an SAP database to resolve customer queries. This led to high average handle times, disjointed customer profiles, and data synchronization lag. They needed to centralize interactions into a single Salesforce UI connected in real-time to SAP ERP systems.",
    approach: "Forte implemented SAP BTP Integration Suite to unify Salesforce CRM with the core database layers. We created high-throughput API endpoints secured by OAuth2 and optimized data fetching with Redis caching. Customer service agents were provided with a unified interface mapping orders, billing history, and preferences.",
    methodology: [
      { phase: "Phase 1: Interface Mapping", detail: "Analyzed legacy database schemas and Salesforce objects to design the unified API data contracts." },
      { phase: "Phase 2: Integration Suite Config", detail: "Built real-time replication scripts on SAP BTP using robust queue structures to handle transactional bursts." },
      { phase: "Phase 3: API Performance Tuning", detail: "Implemented Redis cache layers for static order meta-data, reducing core query loads." },
      { phase: "Phase 4: Agent Training & Deploy", detail: "Provided support training for the new unified dashboard and completed a staged deployment across global teams." }
    ],
    results: [
      { label: "Response Speed", value: "40%" },
      { label: "Customer Satisfaction", value: "+28%" },
      { label: "Sync Latency", value: "<500ms" }
    ],
    testimonial: "Our support agents now have a single source of truth for customer accounts. Customer queries that used to take fifteen minutes are now resolved in under three, directly increasing our retention rate."
  },
  "real-time-data-migration": {
    image: dataMig,
    title: "Real-time Data Migration",
    subtitle: "Migrating over 50 Terabytes of historical transactional records to cloud-native warehousing with zero operational downtime.",
    client: "Apex Financial Markets",
    industry: "Financial Services",
    timeline: "6 Months",
    keyMetric: "Zero Downtime Migration",
    techStack: ["Apache Kafka", "SAP HANA Cloud", "AWS Database Migration Service", "Docker"],
    challenge: "Apex Financial needed to migrate their aging on-premise transactional data warehouse to SAP HANA Cloud. With millions of active trades happening daily, they could not afford any system downtime or risk data corruption during the migration process. Previous attempts had failed due to latency lags between data centers.",
    approach: "We designed an active-active database replication pipeline using Apache Kafka and AWS DMS. We synchronized historical data in batches while stream-processing real-time transactions concurrently, enabling a zero-downtime cutover. The system maintained absolute consistency throughout the transition.",
    methodology: [
      { phase: "Phase 1: Environment Setup", detail: "Configured SAP HANA Cloud environments and optimized memory allocations for heavy financial workloads." },
      { phase: "Phase 2: Data Replication", detail: "Built batch loading scripts to replicate 50TB of static historical transaction files." },
      { phase: "Phase 3: Stream Synchronization", detail: "Implemented Apache Kafka broker topics to capture live database transactions and replicate them in real-time." },
      { phase: "Phase 4: Cutover Execution", detail: "Validated source and target data hashes, redirecting client-facing applications to the cloud with zero downtime." }
    ],
    results: [
      { label: "Operational Downtime", value: "0 hours" },
      { label: "Data Accuracy Rate", value: "99.999%" },
      { label: "Report Generation Speed", value: "10x" }
    ],
    testimonial: "Migrating financial systems under live trade conditions is like repairing a plane engine mid-flight. Forte's architects executed this database migration with zero disruptions and absolute precision."
  }
};

const CaseStudyDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const caseItem = caseStudiesData[id];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!caseItem) {
    return (
      <div className="case-details-not-found container">
        <h2>Case Study Not Found</h2>
        <p>The case study you are looking for does not exist or has been moved.</p>
        <Link to="/" className="btn-primary">Back to Homepage</Link>
      </div>
    );
  }

  // Get other case studies to display as recommendations
  const otherCases = Object.keys(caseStudiesData)
    .filter(key => key !== id)
    .map(key => ({
      slug: key,
      ...caseStudiesData[key]
    }));

  return (
    <div className="case-details-page">
      {/* 1. Header Hero section */}
      <section className="case-details-hero">
        <div className="hero-bg-clouds"></div>
        <div className="container">
          <div className="case-details-breadcrumb">
            <Link to="/">Home</Link> &rsaquo; <span className="active-breadcrumb">Case Studies</span> &rsaquo; <span>{caseItem.title}</span>
          </div>

          <div className="case-details-hero-text">
            <span className="case-details-badge">{caseItem.industry}</span>
            <h1 className="case-details-title">{caseItem.title}</h1>
            <p className="case-details-subtitle">{caseItem.subtitle}</p>
          </div>
        </div>
      </section>

      {/* 2. Structured Details Layout */}
      <section className="case-details-content-section">
        <div className="container case-details-layout">
          
          {/* Main details */}
          <div className="case-details-main">
            {/* Featured Image */}
            <div className="case-main-image-block">
              <img src={caseItem.image} alt={caseItem.title} className="case-main-image" />
            </div>

            {/* Challenge Card */}
            <div className="case-content-block">
              <h2 className="case-section-heading">The Challenge</h2>
              <p className="case-section-paragraph">{caseItem.challenge}</p>
            </div>

            {/* Approach Card */}
            <div className="case-content-block">
              <h2 className="case-section-heading">Our Approach</h2>
              <p className="case-section-paragraph">{caseItem.approach}</p>
            </div>

            {/* Step-by-Step Methodology (stepper line style) */}
            <div className="case-content-block">
              <h2 className="case-section-heading">Methodology & Execution</h2>
              <div className="case-timeline-stepper">
                {caseItem.methodology.map((step, idx) => (
                  <div key={idx} className="case-step-item">
                    <div className="case-step-indicator">
                      <span className="step-num">{idx + 1}</span>
                    </div>
                    <div className="case-step-content">
                      <h4 className="case-step-title">{step.phase}</h4>
                      <p className="case-step-desc">{step.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Metrics Dashboard Card */}
            <div className="case-content-block">
              <h2 className="case-section-heading">Key Project Outcomes</h2>
              <div className="case-metrics-grid">
                {caseItem.results.map((metric, idx) => (
                  <div key={idx} className="case-metric-card">
                    <span className="case-metric-value">{metric.value}</span>
                    <span className="case-metric-label">{metric.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonial Quote */}
            <div className="case-testimonial-card">
              <p className="case-testimonial-quote">"{caseItem.testimonial}"</p>
              <div className="case-testimonial-author">
                <span className="author-name">Executive Team</span>
                <span className="author-company">{caseItem.client}</span>
              </div>
            </div>
          </div>

          {/* Project Metadata Sidebar */}
          <aside className="case-details-sidebar">
            <div className="case-sidebar-card">
              <h3 className="case-sidebar-title">Project Profile</h3>
              
              <div className="sidebar-meta-list">
                <div className="sidebar-meta-item">
                  <span className="meta-label">Client</span>
                  <span className="meta-val">{caseItem.client}</span>
                </div>
                <div className="sidebar-meta-item">
                  <span className="meta-label">Industry</span>
                  <span className="meta-val">{caseItem.industry}</span>
                </div>
                <div className="sidebar-meta-item">
                  <span className="meta-label">Duration</span>
                  <span className="meta-val">{caseItem.timeline}</span>
                </div>
                <div className="sidebar-meta-item">
                  <span className="meta-label">Impact Key</span>
                  <span className="meta-val highlight-blue">{caseItem.keyMetric}</span>
                </div>
              </div>

              <div className="sidebar-tech-section">
                <h4 className="tech-section-title">Technology Stack</h4>
                <div className="tech-badge-container">
                  {caseItem.techStack.map((tech, idx) => (
                    <span key={idx} className="tech-badge">{tech}</span>
                  ))}
                </div>
              </div>

              <button 
                onClick={() => {
                  navigate('/contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }} 
                className="btn-primary sidebar-contact-btn"
              >
                Launch Similar Project
              </button>
            </div>

            {/* Recommendation Cards */}
            <div className="sidebar-recommendations">
              <h4 className="sidebar-title">More Case Studies</h4>
              <div className="recommendations-list">
                {otherCases.slice(0, 2).map((item, idx) => (
                  <Link key={idx} to={`/case-study/${item.slug}`} className="recommend-card">
                    <img src={item.image} alt={item.title} className="recommend-card-img" />
                    <div className="recommend-card-content">
                      <span className="recommend-category">{item.industry}</span>
                      <h5 className="recommend-title">{item.title}</h5>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </aside>

        </div>
      </section>

      {/* 3. Bottom Grid: Explore All Case Studies */}
      <section className="case-details-bottom-grid">
        <div className="container">
          <h2 className="bottom-grid-title">All Case Studies</h2>
          <div className="case-studies-all-grid">
            {Object.keys(caseStudiesData).map((key) => {
              const item = caseStudiesData[key];
              const isCurrent = key === id;
              return (
                <Link 
                  key={key} 
                  to={`/case-study/${key}`} 
                  className={`all-grid-card ${isCurrent ? 'active-card' : ''}`}
                >
                  <div className="all-grid-img-wrapper">
                    <img src={item.image} alt={item.title} className="all-grid-img" />
                    {isCurrent && <span className="all-grid-active-badge">Current</span>}
                  </div>
                  <div className="all-grid-content">
                    <span className="all-grid-category">{item.industry}</span>
                    <h4 className="all-grid-card-title">{item.title}</h4>
                    <p className="all-grid-card-desc">{item.subtitle}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudyDetails;
