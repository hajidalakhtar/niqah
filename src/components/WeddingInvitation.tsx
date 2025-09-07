import React, { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface WeddingInvitationProps {
  client?: 'load' | 'visible' | 'idle';
}

const WeddingInvitation: React.FC<WeddingInvitationProps> = ({ client = 'load' }) => {
  const [isOpened, setIsOpened] = useState(false);
  const [showMainContent, setShowMainContent] = useState(false);
  const { initializeAllAnimations } = useScrollReveal();

  // Handle opening invitation
  const handleOpenInvitation = () => {
    setIsOpened(true);

    setTimeout(() => {
      setShowMainContent(true);
      initializeAllAnimations();
    }, 800);
  };

  // Copy to clipboard function with React state management
  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      alert(`Nomor berhasil disalin: ${text}`);
    } catch (err) {
      console.error('Gagal menyalin: ', err);
    }
  };

  // Button hover effects using React state
  const [buttonStates, setButtonStates] = useState<{ [key: string]: boolean }>({});

  const handleMouseEnter = (buttonId: string) => {
    setButtonStates(prev => ({ ...prev, [buttonId]: true }));
  };

  const handleMouseLeave = (buttonId: string) => {
    setButtonStates(prev => ({ ...prev, [buttonId]: false }));
  };

  const getButtonStyle = (buttonId: string, baseStyle: React.CSSProperties) => {
    const isHovered = buttonStates[buttonId];
    return {
      ...baseStyle,
      transform: isHovered ? 'translateY(-2px)' : 'translateY(0)',
      boxShadow: isHovered
        ? '0 4px 12px rgba(165, 124, 197, 0.4)'
        : '0 2px 8px rgba(165, 124, 197, 0.3)',
      transition: 'transform 0.3s, box-shadow 0.3s'
    };
  };

  return (
    <>
      {/* Opening Page */}
      <div
        className={`opening-container ${isOpened ? 'opening-hidden' : ''}`}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: '#fdf6ec',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          transition: 'opacity 0.8s ease-in-out, transform 0.8s ease-in-out',
          opacity: isOpened ? 0 : 1,
          transform: isOpened ? 'translateY(-100vh)' : 'translateY(0)',
          pointerEvents: isOpened ? 'none' : 'auto'
        }}
      >
        <div className="opening-card animate__animated animate__fadeInUp animate__delay-1s" style={{
          background: '#fdf6ec',
          borderRadius: '2.5rem',
          border: '4px solid #fdf6ec',
          maxWidth: '400px',
          width: '100%',
          padding: '1.5rem',
          position: 'relative',
          boxSizing: 'border-box'
        }}>
          <div className="opening-card-img animate__animated animate__zoomIn animate__delay-1s" style={{
            borderRadius: '1.5rem',
            overflow: 'hidden',
            marginBottom: '1.5rem',
            width: '100%',
            aspectRatio: '3/4',
            height: 'auto',
            display: 'block',
            position: 'relative'
          }}>
            <img
              src="/asset/foto_pasangan.jpeg"
              alt="Pasangan"
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
                display: 'block',
                borderRadius: 0
              }}
            />
          </div>
          <div style={{ textAlign: 'center' }}>
            <span style={{
              color: '#a57cc5',
              fontFamily: 'sans-serif',
              fontSize: '1.1rem',
              fontWeight: 400
            }} className="animate__animated animate__fadeInDown animate__delay-2s">
              Kepada Yth.
            </span>
            <div style={{
              color: '#a57cc5',
              fontSize: '2.2rem',
              fontWeight: 600,
              marginBottom: '1.2rem'
            }} className="animate__animated animate__fadeInUp animate__delay-2s">
              Tamu Undangan
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <button
                onClick={handleOpenInvitation}
                onMouseEnter={() => handleMouseEnter('openButton')}
                onMouseLeave={() => handleMouseLeave('openButton')}
                className="animate__animated animate__pulse animate__infinite animate__delay-3s"
                style={getButtonStyle('openButton', {
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  background: 'none',
                  border: '3px solid #a57cc5',
                  borderRadius: '2rem',
                  padding: '0.7rem 2.2rem',
                  fontSize: '1.4rem',
                  color: '#a57cc5',
                  cursor: 'pointer',
                  fontFamily: 'sans-serif',
                  fontWeight: 500
                })}
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" style={{ verticalAlign: 'middle' }}>
                  <path d="M4 19V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v14" stroke="#a57cc5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M4 19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2" stroke="#a57cc5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M9 9h6" stroke="#a57cc5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M9 13h6" stroke="#a57cc5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Buka Undangan
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div
        className={`main-content ${showMainContent ? 'show' : ''}`}
        style={{
          width: '100%',
          opacity: showMainContent ? 1 : 0,
          transform: showMainContent ? 'translateY(0)' : 'translateY(50px)',
          transition: 'opacity 1s ease-in-out, transform 1s ease-in-out'
        }}
      >
        {/* Animated Background Elements */}
        <div className="shimmer-bg" style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(45deg, transparent 30%, rgba(165, 124, 197, 0.1) 50%, transparent 70%)',
          backgroundSize: '200% 200%',
          animation: 'shimmer 8s ease-in-out infinite',
          pointerEvents: 'none',
          zIndex: -2
        }}></div>

        {/* Floating Particles */}
        <div className="particle particle-1" style={{
          position: 'fixed',
          borderRadius: '50%',
          pointerEvents: 'none',
          opacity: 0.6,
          zIndex: -1,
          width: '8px',
          height: '8px',
          background: '#a57cc5',
          animation: 'float1 6s ease-in-out infinite',
          top: '20%',
          left: '10%'
        }}></div>
        <div className="particle particle-2" style={{
          position: 'fixed',
          borderRadius: '50%',
          pointerEvents: 'none',
          opacity: 0.6,
          zIndex: -1,
          width: '6px',
          height: '6px',
          background: '#d4b5e0',
          animation: 'float2 8s ease-in-out infinite',
          top: '60%',
          right: '15%'
        }}></div>
        <div className="particle particle-3" style={{
          position: 'fixed',
          borderRadius: '50%',
          pointerEvents: 'none',
          opacity: 0.6,
          zIndex: -1,
          width: '10px',
          height: '10px',
          background: '#a57cc5',
          animation: 'float3 7s ease-in-out infinite',
          bottom: '30%',
          left: '20%'
        }}></div>
        <div className="particle particle-4" style={{
          position: 'fixed',
          borderRadius: '50%',
          pointerEvents: 'none',
          opacity: 0.6,
          zIndex: -1,
          width: '4px',
          height: '4px',
          background: '#d4b5e0',
          animation: 'float1 5s ease-in-out infinite',
          top: '40%',
          right: '25%'
        }}></div>
        <div className="particle particle-5" style={{
          position: 'fixed',
          borderRadius: '50%',
          pointerEvents: 'none',
          opacity: 0.6,
          zIndex: -1,
          width: '12px',
          height: '12px',
          background: '#a57cc5',
          animation: 'float2 9s ease-in-out infinite',
          bottom: '60%',
          right: '30%'
        }}></div>
        <div className="particle particle-6" style={{
          position: 'fixed',
          borderRadius: '50%',
          pointerEvents: 'none',
          opacity: 0.6,
          zIndex: -1,
          width: '5px',
          height: '5px',
          background: '#d4b5e0',
          animation: 'float3 4s ease-in-out infinite',
          top: '80%',
          left: '30%'
        }}></div>

        {/* Floating Hearts */}
        <div className="heart-particle heart-1" style={{
          position: 'fixed',
          color: '#a57cc5',
          fontSize: '1.5rem',
          opacity: 0.3,
          pointerEvents: 'none',
          zIndex: -1,
          animation: 'heartFloat 10s linear infinite',
          left: '5%',
          animationDelay: '0s'
        }}>💕</div>
        <div className="heart-particle heart-2" style={{
          position: 'fixed',
          color: '#a57cc5',
          fontSize: '1.5rem',
          opacity: 0.3,
          pointerEvents: 'none',
          zIndex: -1,
          animation: 'heartFloat 10s linear infinite',
          left: '15%',
          animationDelay: '2s'
        }}>💝</div>
        <div className="heart-particle heart-3" style={{
          position: 'fixed',
          color: '#a57cc5',
          fontSize: '1.5rem',
          opacity: 0.3,
          pointerEvents: 'none',
          zIndex: -1,
          animation: 'heartFloat 10s linear infinite',
          right: '5%',
          animationDelay: '4s'
        }}>💖</div>
        <div className="heart-particle heart-4" style={{
          position: 'fixed',
          color: '#a57cc5',
          fontSize: '1.5rem',
          opacity: 0.3,
          pointerEvents: 'none',
          zIndex: -1,
          animation: 'heartFloat 10s linear infinite',
          right: '15%',
          animationDelay: '6s'
        }}>💗</div>

        {/* Main Card */}
        <div className="card animate__animated animate__fadeInUp animate__delay-1s" style={{
          maxWidth: '400px',
          width: '100%',
          padding: '1.5rem',
          position: 'relative',
          boxSizing: 'border-box',
          overflow: 'hidden',
          margin: '0 auto'
        }}>
          <div className="card-img" style={{
            borderRadius: '1.5rem',
            overflow: 'hidden',
            marginBottom: '1.5rem',
            width: '100%',
            aspectRatio: '3/4',
            height: 'auto',
            display: 'block',
            position: 'relative'
          }}>
            <img
              src="/asset/foto_pasangan.jpeg"
              alt="Pasangan"
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
                display: 'block',
                borderRadius: 0
              }}
            />
          </div>
          {/* Desain undangan tambahan */}
          <div style={{ color: '#a57cc5', textAlign: 'center' }}>
            <div style={{
              fontFamily: "'Dancing Script', cursive",
              fontSize: '1.5rem'
            }} className="animate__animated animate__fadeInDown animate__delay-2s">
              The Wedding Of
            </div>
            <div style={{
              marginTop: '1rem',
              fontSize: '2rem',
              fontWeight: 'bold'
            }} className="animate__animated animate__bounceIn animate__delay-2s">
              Hajid & Faujiyah
            </div>
            <div style={{ color: '#a57cc5' }} className="animate__animated animate__fadeInUp animate__delay-3s">
              Rabu, <span style={{ fontStyle: 'italic' }}>31.12.2025</span>
            </div>
          </div>
        </div>

        {/* Line Separator Elegant */}
        <div className="line-separator animate__animated animate__zoomIn animate__delay-3s" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '3rem auto',
          maxWidth: '400px',
          width: '100%',
          padding: '0 1.5rem',
          boxSizing: 'border-box'
        }}>
          {/* Left ornament */}
          <div className="line-left" style={{
            flex: 1,
            height: '1px',
            background: 'linear-gradient(90deg, transparent, #a57cc5, transparent)'
          }}></div>

          {/* Center heart decoration */}
          <div className="ring-icon" style={{
            margin: '0 1.5rem',
            color: '#a57cc5',
            fontSize: '1.5rem',
            position: 'relative'
          }}>
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
        <section className="main-invitation animate__animated animate__fadeIn animate__delay-4s" style={{
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
          <div className="greeting-text animate__animated animate__fadeInDown animate__delay-4s" style={{
            fontFamily: "'Dancing Script', cursive",
            fontSize: '2rem',
            marginBottom: '1.2rem',
            fontWeight: 'bold',
            letterSpacing: '1px'
          }}>
            Assalamualaikum Wr Wb
          </div>
          <div className="invitation-text animate__animated animate__fadeInUp animate__delay-5s" style={{
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
            <div className="bride-photo animate__animated animate__slideInLeft animate__delay-6s" style={{
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
            <div className="bride-name animate__animated animate__fadeInUp animate__delay-6s" style={{
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
                fontSize: '1.3rem',
                color: '#7c5e99',
                marginTop: 0
              }}>
                Keluarga bapak Iman Ahmad Syahid
              </p>
            </div>
            <div className="and-symbol animate__animated animate__heartBeat animate__infinite animate__delay-7s" style={{
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
            <div className="groom-photo animate__animated animate__slideInRight animate__delay-6s" style={{
              flex: 1,
              overflow: 'hidden',
              transition: 'transform 0.3s',
              marginTop: '20px'
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
            <div className="groom-name animate__animated animate__fadeInUp animate__delay-6s" style={{
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
                fontSize: '1.3rem',
                color: '#7c5e99',
                marginTop: 0
              }}>
                Keluarga bapak Farianda
              </p>
            </div>
          </div>
        </section>

        {/* Time and Place Section */}
        <section className="time-place-section animate__animated animate__fadeInUp animate__delay-7s" style={{
          maxWidth: '400px',
          width: '100%',
          margin: '2rem auto 0 auto',
          padding: '2rem 1.5rem',
          boxSizing: 'border-box',
          textAlign: 'center',
          position: 'relative'
        }}>
          {/* Save The Date Title */}
          <div className="section-title animate__animated animate__bounceIn animate__delay-8s" style={{
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
          <div className="calendar-info animate__animated animate__fadeIn animate__delay-9s" style={{
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
          </div>

          {/* Event Details */}
          <div className="event-details animate__animated animate__zoomIn animate__delay-9s" style={{
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
          }} className="animate__animated animate__fadeInUp animate__delay-10s">
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

        {/* Gift Section */}
        <section className="gift-section animate__animated animate__fadeIn animate__delay-11s" style={{
          maxWidth: '400px',
          width: '100%',
          margin: '2rem auto 0 auto',
          padding: '2rem 1.5rem',
          boxSizing: 'border-box',
          textAlign: 'center',
          position: 'relative'
        }}>
          {/* Gift Title */}
          <div className="gift-title animate__animated animate__bounceIn animate__delay-11s" style={{
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
              💝 Hadiah
            </h2>
            <div style={{
              width: '80px',
              height: '2px',
              background: 'linear-gradient(90deg, #a57cc5, #d4b5e0)',
              margin: '0.5rem auto'
            }}></div>
          </div>

          {/* Gift Message */}
          <div className="gift-message" style={{
            marginBottom: '2rem',
            padding: '1.2rem',
            border: '1px dashed #a57cc5',
            borderRadius: '1rem',
            background: 'rgba(165, 124, 197, 0.05)'
          }}>
            <p style={{
              margin: 0,
              fontSize: '1rem',
              color: '#a57cc5',
              fontStyle: 'italic',
              lineHeight: 1.5
            }}>
              Doa restu Anda merupakan karunia yang sangat berarti bagi kami.<br />
              Dan jika memberi adalah ungkapan tanda kasih Anda, kami dengan senang hati menerimanya.
            </p>
          </div>

          {/* Bank Account */}
          <div className="bank-account animate__animated animate__slideInLeft animate__delay-12s" style={{
            marginBottom: '1.5rem',
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

            <h3 style={{
              fontFamily: "'Dancing Script', cursive",
              fontSize: '2rem',
              fontWeight: 'bold',
              margin: '0 0 1rem 0',
              color: '#a57cc5'
            }}>
              🏦 Transfer Bank
            </h3>

            <div style={{
              fontSize: '1.1rem',
              fontWeight: 600,
              marginBottom: '0.5rem',
              color: '#7c5e99'
            }}>
              Bank Mandiri
            </div>
            <div style={{
              fontSize: '1.3rem',
              fontWeight: 'bold',
              marginBottom: '0.5rem',
              color: '#a57cc5',
              background: 'rgba(165, 124, 197, 0.1)',
              padding: '0.5rem 1rem',
              borderRadius: '0.5rem',
              display: 'inline-block'
            }}>
              1730007638019
            </div>
            <div style={{
              fontSize: '1rem',
              color: '#7c5e99',
              marginBottom: '1rem'
            }}>
              a.n. Siti Faujiah Nur Syahid
            </div>

            <button
              onClick={() => copyToClipboard('1730007638019')}
              onMouseEnter={() => handleMouseEnter('bankButton')}
              onMouseLeave={() => handleMouseLeave('bankButton')}
              style={getButtonStyle('bankButton', {
                display: 'inline-block',
                padding: '0.5rem 1rem',
                background: 'linear-gradient(135deg, #a57cc5, #d4b5e0)',
                color: 'white',
                border: 'none',
                borderRadius: '1rem',
                fontSize: '0.9rem',
                fontWeight: 500,
                cursor: 'pointer'
              })}
            >
              📋 Salin Nomor Rekening
            </button>
          </div>

          {/* E-Wallet Account */}
          <div className="ewallet-account animate__animated animate__slideInRight animate__delay-12s" style={{
            marginBottom: '1.5rem',
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

            <h3 style={{
              fontFamily: "'Dancing Script', cursive",
              fontSize: '2rem',
              fontWeight: 'bold',
              margin: '0 0 1rem 0',
              color: '#a57cc5'
            }}>
              <img
                width="30"
                height="30"
                src="https://img.icons8.com/external-xnimrodx-lineal-color-xnimrodx/64/external-ewallet-shopping-mall-xnimrodx-lineal-color-xnimrodx.png"
                alt="E-wallet icon"
              /> E-Wallet
            </h3>

            <div style={{
              fontSize: '1.1rem',
              fontWeight: 600,
              marginBottom: '0.5rem',
              color: '#7c5e99'
            }}>
              Gopay, Dana, OVO
            </div>
            <div style={{
              fontSize: '1.3rem',
              fontWeight: 'bold',
              marginBottom: '0.5rem',
              color: '#a57cc5',
              background: 'rgba(165, 124, 197, 0.1)',
              padding: '0.5rem 1rem',
              borderRadius: '0.5rem',
              display: 'inline-block'
            }}>
              085155433613
            </div>
            <div style={{
              fontSize: '1rem',
              color: '#7c5e99',
              marginBottom: '1rem'
            }}>
              a.n. Muhammad Hajid Al Akhtar
            </div>

            <button
              onClick={() => copyToClipboard('085155433613')}
              onMouseEnter={() => handleMouseEnter('ewalletButton')}
              onMouseLeave={() => handleMouseLeave('ewalletButton')}
              style={getButtonStyle('ewalletButton', {
                display: 'inline-block',
                padding: '0.5rem 1rem',
                background: 'linear-gradient(135deg, #a57cc5, #d4b5e0)',
                color: 'white',
                border: 'none',
                borderRadius: '1rem',
                fontSize: '0.9rem',
                fontWeight: 500,
                cursor: 'pointer'
              })}
            >
              📋 Salin Nomor Rekening
            </button>
          </div>

          {/* Love Journey Section */}
          <section className="love-journey-section animate__animated animate__fadeInUp animate__delay-13s" style={{
            width: '100%',
            boxSizing: 'border-box',
            textAlign: 'center',
            position: 'relative',
            maxWidth: '400px',
            padding: '2rem 1.5rem'
          }}>
            <div className="love-title animate__animated animate__bounceIn animate__delay-13s" style={{
              marginBottom: '2rem',
              marginTop: '2rem',
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
                Perjalanan Cinta
              </h2>
              <div style={{
                width: '80px',
                height: '2px',
                background: 'linear-gradient(90deg, #a57cc5, #d4b5e0)',
                margin: '0.5rem auto'
              }}></div>
            </div>

            <div className="love-story animate__animated animate__zoomIn animate__delay-14s" style={{
              marginBottom: '2rem',
              padding: '1.5rem',
              background: 'linear-gradient(135deg, rgba(165, 124, 197, 0.1), rgba(212, 181, 224, 0.1))',
              borderRadius: '1.5rem',
              border: '1px solid rgba(165, 124, 197, 0.2)',
              position: 'relative',
              overflow: 'hidden'
            }}>
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

              <div className="love-quote" style={{
                fontSize: '1.1rem',
                color: '#a57cc5',
                lineHeight: 1.6,
                fontStyle: 'italic'
              }}>
                "Dimulai dari perjalanan sederhana,<br />
                kini menjadi cerita cinta yang indah.<br />
                Bersama melangkah menuju masa depan yang bahagia."
              </div>
            </div>
          </section>
        </section>

        {/* Footer */}
        <footer className="footer-section animate__animated animate__fadeInUp animate__delay-15s" style={{
          width: '100%',
          marginTop: '3rem',
          background: 'linear-gradient(135deg, rgba(165, 124, 197, 0.1), rgba(212, 181, 224, 0.1))',
          borderTop: '1px solid rgba(165, 124, 197, 0.2)',
          padding: '2rem 1rem',
          textAlign: 'center',
          boxSizing: 'border-box'
        }}>
          <div style={{ maxWidth: '400px', margin: '0 auto' }}>
            {/* Ornamental hearts */}
            <div className="footer-hearts" style={{ marginBottom: '1rem' }}>
              <span style={{
                color: '#a57cc5',
                fontSize: '1.5rem'
              }}>♥ ♥ ♥</span>
            </div>

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
              04 Agustus 2025
            </div>

            {/* Final ornament */}
            <div className="footer-ornament" style={{ marginTop: '1rem' }}>
              <span style={{
                color: '#a57cc5',
                fontSize: '1rem'
              }}>✿ ◈ ✿</span>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default WeddingInvitation;
