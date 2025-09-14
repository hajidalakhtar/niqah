import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface OpeningSectionProps {
  isOpened: boolean;
  handleOpenInvitation: () => void;
  handleMouseEnter: (buttonId: string) => void;
  handleMouseLeave: (buttonId: string) => void;
  getButtonStyle: (buttonId: string, baseStyle: React.CSSProperties) => React.CSSProperties;
  staggerContainer: any;
  openingCardVariants: any;
  fadeUp: any;
}

const OpeningSection: React.FC<OpeningSectionProps> = ({
  isOpened,
  handleOpenInvitation,
  handleMouseEnter,
  handleMouseLeave,
  getButtonStyle,
  staggerContainer,
  openingCardVariants,
  fadeUp
}) => {
  const [guestName, setGuestName] = useState<string>('Tamu Undangan');

  useEffect(() => {
    // Get guest name from URL query parameter
    const urlParams = new URLSearchParams(window.location.search);
    const toParam = urlParams.get('to');
    
    if (toParam) {
      // Decode URI component in case the name contains special characters
      setGuestName(decodeURIComponent(toParam));
    }
  }, []);

  return (
  <AnimatePresence>
    {!isOpened && (
      <motion.div
        className="opening-container"
        initial="visible"
        animate="visible"
        exit={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
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
          pointerEvents: isOpened ? 'none' : 'auto'
        }}
        variants={staggerContainer}
      >
        <motion.div
          className="opening-card"
          variants={openingCardVariants}
          initial="hidden"
          animate="visible"
          style={{
            background: '#fdf6ec',
            borderRadius: '2.5rem',
            border: '4px solid #fdf6ec',
            maxWidth: '400px',
            width: '100%',
            padding: '1.5rem',
            position: 'relative',
            boxSizing: 'border-box'
          }}
        >
          <motion.div
            className="opening-card-img"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 80, damping: 18, delay: 0.2 }}
            style={{
              borderRadius: '1.5rem',
              overflow: 'hidden',
              marginBottom: '1.5rem',
              width: '100%',
              aspectRatio: '3/4',
              height: 'auto',
              display: 'block',
              position: 'relative'
            }}
          >
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
          </motion.div>
          <div style={{ textAlign: 'center' }}>
            <motion.span
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              style={{
                color: '#a57cc5',
                fontFamily: 'sans-serif',
                fontSize: '1.1rem',
                fontWeight: 400
              }}
            >
              Kepada Yth.
            </motion.span>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              style={{
                color: '#a57cc5',
                fontSize: '2.2rem',
                fontWeight: 600,
                marginBottom: '1.2rem'
              }}
            >
              {guestName}
            </motion.div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <motion.button
                onClick={handleOpenInvitation}
                onMouseEnter={() => handleMouseEnter('openButton')}
                onMouseLeave={() => handleMouseLeave('openButton')}
                whileHover={{ scale: 1.08, boxShadow: '0 6px 16px rgba(165, 124, 197, 0.5)' }}
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
                variants={fadeUp}
                initial="hidden"
                animate="visible"
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" style={{ verticalAlign: 'middle' }}>
                  <path d="M4 19V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v14" stroke="#a57cc5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M4 19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2" stroke="#a57cc5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M9 9h6" stroke="#a57cc5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M9 13h6" stroke="#a57cc5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Buka Undangan
              </motion.button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
  );
};

export default OpeningSection;
