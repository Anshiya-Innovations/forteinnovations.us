import React, { useState } from 'react';
import featureGraphic from '../../assets/feature-graphic.png';
import featureGraphicMobile from '../../assets/feature-graphic-mobile.webp';
import './Appointment.css';

const countryCodes = [
  { code: '+1', name: 'US/CA', flag: '🇺🇸' },
  { code: '+91', name: 'IN', flag: '🇮🇳' },
  { code: '+44', name: 'GB', flag: '🇬🇧' },
  { code: '+61', name: 'AU', flag: '🇦🇺' },
  { code: '+49', name: 'DE', flag: '🇩🇪' },
  { code: '+33', name: 'FR', flag: '🇫🇷' },
  { code: '+65', name: 'SG', flag: '🇸🇬' },
  { code: '+971', name: 'AE', flag: '🇦🇪' },
  { code: '+81', name: 'JP', flag: '🇯🇵' },
  { code: '+86', name: 'CN', flag: '🇨🇳' },
  { code: '+55', name: 'BR', flag: '🇧🇷' },
  { code: '+27', name: 'ZA', flag: '🇿🇦' },
  { code: '+966', name: 'SA', flag: '🇸🇦' },
  { code: '+7', name: 'RU', flag: '🇷🇺' },
  { code: '+82', name: 'KR', flag: '🇰🇷' },
  { code: '+34', name: 'ES', flag: '🇪🇸' },
  { code: '+39', name: 'IT', flag: '🇮🇹' },
  { code: '+62', name: 'ID', flag: '🇮🇩' },
  { code: '+60', name: 'MY', flag: '🇲🇾' },
  { code: '+63', name: 'PH', flag: '🇵🇭' },
  { code: '+90', name: 'TR', flag: '🇹🇷' },
  { code: '+52', name: 'MX', flag: '🇲🇽' },
  { code: '+31', name: 'NL', flag: '🇳🇱' },
  { code: '+41', name: 'CH', flag: '🇨🇭' },
  { code: '+46', name: 'SE', flag: '🇸🇪' },
  { code: '+64', name: 'NZ', flag: '🇳🇿' },
];

const Appointment = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    countryCode: '+1',
    service: 'AI Integration & Automation',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  const services = [
    "AI Integration & Automation",
    "SAP BTP",
    "Cyber Security",
    "Security Compliance & Audit",
    "Cloud Solutions",
    "Business Automations",
    "Employee Training Program",
    "Internship for Students",
    "Mobile App Development"
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'phone') {
      const cleanValue = value.replace(/\D/g, '').slice(0, 13);
      setFormData({
        ...formData,
        phone: cleanValue
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.service) {
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        access_key: "83390b46-d43e-4acf-ac88-dd001a4ba3a6",
        subject: "New Appointment Request - Anshiya Innovations",
        name: formData.name,
        email: formData.email,
        phone: `${formData.countryCode} ${formData.phone}`,
        service: formData.service,
        message: formData.message
      })
    })
    .then(res => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        countryCode: '+1',
        service: 'AI Integration & Automation',
        message: ''
      });
    })
    .catch(err => {
      setIsSubmitting(false);
      setSubmitStatus('error');
    });
  };

  return (
    <section id="appointment" className="appointment-section">
      <div className="container grid-2 appointment-container">
        {/* Left Side: Text and Graphic */}
        <div className="appointment-content-left">
          <h2 className="appointment-title">Make an Appointment</h2>
          <p className="appointment-status-text">(24/7 Available)</p>
          <p className="appointment-description-para">
            Ready to discuss your next big project? Our experts are standing by to provide you with a detailed consultation and roadmap.
          </p>
          <div className="appointment-image-wrapper">
            <picture>
              <source media="(max-width: 768px)" srcSet={featureGraphicMobile} type="image/webp" />
              <img 
                src={featureGraphic} 
                alt="Collaborative IT Meeting" 
                className="appointment-img"
                width="664"
                height="404"
              />
            </picture>
          </div>
        </div>

        {/* Right Side: Appointment Form */}
        <div className="appointment-form-wrapper">
          {submitStatus === 'success' ? (
            <div className="submit-success-card">
              <div className="success-icon">&#10003;</div>
              <h3>Request Submitted!</h3>
              <p>Thank you for reaching out. A technology expert from our team will contact you shortly to confirm your scheduled slot.</p>
              <button onClick={() => setSubmitStatus(null)} className="btn-primary">
                Book Another Slot
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="appointment-form">
              {submitStatus === 'error' && (
                <div className="submit-error-msg">
                  Please fill out all required fields (*).
                </div>
              )}
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Contact No</label>
                  <div className="phone-input-container">
                    <select
                      name="countryCode"
                      value={formData.countryCode}
                      onChange={handleInputChange}
                      className="appointment-country-select"
                      aria-label="Country Code"
                    >
                      {countryCodes.map((item, idx) => (
                        <option key={idx} value={item.code}>
                          {item.flag} {item.code}
                        </option>
                      ))}
                    </select>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="98765 43210"
                      maxLength={13}
                      pattern="[0-9]{7,13}"
                      title="Please enter a valid mobile number (7 to 13 digits)"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="service">Select Service</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                  >
                    {services.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-group full-width">
                <label htmlFor="message">Write Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                className={`appointment-submit-btn ${isSubmitting ? 'loading' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending Request...' : <>Make an Appointment <span className="arrow-btn-span">&rarr;</span></>}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Appointment;
