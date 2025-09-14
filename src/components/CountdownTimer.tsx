import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2025-10-04T00:00:00').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    // Update immediately
    updateCountdown();

    // Update every second
    const timer = setInterval(updateCountdown, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(timer);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      variants={fadeIn}
      initial="hidden"
      animate="visible"
      style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '0.5rem',
        margin: '1rem 0',
        flexWrap: 'wrap'
      }}
    >
      {[
        { label: 'Hari', value: timeLeft.days },
        { label: 'Jam', value: timeLeft.hours },
        { label: 'Menit', value: timeLeft.minutes },
        { label: 'Detik', value: timeLeft.seconds }
      ].map((item, index) => (
        <motion.div
          key={item.label}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            background: 'rgba(165, 124, 197, 0.1)',
            borderRadius: '8px',
            padding: '0.5rem 0.7rem',
            minWidth: '45px',
            border: '1px solid rgba(165, 124, 197, 0.2)',
            backdropFilter: 'blur(10px)'
          }}
        >
          <motion.div
            key={item.value} // This will trigger animation on value change
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.2 }}
            style={{
              fontSize: '1.2rem',
              fontWeight: 'bold',
              color: '#a57cc5',
              lineHeight: '1'
            }}
          >
            {String(item.value).padStart(2, '0')}
          </motion.div>
          <div
            style={{
              fontSize: '0.65rem',
              color: '#a57cc5',
              marginTop: '0.15rem',
              textTransform: 'uppercase',
              letterSpacing: '0.3px'
            }}
          >
            {item.label}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default CountdownTimer;
