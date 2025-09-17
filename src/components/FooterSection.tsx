import React from 'react';

const FooterSection: React.FC = () => (
  <footer className="footer-section animate__animated animate__fadeInUp " style={{
    width: '100%',
    marginTop: '3rem',
    background: 'linear-gradient(135deg, rgba(165, 124, 197, 0.1), rgba(212, 181, 224, 0.1))',
    borderTop: '1px solid rgba(165, 124, 197, 0.2)',
    padding: '2rem 1rem',
    textAlign: 'center',
    boxSizing: 'border-box'
  }}>
    <div style={{ maxWidth: '400px', margin: '0 auto' }}>
    
      {/* Thank you message */}
      <div className="footer-message" style={{
        color: '#a57cc5',
        fontSize: '1.1rem',
        lineHeight: 1.6,
        marginBottom: '1rem',
        fontStyle: 'italic'
      }}>
        "Terima kasih atas doa dan restu yang telah diberikan.<br />
        Semoga Allah SWT meridhoi langkah kami."
      </div>

      {/* Decorative line */}
      <div className="footer-line" style={{
        width: '60px',
        height: '1px',
        background: 'linear-gradient(90deg, transparent, #a57cc5, transparent)',
        margin: '1rem auto'
      }}></div>

      {/* Names and date */}
      <div className="footer-names" style={{
        color: '#a57cc5',
        fontFamily: "'Dancing Script', cursive",
        fontSize: '1.2rem',
        fontWeight: 600,
        marginBottom: '0.5rem'
      }}>
        Hajid & Faujiyah
      </div>

      <div className="footer-date" style={{
        color: '#a57cc5',
        fontSize: '0.9rem',
        opacity: 0.8
      }}>
        04 Oktober 2025
      </div>

      {/* Final ornament */}
     
    </div>
  </footer>
);

export default FooterSection;
