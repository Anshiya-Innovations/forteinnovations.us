import React from 'react';
import { useNavigate } from 'react-router-dom';
import imgFutureIT from '../../assets/blog/boardroom_meeting.png';
import imgCloudMigration from '../../assets/blog/cloud_migration.png';
import imgITStrategies from '../../assets/blog/it_strategies.png';
import imgCybersecurity from '../../assets/blog/cybersecurity_trends.png';
import './Blog.css';

const Blog = () => {
  const navigate = useNavigate();

  return (
    <section id="blog" className="blog-section">
      <div className="container">
        {/* Header */}
        <div className="blog-header">
          <h2 className="blog-main-title">INSIGHTS & INNOVATIONS</h2>
          <p className="blog-subtitle">
            that is brings together thought leadership, emerging technology trends, research, product updates, and practical ideas that help organizations drive innovation, improve operations, and prepare for the future
          </p>
        </div>

        {/* Layout Grid */}
        <div className="blog-custom-grid">
          {/* Left Column: Big tall card */}
          <div className="blog-left-col">
            <article 
              className="blog-item-tall"
              onClick={() => {
                navigate('/blog/future-it-for-businesses');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <div className="blog-img-container-tall">
                <img src={imgFutureIT} alt="The Future of IT for Businesses" className="blog-img-tall" />
                <span className="blog-badge-overlay">Business</span>
              </div>
              <div className="blog-content-tall">
                <h3 className="blog-title-tall">The Future of IT for Businesses</h3>
                <p className="blog-desc-tall">
                  Explore expert insights on AI, cloud, cybersecurity, enterprise software, and digital transformation shaping tomorrow's business landscape.
                </p>
              </div>
            </article>
          </div>

          {/* Right Column: 2 columns top, 1 wide bottom */}
          <div className="blog-right-col">
            {/* Top Row: 2 smaller cards */}
            <div className="blog-right-top-row">
              <article 
                className="blog-item-small"
                onClick={() => {
                  navigate('/blog/cloud-migration-best-practices');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                <div className="blog-img-container-small">
                  <img src={imgCloudMigration} alt="Cloud Migration Best Practices" className="blog-img-small" />
                  <span className="blog-badge-overlay">Technology</span>
                </div>
                <div className="blog-content-small">
                  <h3 className="blog-title-small">Cloud Migration Best Practices</h3>
                  <p className="blog-desc-small">
                    A complete guide to a successful and secure cloud migration.
                  </p>
                </div>
              </article>

              <article 
                className="blog-item-small"
                onClick={() => {
                  navigate('/blog/it-strategies-scale');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                <div className="blog-img-container-small">
                  <img src={imgITStrategies} alt="IT Strategies That Scale" className="blog-img-small" />
                  <span className="blog-badge-overlay">IT Solution</span>
                </div>
                <div className="blog-content-small">
                  <h3 className="blog-title-small">IT Strategies That Scale</h3>
                  <p className="blog-desc-small">
                    Leverage data analytics to make smarter business decisions.
                  </p>
                </div>
              </article>
            </div>

            {/* Bottom Row: 1 wide horizontal card */}
            <div className="blog-right-bottom-row">
              <article 
                className="blog-item-horizontal"
                onClick={() => {
                  navigate('/blog/cybersecurity-trends');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                <div className="blog-img-container-horizontal">
                  <img src={imgCybersecurity} alt="Cybersecurity Trends Every Business Should Know" className="blog-img-horizontal" />
                  <span className="blog-badge-overlay">Cybersecurity</span>
                </div>
                <div className="blog-content-horizontal">
                  <h3 className="blog-title-horizontal">Cybersecurity Trends Every Business Should Know</h3>
                  <p className="blog-desc-horizontal">
                    Gain the Insights You Need to Strengthen Security, Reduce Risk, and Protect Your Business from Emerging Cyber Threats.Stay Ahead of Cyber Threats with Expert Insights, Emerging Trends, and Proven Security Strategies.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
