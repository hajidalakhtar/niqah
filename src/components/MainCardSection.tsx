import React from 'react';
import { motion } from 'framer-motion';

interface MainCardSectionProps {
  fadeUp: any;
}

const MainCardSection: React.FC<MainCardSectionProps> = ({ fadeUp }) => (
  <motion.div
    className="card"
    variants={fadeUp}
    initial="hidden"
    animate="visible"
    style={{
      maxWidth: '400px',
      width: '100%',
      padding: '1.5rem',
      position: 'relative',
      boxSizing: 'border-box',
      overflow: 'hidden',
      margin: '0 auto'
    }}
  >
    <motion.div
      className="card-img"
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
    {/* Desain undangan tambahan */}
    <div style={{ color: '#a57cc5', textAlign: 'center' }}>
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        style={{
          fontFamily: "'Dancing Script', cursive",
          fontSize: '1.5rem'
        }}
      >
        The Wedding Of
      </motion.div>
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        style={{
          marginTop: '1rem',
          fontSize: '2rem',
          fontWeight: 'bold'
        }}
      >
        Hajid & Faujiyah
      </motion.div>
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        style={{ color: '#a57cc5' }}
      >
        Rabu, <span style={{ fontStyle: 'italic' }}>31.12.2025</span>
      </motion.div>
    </div>
  </motion.div>
);

export default MainCardSection;
