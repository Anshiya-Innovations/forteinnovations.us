import React, { useState, useEffect, useRef } from 'react';
import client1 from '../../assets/client-reviews/client-1.png';
import client2 from '../../assets/client-reviews/client-2.png';
import client3 from '../../assets/client-reviews/client-3.png';
import client4 from '../../assets/client-reviews/client-4.png';
import client5 from '../../assets/client-reviews/client-5.png';
import './ClientReviews.css';

const ClientReviews = () => {
  const reviews = [
    {
      avatar: client1,
      name: "David Miller",
      text: "Forte Innovations didn't just build our systems, they trained our entire team on the AI tools behind them. Our employees went from watching automation happen to actually running it themselves. That knowledge transfer is worth more than the software itself."
    },
    {
      avatar: client2,
      name: "Sarah Jenkins",
      text: "Cybersecurity was always the afterthought with our previous vendors. With Forte Innovations, it was built in from day one. Their team doesn't just build technology, they build it responsibly."
    },
    {
      avatar: client3,
      name: "Michael Chang",
      text: "We came to Forte Innovations for a SAP integration and left with a partner. What used to take our old vendor months, their team delivered in weeks, without cutting corners on security. That's rare."
    },
    {
      avatar: client4,
      name: "Ethan Watson",
      text: "The team at Forte Innovations modernized our legacy databases and migrated over 50TB of transactional records with absolutely zero downtime. Their attention to precision and operational stability is unmatched."
    },
    {
      avatar: client5,
      name: "Andrew Stevens",
      text: "Autonomic auto-scaling and cloud refactoring by Forte Innovations cut our AWS expenses by 35% within the first month. They are true masters of cloud optimization and container infrastructure."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);

  const startTimer = () => {
    stopTimer();
    timerRef.current = setInterval(() => {
      if (!isPaused) {
        handleNext();
      }
    }, 4000);
  };

  const stopTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  };

  useEffect(() => {
    startTimer();
    return () => stopTimer();
  }, [currentIndex, isPaused]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
  };

  const handleAvatarClick = (index) => {
    setCurrentIndex(index);
  };

  // Avatar dot width is 56px + 20px gap = 76px.
  // 152px is the centering offset (2 * 76px) so that the active index is always perfectly centered.
  const translationOffset = -(currentIndex - 2) * 76;

  return (
    <section id="reviews" className="reviews-section">
      <div className="container reviews-container-full">
        {/* Header */}
        <div className="reviews-header">
          <h2 className="reviews-main-title">WHAT OUR CLIENTS SAY</h2>
        </div>

        {/* Sliding Avatars Row */}
        <div className="reviews-avatars-viewport">
          <div 
            className="reviews-avatars-track" 
            style={{ transform: `translateX(${translationOffset}px)` }}
          >
            {reviews.map((item, index) => (
              <div 
                key={index} 
                className={`reviews-avatar-dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => handleAvatarClick(index)}
              >
                <img src={item.avatar} alt={item.name} className="reviews-avatar-img" />
              </div>
            ))}
          </div>
        </div>

        {/* Text Review and Navigation */}
        <div 
          className="reviews-text-slider-wrapper"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <button className="reviews-arrow-btn prev" onClick={handlePrev} aria-label="Previous review">
            &lsaquo;
          </button>

          <div className="reviews-text-viewport">
            <div 
              className="reviews-text-track"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {reviews.map((item, index) => (
                <div key={index} className="reviews-text-slide">
                  <p className="reviews-quote-text">
                    {item.text}
                  </p>
                  <h4 className="reviews-author-name">
                    {item.name}
                  </h4>
                </div>
              ))}
            </div>
          </div>

          <button className="reviews-arrow-btn next" onClick={handleNext} aria-label="Next review">
            <span className="arrow-chevron">&#8250;</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ClientReviews;
