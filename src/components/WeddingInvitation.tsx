import React, { useState, useRef, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import OpeningSection from './OpeningSection';
import MainCardSection from './MainCardSection';
import TimePlaceSection from './TimePlaceSection';
import GiftSection from './GiftSection';
import LoveJourneySection from './LoveJourneySection';
import LoveStorySection from './LoveStorySection';
import DoaUcapanSection from './DoaUcapanSection';
import FooterSection from './FooterSection';
import MusicPlayer from './MusicPlayer';
import MainInvitationSection from './MainInvitationSection';
import HorizontalGallerySection from './HorizontalGallerySection';

interface WeddingInvitationProps {
  client?: 'load' | 'visible' | 'idle';
}

const WeddingInvitation: React.FC<WeddingInvitationProps> = ({ client = 'load' }) => {
  const [isOpened, setIsOpened] = useState(false);
  const [showMainContent, setShowMainContent] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (showMainContent) {
      setTimeout(() => {
        audioRef.current?.play();
        setIsPlaying(true);
      }, 500);
    } else {
      audioRef.current?.pause();
      setIsPlaying(false);
    }
  }, [showMainContent]);

  const handleOpenInvitation = () => {
    setIsOpened(true);
    setTimeout(() => {
      setShowMainContent(true);
    }, 800);
  };

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      alert(`Nomor berhasil disalin: ${text}`);
    } catch (err) {
      console.error('Gagal menyalin: ', err);
    }
  };

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
  const openingCardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 60, damping: 18 } }
  };
  const staggerContainer = {
    visible: {
      transition: {
        staggerChildren: 0.18
      }
    }
  };
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 70, damping: 20 } }
  };

  return (
    <>
      <OpeningSection
        isOpened={isOpened}
        handleOpenInvitation={handleOpenInvitation}
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
        getButtonStyle={getButtonStyle}
        staggerContainer={staggerContainer}
        openingCardVariants={openingCardVariants}
        fadeUp={fadeUp}
      />
      <AnimatePresence>
        {showMainContent && (
          <>
            <MainCardSection fadeUp={fadeUp} />


            <MainInvitationSection fadeUp={fadeUp} />

            <TimePlaceSection
              fadeUp={fadeUp}
              handleMouseEnter={handleMouseEnter}
              handleMouseLeave={handleMouseLeave}
              getButtonStyle={getButtonStyle}
            />

            <GiftSection
              copyToClipboard={copyToClipboard}
              handleMouseEnter={handleMouseEnter}
              handleMouseLeave={handleMouseLeave}
              getButtonStyle={getButtonStyle}
            />

            <DoaUcapanSection />

            <LoveJourneySection />

            {/* <LoveStorySection /> */}


            <MusicPlayer
              showMainContent={showMainContent}
              isPlaying={isPlaying}
              audioRef={audioRef}
              setIsPlaying={setIsPlaying}
            />
            <FooterSection />
          </>
        )}
      </AnimatePresence >
    </>
  );
};

export default WeddingInvitation;
