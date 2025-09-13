import React from 'react';

// 
//     width: '100%',
//     
//     padding: '2rem 1.5rem',
//     boxSizing: 'border-box',
//     textAlign: 'center',
//     position: 'relative'


const LoveStorySection: React.FC = () => {
  return (
    <section className="time-place-section animate__animated animate__fadeInUp " style={{
      maxWidth: '400px',
      width: '100%',
      margin: '2rem auto 0 auto',
      padding: '2rem 1.5rem',
      boxSizing: 'border-box',
      textAlign: 'center',
      position: 'relative'
    }}>
      <div 
        className="love-story animate__animated animate__zoomIn" 
        style={{
        
          marginBottom: '2rem',
          padding: '1.5rem',
          background: 'linear-gradient(135deg, rgba(165, 124, 197, 0.1), rgba(212, 181, 224, 0.1))',
          borderRadius: '1.5rem',
          border: '1px solid rgba(165, 124, 197, 0.2)',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
      {/* Motor Image */}
      <div className="motor-image">
        <img
          src="/asset/motor.png"
          alt="Motor"
          style={{
            width: '100%',
            height: 'auto',
            borderRadius: '0.8rem',
            filter: 'drop-shadow(0 2px 8px rgba(165, 124, 197, 0.2))'
          }}
        />
      </div>

      <div 
        className="love-quote" 
        style={{
          fontSize: '1.1rem',
          color: '#a57cc5',
          lineHeight: 1.6,
          fontStyle: 'italic'
        }}
      >
        "Dimulai dari perjalanan sederhana,<br />
        kini menjadi cerita cinta yang indah.<br />
        Bersama melangkah menuju masa depan yang bahagia."
      </div>
    </div>
    </section>
  );
};

export default LoveStorySection;
