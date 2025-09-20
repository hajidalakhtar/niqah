import React from 'react';
import { motion } from 'framer-motion';

interface MainInvitationSectionProps {
  fadeUp: any;
}

const MainInvitationSection: React.FC<MainInvitationSectionProps> = ({ fadeUp }) => {
  return (
    <>
      {/* Line Separator Elegant with framer-motion, improved animation */}
      <div
        className="line-separator"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '1rem auto',
          maxWidth: '400px',
          width: '100%',
          padding: '0 1.5rem',
          boxSizing: 'border-box'
        }}
      >
        {/* Left ornament */}
        <div className="line-left" style={{
          flex: 1,
          height: '1px',
          background: 'linear-gradient(90deg, transparent, #a57cc5, transparent)'
        }}></div>

        {/* Center heart decoration */}
        <div
          className="ring-icon"
          style={{
            margin: '0 1.5rem',
            color: '#a57cc5',
            fontSize: '1.5rem',
            position: 'relative'
          }}
        >
          <span style={{
            filter: 'drop-shadow(0 2px 4px rgba(165, 124, 197, 0.3))',
            animation: 'heartbeat 2s ease-in-out infinite'
          }}>💍</span>
        </div>

        {/* Right ornament */}
        <div className="line-right" style={{
          flex: 1,
          height: '1px',
          background: 'linear-gradient(90deg, transparent, #a57cc5, transparent)'
        }}></div>
      </div>

      {/* Main Invitation Section */}
      <section className="main-invitation animate__animated animate__fadeIn " style={{
        color: '#a57cc5',
        borderRadius: '2rem',
        maxWidth: '400px',
        width: '100%',
        margin: '2rem auto 0 auto',
        padding: '2rem 1.5rem',
        boxSizing: 'border-box',
        textAlign: 'center',
        position: 'relative'
      }}>
        <div className="greeting-text animate__animated animate__fadeInDown " style={{
          fontFamily: "'Dancing Script', cursive",
          fontSize: '2rem',
          marginBottom: '1.2rem',
          fontWeight: 'bold',
          letterSpacing: '1px'
        }}>
          Assalamualaikum Wr Wb
        </div>

        <blockquote className=" " style={{
          marginLeft: 0,
          marginRight: 0,
          fontSize: '1.15rem',
          fontStyle: 'italic',
          borderLeft: '4px solid #a57cc5',
          paddingLeft: '1rem',
          background: 'rgba(165, 124, 197, 0.05)',
          textAlign: 'left',
          paddingBottom: "10px",
          paddingTop: "10px"
        }}>
          <span style={{ display: 'block', marginBottom: '0.5rem' }}>
            Di antara tanda-tanda (kebesaran)-Nya ialah bahwa Dia menciptakan pasangan-pasangan untukmu dari (jenis) dirimu sendiri agar kamu merasa tenteram kepadanya. Dia menjadikan di antaramu rasa cinta dan kasih sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.
          </span>
          <span style={{ fontWeight: 'bold', color: '#7c5e99', fontSize: '0.95rem' }}>
            QS Ar-Rum : 21
          </span>
        </blockquote>

        
        <div className="invitation-text animate__animated animate__fadeInUp " style={{
          fontSize: '1.15rem',
          marginBottom: '20px'
        }}>
          Dengan segala kerendahan hati,<br />
          kami mengundang Bapak/Ibu/Saudara/i untuk<br />
          menghadiri pernikahan kami,
        </div>

        <div className="pasangan-row" style={{
          justifyContent: 'center',
          alignItems: 'flex-start',
          marginBottom: '1.5rem',
          marginTop: '2rem'
        }}>
          <div className="bride-photo animate__animated animate__slideInLeft " style={{
            flex: 1,
            overflow: 'hidden',
            transition: 'transform 0.3s'
          }}>
            <img
              src="/asset/fauji.png"
              alt="Pengantin Wanita"
              style={{
                width: '100%',
                display: 'block',
                objectFit: 'cover',
                objectPosition: 'center',
                filter: 'grayscale(0.2)',
                transition: 'filter 0.3s'
              }}
            />
          </div>
          <div className="bride-name animate__animated animate__fadeInUp " style={{
            flex: 1,
            textAlign: 'center'
          }}>
            <p style={{
              fontFamily: "'Dancing Script', cursive",
              fontSize: '2rem',
              color: '#a57cc5',
              marginBottom: '0.2rem',
              fontWeight: 'bold'
            }}>
              Siti Faujiyah Nur Syahid
            </p>
            <p style={{
              fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
              color: '#7c5e99',
              marginTop: 0
            }}>
              Putri Pertama dari Bapak Iman Akhmad Syahid (Alm) & Ibu Ani Indrawati
            </p>
          </div>
          <div className="and-symbol" style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <span style={{
              fontSize: '3rem',
              color: '#a57cc5',
              fontFamily: "'Dancing Script', cursive",
              fontWeight: 'bold'
            }}>
              &
            </span>
          </div>
          <div className="groom-photo animate__animated animate__slideInRight " style={{
            flex: 1,
            marginTop: "0px",
            overflow: 'hidden',
            transition: 'transform 0.3s',
          }}>
            <img
              src="/asset/hajid.png"
              alt="Pengantin Pria"
              style={{
                width: '100%',
                display: 'block',
                objectFit: 'cover',
                objectPosition: 'center',
                filter: 'grayscale(0.2)',
                transition: 'filter 0.3s'
              }}
            />
          </div>
          <div className="groom-name animate__animated animate__fadeInUp " style={{
            flex: 1,
            textAlign: 'center'
          }}>
            <p style={{
              fontFamily: "'Dancing Script', cursive",
              fontSize: '2rem',
              color: '#a57cc5',
              marginBottom: '0.2rem',
              fontWeight: 'bold'
            }}>
              Muhammad Hajid Al Akhtar
            </p>
            <p style={{
              fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
              color: '#7c5e99',
              marginTop: 0
            }}>
              Putra kedua Bapak Farianda (Alm) & Ibu Nia Kania Salam
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default MainInvitationSection;
