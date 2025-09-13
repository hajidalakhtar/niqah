import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const HorizontalGallerySection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const pinWrapRef = useRef<HTMLDivElement>(null);

  const galleryImages = [
    {
      src: '/asset/foto_pasangan.jpeg',
      title: 'Kebahagiaan Kami',
      description: 'Momen indah bersama yang tak terlupakan'
    },
    {
      src: '/asset/pertama_ketemu.jpeg',
      title: 'Pertama Bertemu',
      description: 'Awal dari kisah cinta yang indah'
    },
    {
      src: '/asset/fauji.png',
      title: 'Fauji',
      description: 'Calon mempelai pria'
    },
    {
      src: '/asset/hajid.png',
      title: 'Hajid',
      description: 'Calon mempelai wanita'
    },
    {
      src: '/asset/motor.png',
      title: 'Perjalanan Cinta',
      description: 'Bersama mengarungi kehidupan'
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
    const cards = container.querySelectorAll('.gallery-card');
    cards.forEach((card) => {
      const cardElement = card as HTMLElement;
      
      cardElement.addEventListener('mouseenter', () => {
        gsap.to(cardElement, {
          y: -10,
          scale: 1.05,
          duration: 0.3,
          ease: 'power2.out'
        });
        gsap.to(cardElement.querySelector('.card-overlay'), {
          opacity: 1,
          duration: 0.3
        });
      });

      cardElement.addEventListener('mouseleave', () => {
        gsap.to(cardElement, {
          y: 0,
          scale: 1,
          duration: 0.3,
          ease: 'power2.out'
        });
        gsap.to(cardElement.querySelector('.card-overlay'), {
          opacity: 0,
          duration: 0.3
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
      id="horizontal-gallery-section"
      ref={containerRef}
      style={{
        height: '100vh',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #a57cc5 0%, #d4b5e0 100%)',
        position: 'relative'
      }}
    >
      <div 
        className="pin-wrap-gallery"
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
          color: 'white',
          flexShrink: 0
        }}>
          <h2 style={{
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: '800',
            marginBottom: '1rem',
            textShadow: '0 2px 10px rgba(0,0,0,0.3)'
          }}>
            Galeri Cinta
          </h2>
          <p style={{
            fontSize: '1.2rem',
            opacity: 0.9,
            maxWidth: '300px',
            margin: '0 auto',
            lineHeight: 1.6
          }}>
            Momen-momen indah perjalanan cinta kami
          </p>
        </div>

        {/* Gallery Cards */}
        {galleryImages.map((image, index) => (
          <div
            key={index}
            className="gallery-card"
            style={{
              minWidth: '350px',
              width: '350px',
              height: '500px',
              borderRadius: '1.5rem',
              overflow: 'hidden',
              position: 'relative',
              boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
              cursor: 'pointer',
              background: 'white',
              flexShrink: 0
            }}
          >
            <div style={{ position: 'relative', height: '70%' }}>
              <img
                src={image.src}
                alt={image.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
              <div
                className="card-overlay"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(135deg, rgba(165, 124, 197, 0.8), rgba(212, 181, 224, 0.8))',
                  opacity: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  transition: 'opacity 0.3s ease'
                }}
              >
                ❤️
              </div>
            </div>
            <div style={{
              padding: '1.5rem',
              height: '30%',
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
                {image.title}
              </h3>
              <p style={{
                fontSize: '0.9rem',
                color: '#666',
                lineHeight: 1.4
              }}>
                {image.description}
              </p>
            </div>
          </div>
        ))}

        {/* End spacer */}
        <div style={{
          minWidth: '20vw',
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          flexShrink: 0
        }}>
          <div style={{
            textAlign: 'center',
            opacity: 0.8
          }}>
            <div style={{
              fontSize: '3rem',
              marginBottom: '1rem'
            }}>
              💕
            </div>
            <p style={{
              fontSize: '1.1rem'
            }}>
              Cinta sejati
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HorizontalGallerySection;
