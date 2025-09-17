import React from 'react';
import type { RefObject } from 'react';

interface MusicPlayerProps {
  showMainContent: boolean;
  isPlaying: boolean;
  audioRef: RefObject<HTMLAudioElement | null>;
  setIsPlaying: (playing: boolean) => void;
}

const MusicPlayer: React.FC<MusicPlayerProps> = ({ showMainContent, isPlaying, audioRef, setIsPlaying }) => (
  <>
    <button
      id="music-btn"
      style={{
        position: 'fixed',
        bottom: 20,
        right: 20,
        width: 50,
        height: 50,
        borderRadius: '50%',
        background: '#a57cc5',
        color: '#fff',
        border: 'none',
        display: showMainContent ? 'flex' : 'none',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        boxShadow: '0 4px 12px rgba(0,0,0,.2)',
        zIndex: 9999
      }}
      onClick={() => {
        if (isPlaying) {
          audioRef.current?.pause();
          setIsPlaying(false);
        } else {
          audioRef.current?.play();
          setIsPlaying(true);
        }
      }}
    >
      {isPlaying ? '❚❚' : '▶'}
    </button>
    <audio
      id="bg-music"
      ref={audioRef}
      loop
      src="/public/asset/daylight.mp3"
      style={{ display: 'none' }}
    />
  </>
);

export default MusicPlayer;
