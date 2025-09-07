import { useEffect, useRef } from 'react';

interface ScrollRevealConfig {
  reset?: boolean;
  distance?: string;
  duration?: number;
  delay?: number;
  easing?: string;
  mobile?: boolean;
}

interface RevealConfig extends ScrollRevealConfig {
  origin?: 'top' | 'bottom' | 'left' | 'right';
  scale?: number;
  afterReveal?: (el: HTMLElement) => void;
}

export const useScrollReveal = () => {
  const scrollRevealRef = useRef<any>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('scrollreveal').then((ScrollRevealModule) => {
        scrollRevealRef.current = ScrollRevealModule.default;
      });
    }
  }, []);

  const reveal = (selector: string, config: RevealConfig = {}) => {
    if (!scrollRevealRef.current) return;

    const SR = scrollRevealRef.current;
    SR.reveal(selector, config);
  };

  const initialize = (config: ScrollRevealConfig = {}) => {
    if (!scrollRevealRef.current) return;

    const defaultConfig = {
      reset: false,
      distance: '60px',
      duration: 1000,
      delay: 200,
      easing: 'cubic-bezier(0.5, 0, 0, 1)',
      mobile: true,
      ...config
    };

    scrollRevealRef.current(defaultConfig);
  };

  const initializeAllAnimations = () => {
    if (!scrollRevealRef.current) return;

    initialize();

    // Hero section animations
    reveal('.line-separator', {
      delay: 300,
      duration: 1200,
      origin: 'top',
      distance: '30px'
    });

    reveal('.line-left', {
      delay: 500,
      duration: 800,
      origin: 'left'
    });

    reveal('.line-right', {
      delay: 500,
      duration: 800,
      origin: 'right'
    });

    reveal('.ring-icon', {
      delay: 800,
      duration: 1000,
      scale: 0.85,
      afterReveal: (el: HTMLElement) => {
        el.classList.add('animate__animated', 'animate__bounce');
      }
    });

    // Main invitation section
    reveal('.main-invitation', {
      delay: 200,
      duration: 1200,
      origin: 'bottom'
    });

    reveal('.greeting-text', {
      delay: 400,
      duration: 1000,
      origin: 'top'
    });

    reveal('.invitation-text', {
      delay: 600,
      duration: 1000,
      origin: 'bottom'
    });

    // Couple photos with staggered animation
    reveal('.bride-photo', {
      delay: 300,
      duration: 1000,
      origin: 'left',
      distance: '80px'
    });

    reveal('.bride-name', {
      delay: 500,
      duration: 1000,
      origin: 'bottom',
      distance: '40px'
    });

    reveal('.groom-photo', {
      delay: 700,
      duration: 1000,
      origin: 'right',
      distance: '80px'
    });

    reveal('.groom-name', {
      delay: 900,
      duration: 1000,
      origin: 'bottom',
      distance: '40px'
    });

    // Time and place section
    reveal('.time-place-section', {
      delay: 200,
      duration: 1200,
      origin: 'bottom'
    });

    reveal('.section-title', {
      delay: 300,
      duration: 1000,
      origin: 'top'
    });

    reveal('.calendar-info', {
      delay: 500,
      duration: 800,
      scale: 0.9
    });

    reveal('.event-details', {
      delay: 700,
      duration: 1200,
      scale: 0.85
    });

    // Gift section with slide animations
    reveal('.gift-section', {
      delay: 200,
      duration: 1200,
      origin: 'bottom'
    });

    reveal('.gift-title', {
      delay: 300,
      duration: 1000,
      origin: 'top'
    });

    reveal('.gift-message', {
      delay: 500,
      duration: 1000,
      scale: 0.9
    });

    reveal('.bank-account', {
      delay: 600,
      duration: 1000,
      origin: 'left',
      distance: '100px'
    });

    reveal('.ewallet-account', {
      delay: 800,
      duration: 1000,
      origin: 'right',
      distance: '100px'
    });

    // Love journey section
    reveal('.love-journey-section', {
      delay: 200,
      duration: 1200,
      origin: 'bottom'
    });

    reveal('.love-title', {
      delay: 300,
      duration: 1000,
      origin: 'top'
    });

    reveal('.love-story', {
      delay: 500,
      duration: 1200,
      scale: 0.85
    });

    reveal('.motor-image', {
      delay: 700,
      duration: 1000,
      origin: 'bottom',
      distance: '80px'
    });

    reveal('.love-quote', {
      delay: 900,
      duration: 1200,
      origin: 'bottom',
      distance: '40px',
      afterReveal: (el: HTMLElement) => {
        el.classList.add('animate__animated', 'animate__fadeInUp');
      }
    });

    // Footer section
    reveal('.footer-section', {
      delay: 200,
      duration: 1200,
      origin: 'bottom'
    });

    reveal('.footer-message', {
      delay: 400,
      duration: 1000,
      origin: 'bottom',
      distance: '40px'
    });

    reveal('.footer-line', {
      delay: 600,
      duration: 800,
      scale: 0.8
    });

    reveal('.footer-names', {
      delay: 800,
      duration: 1000,
      origin: 'bottom',
      distance: '30px'
    });

    reveal('.footer-date', {
      delay: 1000,
      duration: 1000,
      origin: 'bottom',
      distance: '20px'
    });

    reveal('.footer-ornament', {
      delay: 1200,
      duration: 1000,
      scale: 0.8
    });

    // Special effects for interactive elements
    reveal('.main-content button', {
      delay: 300,
      duration: 800,
      scale: 0.85,
      afterReveal: (el: HTMLElement) => {
        el.classList.add('animate__animated', 'animate__pulse');
        el.style.animationIterationCount = 'infinite';
        el.style.animationDuration = '2s';
      }
    });

    // Google Maps container
    reveal('iframe', {
      delay: 500,
      duration: 1200,
      origin: 'bottom',
      distance: '60px'
    });
  };

  return {
    reveal,
    initialize,
    initializeAllAnimations,
    isLoaded: !!scrollRevealRef.current
  };
};
