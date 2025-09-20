import React from 'react';
import { motion } from 'framer-motion';

interface TimePlaceSectionProps {
  fadeUp: any;
  handleMouseEnter: (buttonId: string) => void;
  handleMouseLeave: (buttonId: string) => void;
  getButtonStyle: (buttonId: string, baseStyle: React.CSSProperties) => React.CSSProperties;
}

const TimePlaceSection: React.FC<TimePlaceSectionProps> = ({ fadeUp, handleMouseEnter, handleMouseLeave, getButtonStyle }) => (
  <section className="time-place-section animate__animated animate__fadeInUp " style={{
    maxWidth: '400px',
    width: '100%',
    margin: '2rem auto 0 auto',
    padding: '2rem 1.5rem',
    boxSizing: 'border-box',
    textAlign: 'center',
    position: 'relative'
  }}>
    {/* Save The Date Title */}
    <div className="section-title animate__animated animate__bounceIn " style={{
      marginBottom: '2rem',
      position: 'relative'
    }}>
      <h2 style={{
        fontFamily: "'Dancing Script', cursive",
        fontSize: '3rem',
        fontWeight: 'bold',
        margin: 0,
        color: '#a57cc5',
        textShadow: '0 2px 4px rgba(165, 124, 197, 0.3)'
      }}>
        Waktu Dan Tempat
      </h2>
      <div style={{
        width: '80px',
        height: '2px',
        background: 'linear-gradient(90deg, #a57cc5, #d4b5e0)',
        margin: '0.5rem auto'
      }}></div>
    </div>

    {/* Google Calendar Info */}
    {/* <div className="calendar-info animate__animated animate__fadeIn " style={{
      marginBottom: '2rem',
      padding: '0.8rem 1.2rem',
      border: '1px dashed #a57cc5',
      borderRadius: '1rem',
      background: 'rgba(165, 124, 197, 0.05)'
    }}>
      <p style={{
        margin: 0,
        fontSize: '1rem',
        color: '#a57cc5',
        fontStyle: 'italic'
      }}>
        📅 Ingatkan saya melalui google calendar
      </p>
    </div> */}

    {/* Event Details */}
    <div className="event-details animate__animated animate__zoomIn " style={{
      marginBottom: '2rem',
      padding: '1.5rem',
      background: 'linear-gradient(135deg, rgba(165, 124, 197, 0.1), rgba(212, 181, 224, 0.1))',
      borderRadius: '1.5rem',
      border: '1px solid rgba(165, 124, 197, 0.2)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Decorative corner */}
      <div style={{
        position: 'absolute',
        top: '-10px',
        right: '-10px',
        width: '40px',
        height: '40px',
        background: 'linear-gradient(135deg, #a57cc5, #d4b5e0)',
        borderRadius: '50%',
        opacity: 0.7
      }}></div>
      <div style={{
        position: 'absolute',
        bottom: '-10px',
        left: '-10px',
        width: '30px',
        height: '30px',
        background: 'linear-gradient(135deg, #d4b5e0, #a57cc5)',
        borderRadius: '50%',
        opacity: 0.5
      }}></div>

      <h2 style={{
        fontFamily: "'Dancing Script', cursive",
        fontSize: '2.5rem',
        fontWeight: 'bold',
        margin: '0 0 1rem 0',
        color: '#a57cc5'
      }}>
        Akad Nikah
      </h2>

      <div style={{
        fontSize: '1.3rem',
        fontWeight: 600,
        marginBottom: '1rem',
        color: '#7c5e99',
        lineHeight: 1.6
      }}>
        📅 Sabtu, 4 Oktober 2025<br />
        🕐 Pukul 09:00 WIB
      </div>

      <br />

      <h2 style={{
        fontFamily: "'Dancing Script', cursive",
        fontSize: '2.5rem',
        fontWeight: 'bold',
        margin: '0 0 1rem 0',
        color: '#a57cc5'
      }}>
        Resepsi
      </h2>

      <div style={{
        fontSize: '1.3rem',
        fontWeight: 600,
        marginBottom: '1rem',
        color: '#7c5e99',
        lineHeight: 1.6
      }}>
        📅 Sabtu, 4 Oktober 2025<br />
        🕐 Pukul 09:00 - 14:00 WIB
      </div>

      <div style={{
        fontSize: '1.1rem',
        color: '#a57cc5',
        marginTop: '1rem',
        fontWeight: 500
      }}>
        📍 Dusun. Binawarga RT 13 RW 04, Desa Kalijati Timur, Kalijati, Subang
      </div>
    </div>

    {/* Google Maps Embed */}
    <div style={{
      marginBottom: '2rem',
      borderRadius: '1.5rem',
      overflow: 'hidden',
      border: '1px solid rgba(165, 124, 197, 0.2)',
      position: 'relative'
    }} className="animate__animated animate__fadeInUp ">
      <div style={{
        padding: '1rem',
        background: 'rgba(165, 124, 197, 0.05)',
        textAlign: 'center',
        borderBottom: '1px solid rgba(165, 124, 197, 0.1)'
      }}>
        <h4 style={{
          margin: 0,
          fontFamily: "'Dancing Script', cursive",
          fontSize: '1.8rem',
          color: '#a57cc5'
        }}>
          📍 Lokasi Acara
        </h4>
      </div>
      <div style={{
        position: 'relative',
        width: '100%',
        height: '250px',
        background: '#f8f8f8'
      }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d316.7!2d107.6795851!3d-6.5267874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMzEnMzQuNSJTIDEwN8KwNDAnNDYuNCJF!5e0!3m2!1sen!2sid!4v1234567890123!5m2!1sen!2sid"
          style={{
            border: 0,
            width: '100%',
            height: '100%',
            display: 'block'
          }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <div style={{
        padding: '0.8rem',
        background: 'rgba(165, 124, 197, 0.05)',
        textAlign: 'center'
      }}>
        <a
          href="https://www.google.com/maps/@-6.5267874,107.6795851,20.31z/data=!4m3!11m2!2sDuXj1oBCg2e2r9gQJ16oRpfpeFQoRg!3e3?entry=ttu&g_ep=EgoyMDI1MDkwMy4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => handleMouseEnter('mapsButton')}
          onMouseLeave={() => handleMouseLeave('mapsButton')}
          style={getButtonStyle('mapsButton', {
            display: 'inline-block',
            padding: '0.6rem 1.2rem',
            background: 'linear-gradient(135deg, #a57cc5, #d4b5e0)',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '2rem',
            fontSize: '0.9rem',
            fontWeight: 500
          })}
        >
          🗺️ Buka di Google Maps
        </a>
      </div>
    </div>
  </section>
);

export default TimePlaceSection;
