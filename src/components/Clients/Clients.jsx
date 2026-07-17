import React from 'react';
import logoAnshiya from '../../assets/logo.png';
import logoAnshiyaMobile from '../../assets/logo-mobile.webp';
import './Clients.css';

const Clients = () => {
  const clientsList = [
    { 
      name: "Anshiya Innovations", 
      isImage: true, 
      icon: logoAnshiya,
      iconMobile: logoAnshiyaMobile
    },
    { 
      name: "Novus IT Solutions", 
      isImage: false, 
      letters: "NI" 
    },
    { 
      name: "RVIT Solutions", 
      isImage: false, 
      letters: "RV" 
    },
    { 
      name: "NASR IT Technologies", 
      isImage: false, 
      letters: "NT" 
    },
    { 
      name: "Fiscalsync Private Limited", 
      isImage: false, 
      letters: "FS" 
    }
  ];

  return (
    <section className="clients-section">
      <div className="clients-track-wrapper">
        <div className="clients-track">
          {/* First loop of client items */}
          <div className="clients-list-track">
            {clientsList.map((client, index) => (
              <div key={`first-${index}`} className="client-item">
                <span className="client-logo-wrapper-classic">
                  {client.isImage ? (
                    <div className='icon-container'>
                      <picture>
                        <source media="(max-width: 768px)" srcSet={client.iconMobile} type="image/webp" />
                        <img src={client.icon} alt={`${client.name} Logo`} className="client-logo-img-classic" width="901" height="278" />
                      </picture>
                    </div>
                  ) : (
                    <span className="client-logo-text-classic">{client.letters}</span>
                  )}
                </span>
                <span className="client-name">{client.name}</span>
              </div>
            ))}
          </div>
          {/* Second loop of client items (for infinite loop backdrop) */}
          <div className="clients-list-track" aria-hidden="true">
            {clientsList.map((client, index) => (
              <div key={`second-${index}`} className="client-item">
                <span className="client-logo-wrapper-classic">
                  {client.isImage ? (
                    <picture>
                      <source media="(max-width: 768px)" srcSet={client.iconMobile} type="image/webp" />
                      <img src={client.icon} alt={`${client.name} Logo`} className="client-logo-img-classic" width="901" height="278" />
                    </picture>
                  ) : (
                    <span className="client-logo-text-classic">{client.letters}</span>
                  )}
                </span>
                <span className="client-name">{client.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
