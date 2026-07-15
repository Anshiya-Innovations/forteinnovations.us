import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import imgFutureIT from '../../assets/blog/boardroom_meeting.png';
import imgCloudMigration from '../../assets/blog/cloud_migration.png';
import imgITStrategies from '../../assets/blog/it_strategies.png';
import imgCybersecurity from '../../assets/blog/cybersecurity_trends.png';
import './BlogDetails.css';

const blogPostsData = {
  "future-it-for-businesses": {
    title: "The Future of IT for Businesses",
    category: "Business",
    date: "July 12, 2026",
    readTime: "6 min read",
    author: "Forte Insights Team",
    image: imgFutureIT,
    intro: "The business landscape is transforming at a rapid pace, driven by artificial intelligence, cloud advancements, and zero-trust security structures. Understanding the trends defining the future of corporate IT is key to building competitive advantages. At Forte Innovations, we partner with enterprises to turn disruptive technologies into operational milestones.",
    sections: [
      {
        heading: "1. Artificial Intelligence and Agentic Workflows",
        content: "AI is moving from conversational chatbots to autonomous agents capable of performing complex, multi-step workflows. Incorporating agentic AI inside enterprise platforms allows companies to automate operations, optimize logistics, and improve decision-making with minimal human oversight."
      },
      {
        heading: "2. Hybrid Cloud and Hyperscaler Ecosystems",
        content: "Relying on a single cloud vendor introduces operational and compliance risks. Modern IT strategies leverage multi-cloud infrastructures, combining the scalability of public hyperscalers with the strict security governance of private data centres."
      },
      {
        heading: "3. Decentralized and Edge Architecture",
        content: "As IoT devices proliferate and real-time processing demands rise, edge computing is becoming standard. Pushing compute power closer to data sources reduces latency, improves response times, and offloads heavy processing from core cloud architectures."
      }
    ],
    conclusion: "The future of IT belongs to agile organizations that can integrate AI, cloud scalability, and secure connections into a cohesive business model."
  },
  "cloud-migration-best-practices": {
    title: "Cloud Migration Best Practices",
    category: "Technology",
    date: "July 8, 2026",
    readTime: "5 min read",
    author: "Forte Cloud Operations",
    image: imgCloudMigration,
    intro: "Migrating legacy enterprise databases and software suites to the cloud is a critical step in modernizing infrastructure. However, a 'lift-and-shift' approach without proper planning often results in high costs and operational disruptions. Here is our architectural guide to ensuring a seamless, secure cloud migration.",
    sections: [
      {
        heading: "1. Comprehensive Architecture Audits",
        content: "Before moving a single database table, map all legacy software dependencies, data flows, and security requirements. Understanding how existing services interact prevents unexpected downtimes and performance bottlenecks post-migration."
      },
      {
        heading: "2. The Clean Core Migration Model",
        content: "Rather than migrating complex, custom extensions directly, adopt the 'Clean Core' methodology. Decoupling custom logic using middleware or serverless application layers keeps the core cloud databases clean, making future system upgrades seamless."
      },
      {
        heading: "3. Continuous Cost and Configuration Tuning",
        content: "Unmanaged cloud environments quickly accumulate idle instances and redundant storage fees. Standardize resource tagging, set up real-time billing alerts, and leverage container orchestration (like Kubernetes) to scale resources dynamically based on demand."
      }
    ],
    conclusion: "A successful cloud migration is built on solid preparation, standardized architectures, and strict governance to deliver long-term operational success."
  },
  "it-strategies-scale": {
    title: "IT Strategies That Scale",
    category: "IT Solution",
    date: "July 5, 2026",
    readTime: "5 min read",
    author: "Forte Consulting Group",
    image: imgITStrategies,
    intro: "Scaling an organization requires systems and IT architectures that can grow alongside business demand. Standardizing software environments, optimizing database structures, and utilizing analytics are key strategies to scale operations sustainably.",
    sections: [
      {
        heading: "1. Data-Driven Architecture Design",
        content: "Scaling systems requires clear insights into system performance, bottlenecks, and user patterns. Implementing unified monitoring tools and data analytics pipelines enables engineering teams to proactively optimize slow databases and scale compute nodes."
      },
      {
        heading: "2. Modular and API-First Integration",
        content: "Monolithic systems are notoriously difficult to scale because a bottleneck in one module can slow down the entire system. Designing systems with an API-first approach decouples components, allowing teams to scale independent microservices without affecting the core application."
      },
      {
        heading: "3. Automating System Provisioning",
        content: "Manual deployments are slow, error-prone, and impossible to scale. Adopting Infrastructure-as-Code (IaC) allows developers to write configuration scripts that instantly deploy, configure, and teardown server instances in response to actual application demands."
      }
    ],
    conclusion: "Sustainable business scaling is achieved when IT environments are modular, automated, and guided by real-time analytics."
  },
  "cybersecurity-trends": {
    title: "Cybersecurity Trends Every Business Should Know",
    category: "Cybersecurity",
    date: "June 25, 2026",
    readTime: "7 min read",
    author: "Forte Security Operations",
    image: imgCybersecurity,
    intro: "In a digital-first economy, security is not just an IT metric; it is the cornerstone of brand reputation and digital trust. Guarding enterprise assets requires continuous network audits, automated threat detection APIs, and best practices for securing database integrity.",
    sections: [
      {
        heading: "1. The Zero-Trust Security Framework",
        content: "The traditional network perimeter model is dead. Zero-Trust operates on the principle of 'never trust, always verify'. Every access request, regardless of its origin (internal or external), must be fully authenticated, authorized, and encrypted before access is granted to critical applications and databases."
      },
      {
        heading: "2. Proactive Exposure and Vulnerability Management",
        content: "Reactive scanning is no longer sufficient to stop modern threat actors. Organizations need automated, continuous threat modeling and exposure management. Regularly auditing your cloud attack surface, container registries, and application code dependencies helps find and remediate vulnerabilities before they can be exploited."
      },
      {
        heading: "3. Protecting Data Integrity and Privacy",
        content: "Customer data protection is a primary regulatory mandate. Restricting unauthorized data flows, implementing end-to-end data encryption (both in transit and at rest), and setting up robust Data Security Posture Management (DSPM) ensure sensitive PII remains confidential and tamper-proof."
      }
    ],
    conclusion: "Digital trust takes years to build but seconds to lose in a security breach. Enforcing a zero-trust model, auditing compliance metrics, and maintaining a proactive defense architecture are critical for securing the future of your enterprise."
  }
};

const BlogDetails = () => {
  const { id } = useParams();
  const post = blogPostsData[id];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!post) {
    return (
      <div className="blog-details-not-found container">
        <h2>Blog Post Not Found</h2>
        <p>The article you are looking for does not exist or has been moved.</p>
        <Link to="/" className="btn-primary">Back to Homepage</Link>
      </div>
    );
  }

  // Define sidebar posts (excluding current post)
  const recentPosts = Object.keys(blogPostsData)
    .filter(key => key !== id)
    .map(key => ({
      slug: key,
      ...blogPostsData[key]
    }));

  return (
    <div className="blog-details-page">
      {/* Blog Hero Section */}
      <section className="blog-details-hero">
        <div className="hero-bg-clouds"></div>
        <div className="container blog-hero-container">
          <span className="blog-details-badge">{post.category}</span>
          <h1 className="blog-details-title">{post.title}</h1>
          <div className="blog-details-meta">
            <span className="meta-item">By {post.author}</span>
            <span className="meta-divider">|</span>
            <span className="meta-item">{post.date}</span>
            <span className="meta-divider">|</span>
            <span className="meta-item">{post.readTime}</span>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="blog-details-content-section">
        <div className="container grid-sidebar blog-content-grid">
          {/* Left Column: Post Content */}
          <article className="blog-main-content">
            <div className="blog-main-image-wrapper">
              <img src={post.image} alt={post.title} className="blog-main-image" />
            </div>
            
            <p className="blog-lead-paragraph">
              {post.intro}
            </p>

            <div className="blog-body-text">
              {post.sections.map((section, idx) => (
                <div key={idx} className="blog-body-section">
                  <h2 className="blog-section-heading">{section.heading}</h2>
                  <p className="blog-section-paragraph">{section.content}</p>
                </div>
              ))}
            </div>

            <div className="blog-conclusion-box">
              <h3 className="conclusion-title">Key Takeaway</h3>
              <p className="conclusion-text">{post.conclusion}</p>
            </div>
          </article>

          {/* Right Column: Sidebar */}
          <aside className="blog-sidebar">
            {/* Sidebar CTA Box */}
            <div className="sidebar-cta-card">
              <h3>Need Expert IT Assistance?</h3>
              <p>Schedule a 30-minute deep-dive consultation with our principal technology consultants to map your modernization roadmap.</p>
              <a 
                href="https://calendly.com/contact-forteinnovations/30min" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="sidebar-cta-btn"
              >
                Get Free Consultation
              </a>
            </div>

            {/* Recent Posts Section */}
            <div className="sidebar-recent-posts">
              <h4 className="sidebar-title">Recent Articles</h4>
              <div className="recent-posts-list">
                {recentPosts.map((rPost, idx) => (
                  <Link key={idx} to={`/blog/${rPost.slug}`} className="recent-post-item">
                    <span className="recent-post-category">{rPost.category}</span>
                    <h5 className="recent-post-title">{rPost.title}</h5>
                    <span className="recent-post-date">{rPost.date}</span>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
};

export default BlogDetails;
