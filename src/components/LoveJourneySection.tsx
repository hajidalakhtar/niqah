import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const LoveJourneySection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const pinWrapRef = useRef<HTMLDivElement>(null);

  const journeySteps = [
    {
      img: '/asset/2022.jpeg',
      title: 'Pertama Bertemu',
      desc: 'Kota Bandung menjadi saksi bisu pertemuan pertama kami yang begitu berkesan. Setelah hampir 6 bulan saling bertukar cerita dan tawa melalui layar, akhirnya takdir mempertemukan kami dalam kehangatan tatap mata pertama. Detik itu, kami tahu bahwa ini adalah awal dari sebuah cerita cinta yang indah.',
      icon: '💌',
      year: '2022',
    },
    {
      img: '/asset/2023.jpeg',
      title: 'Momen Bersama',
      desc: 'Langkah pertama Hajid menuju rumah kami penuh dengan harapan dan kebahagiaan. Dengan hati yang berdebar, ia datang untuk pertama kalinya mengenal keluarga besar yang kelak akan menjadi bagian dari hidupnya. Senyuman hangat dan sambutan penuh cinta dari keluarga menjadi bukti bahwa cinta kami mendapat restu dari orang-orang terkasih.',
      icon: '💑',
      year: '2023',
    },
    {
      img: '/asset/2024.jpeg',
      title: 'Tumbuh Bersama',
      desc: 'Tahun ini menjadi momentum istimewa ketika Hajid kembali berkunjung, kali ini ditemani keluarga besarnya. Dengan penuh kerendahan hati dan niat yang sungguh-sungguh, mereka datang untuk menyampaikan keinginan melanjutkan hubungan kami ke jenjang yang lebih serius. Sebuah langkah besar yang penuh makna menuju komitmen yang lebih dalam.',
      icon: '🌱',
      year: '2024',
    },
    {
      img: '/asset/2025.jpeg',
      title: 'Menuju Masa Depan',
      desc: 'Di tahun yang penuh berkah ini, Hajid dengan segenap ketulusan hati dan niat suci untuk beribadah bersama, melamar Fauji dalam sebuah momen yang tak akan pernah terlupakan. Dengan doa restu dari kedua keluarga dan ridho Allah SWT, kami siap melangkah bersama menuju babak baru kehidupan sebagai sepasang suami istri yang saling melengkapi.',
      icon: '💍',
      year: '2025',
    }
  ];

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const container = containerRef.current;
    const pinWrap = pinWrapRef.current;

    if (!container || !pinWrap) return;

    // Wait for images to load
    const images = pinWrap.querySelectorAll('img');
    const imagePromises = Array.from(images).map(img => {
      return new Promise((resolve) => {
        if (img.complete) {
          resolve(null);
        } else {
          img.onload = () => resolve(null);
          img.onerror = () => resolve(null);
        }
      });
    });

    Promise.all(imagePromises).then(() => {
      // Calculate the total width needed for horizontal scroll
      const pinWrapWidth = pinWrap.scrollWidth;
      const windowWidth = window.innerWidth;
      const horizontalScrollLength = pinWrapWidth - windowWidth;

      if (horizontalScrollLength > 0) {
        // Create the horizontal scroll animation
        const scrollTween = gsap.to(pinWrap, {
          x: -horizontalScrollLength,
          ease: 'none',
          scrollTrigger: {
            trigger: container,
            pin: true,
            scrub: 1,
            start: 'top top',
            end: () => `+=${horizontalScrollLength}`,
            anticipatePin: 1,
            refreshPriority: -1,
          }
        });

        // Cleanup function
        return () => {
          scrollTween.kill();
        };
      }
    });

    // Card hover animations
    const cards = container.querySelectorAll('.journey-card');
    cards.forEach((card) => {
      const cardElement = card as HTMLElement;

      cardElement.addEventListener('mouseenter', () => {
        gsap.to(cardElement, {
          y: -10,
          scale: 1.05,
          duration: 0.3,
          ease: 'power2.out'
        });
      });

      cardElement.addEventListener('mouseleave', () => {
        gsap.to(cardElement, {
          y: 0,
          scale: 1,
          duration: 0.3,
          ease: 'power2.out'
        });
      });
    });

    // Cleanup function for event listeners
    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === container) {
          trigger.kill();
        }
      });
    };
  }, []);

  return (
    <section
      id="love-journey-section"
      ref={containerRef}
      style={{
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        background: 'transparent',
        position: 'relative'
      }}
    >
      <div
        className="container"
        style={{
          width: '100%',
          maxWidth: window.innerWidth < 768 ? '100%' : '1200px',
          margin: '0 auto',
          padding: window.innerWidth < 768 ? '0 0.5rem' : '0 1rem',
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden'
        }}
      >
        <div
          className="pin-wrap-journey"
          ref={pinWrapRef}
          style={{
            width: '100%',
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            padding: '0',
            gap: window.innerWidth < 768 ? '1rem' : '2rem',
            willChange: 'transform'
          }}
        >
          {/* Section Title */}
          <div style={{
            minWidth: window.innerWidth < 768 ? '250px' : '300px',
            width: window.innerWidth < 768 ? '250px' : '300px',
            padding: '0 5rem',
            textAlign: 'center',
            color: '#a57cc5',
            flexShrink: 0
          }}>
            <h2 style={{
              fontFamily: "'Dancing Script', cursive",
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: '800',
              marginBottom: '1rem',
              textShadow: '0 2px 10px rgba(165, 124, 197, 0.3)'
            }}>
              Perjalanan Cinta
            </h2>
            <div style={{
              width: '80px',
              height: '2px',
              background: 'linear-gradient(90deg, #a57cc5, #d4b5e0)',
              margin: '0.5rem auto 2rem auto'
            }}></div>
            <p style={{
              fontSize: '1.2rem',
              opacity: 0.9,
              maxWidth: '300px',
              margin: '0 auto',
              lineHeight: 1.6,
              color: '#7c5e99'
            }}>
              Momen-momen indah yang membentuk cerita cinta kami
            </p>
          </div>

          {/* Journey Cards */}
          {journeySteps.map((step, index) => (
            <div
              key={index}
              className="journey-card"
              style={{
                margin: "0 1rem",
                background: 'rgba(165, 124, 197, 0.1)',
                minWidth: window.innerWidth < 768 ? '350px' : '420px',
                width: window.innerWidth < 768 ? '350px' : '420px',
                height: window.innerWidth < 768 ? '520px' : '580px',
                borderRadius: '1.5rem',
                position: 'relative',
                boxShadow: '0 10px 30px rgba(165, 124, 197, 0.3)',
                cursor: 'pointer',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(165, 124, 197, 0.2)',
                flexShrink: 0,
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              {/* Badge tahun seperti awan */}
              <div style={{
                position: 'absolute',
                top: '-20px',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 10,
                background: '#fff',
                borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
                padding: '10px 18px',
                boxShadow: '0 6px 20px rgba(165, 124, 197, 0.15), 0 2px 6px rgba(165, 124, 197, 0.1)',
                border: '1px solid rgba(165, 124, 197, 0.15)',
                filter: 'drop-shadow(0 2px 4px rgba(165, 124, 197, 0.08))',
              }}>
                <span style={{
                  color: '#a57cc5',
                  fontWeight: 700,
                  fontSize: '1.05rem',
                  fontFamily: 'sans-serif',
                  letterSpacing: '0.5px',
                }}>{step.year}</span>
              </div>

              {/* Image Container */}
              <div style={{
                flex: '1 1 55%',
                padding: window.innerWidth < 768 ? '1.8rem 1.2rem 0.8rem 1.2rem' : '2rem 1.5rem 1rem 1.5rem',
                display: 'flex',
                alignItems: 'center'
              }}>
                <img
                  src={step.img}
                  alt={step.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '1rem',
                    boxShadow: '0 4px 16px rgba(165, 124, 197, 0.2)',
                    maxHeight: window.innerWidth < 768 ? '260px' : '300px'
                  }}
                />
              </div>

              {/* Text Content */}
              <div style={{
                flex: '1 1 45%',
                padding: window.innerWidth < 768 ? '0.8rem 1.2rem 1.5rem 1.2rem' : '1rem 1.5rem 2rem 1.5rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                textAlign: 'center',
                minHeight: 0
              }}>
                <h3 style={{
                  fontFamily: "'Dancing Script', cursive",
                  fontSize: window.innerWidth < 768 ? '1.8rem' : '2.2rem',
                  fontWeight: '700',
                  color: '#a57cc5',
                  marginBottom: '1rem',
                  marginTop: '0.3rem',
                  textShadow: '0 2px 8px rgba(165, 124, 197, 0.3)'
                }}>
                  <b>{step.title}</b>
                </h3>
                <p style={{
                  fontSize: window.innerWidth < 768 ? '1rem' : '1.1rem',
                  color: '#7c5e99',
                  lineHeight: 1.6,
                  margin: 0,
                  overflow: 'hidden',
                  display: '-webkit-box',
                  WebkitLineClamp: 5,
                  WebkitBoxOrient: 'vertical'
                }}>
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        
          {/* Quote section */}
          <div style={{
            minWidth:"5px",
            width:"5px",
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#a57cc5',
            flexShrink: 0,
            textAlign: 'center'
          }}>
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoveJourneySection;
