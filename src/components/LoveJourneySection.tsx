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
      img: '/asset/pertama_ketemu.jpeg',
      title: 'Pertama Bertemu',
      desc: 'Awal mula perjalanan cinta kami dimulai dari pertemuan sederhana yang tak terduga.',
      icon: '💌',
      year: '2021',
    },
    {
      img: '/asset/dummy_fauji.jpeg',
      title: 'Momen Bersama',
      desc: 'Kami mulai saling mengenal dan berbagi cerita, suka maupun duka.',
      icon: '💑',
      year: '2022',
    },
    {
      img: '/asset/dummy_hajid.jpeg',
      title: 'Tumbuh Bersama',
      desc: 'Bersama-sama kami belajar, tumbuh, dan saling mendukung satu sama lain.',
      icon: '🌱',
      year: '2023',
    },
    {
      img: '/asset/foto_pasangan.jpeg',
      title: 'Menuju Masa Depan',
      desc: 'Kini kami melangkah bersama, memulai babak baru sebagai pasangan suami istri.',
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
        height: '100vh',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        background: 'transparent',
        position: 'relative'
      }}
    >
      <div 
        className="pin-wrap-journey"
        ref={pinWrapRef}
        style={{
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          padding: '0 5vw',
          gap: '2rem',
          willChange: 'transform'
        }}
      >
        {/* Section Title */}
        <div style={{
          minWidth: '40vw',
          padding: '0 2rem',
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
              minWidth: '350px',
              width: '350px',
              height: '500px',
              borderRadius: '1.5rem',
              overflow: 'visible',
              position: 'relative',
              boxShadow: '0 10px 30px rgba(165, 124, 197, 0.3)',
              cursor: 'pointer',
              background: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(165, 124, 197, 0.2)',
              flexShrink: 0
            }}
          >
            {/* Badge tahun bentuk awan putih, teks ungu */}
            <div style={{
              position: 'absolute',
              top: '-28px',
              left: '50%',
              transform: 'translateX(-50%)',
              zIndex: 10,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '38px',
              width: '70px',
            }}>
              <svg width="70" height="38" viewBox="0 0 70 38" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', left: 0, top: 0 }}>
                <ellipse cx="22" cy="22" rx="18" ry="13" fill="#fff" />
                <ellipse cx="40" cy="18" rx="14" ry="10" fill="#fff" />
                <ellipse cx="55" cy="25" rx="9" ry="7" fill="#fff" />
                <circle cx="32" cy="28" r="7" fill="#fff" />
                <circle cx="50" cy="13" r="6" fill="#fff" />
                <ellipse cx="60" cy="30" rx="6" ry="4" fill="#fff" />
              </svg>
              <span style={{
                position: 'relative',
                color: '#a57cc5',
                fontWeight: 700,
                fontSize: '1.08rem',
                padding: '2px 18px',
                zIndex: 2,
                fontFamily: 'sans-serif',
                letterSpacing: '1px',
              }}>{step.year}</span>
            </div>

            <div style={{ position: 'relative', height: '60%', margin: '2rem 1rem 0 1rem' }}>
              <img
                src={step.img}
                alt={step.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '1rem',
                  boxShadow: '0 4px 16px rgba(165, 124, 197, 0.16)'
                }}
              />
            </div>

            <div style={{
              padding: '1.5rem',
              height: '40%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              textAlign: 'center'
            }}>
              <h3 style={{
                fontSize: '1.3rem',
                fontWeight: '600',
                color: '#a57cc5',
                marginBottom: '0.5rem'
              }}>
                {step.title}
              </h3>
              <p style={{
                fontSize: '0.9rem',
                color: '#7c5e99',
                lineHeight: 1.4
              }}>
                {step.desc}
              </p>
            </div>
          </div>
        ))}

        {/* Quote section */}
        <div style={{
          minWidth: '40vw',
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#a57cc5',
          flexShrink: 0,
          textAlign: 'center'
        }}>
          <div style={{
            maxWidth: '350px',
            background: 'rgba(165, 124, 197, 0.1)',
            borderRadius: '1.5rem',
            padding: '2rem',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(165, 124, 197, 0.2)',
            boxShadow: '0 10px 30px rgba(165, 124, 197, 0.2)'
          }}>
            <div style={{
              fontSize: '3rem',
              marginBottom: '1rem'
            }}>
              💕
            </div>
            <p style={{
              fontSize: '1.1rem',
              fontStyle: 'italic',
              lineHeight: 1.6,
              color: '#a57cc5'
            }}>
              "Dimulai dari perjalanan sederhana,<br />
              kini menjadi cerita cinta yang indah.<br />
              Bersama melangkah menuju masa depan yang bahagia."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoveJourneySection;
