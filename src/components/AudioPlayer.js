import React, { useState, useRef, useEffect } from 'react';
import './AudioPlayer.css';

const AudioPlayer = ({ 
  src, 
  title = "Background Music", 
  autoPlay = false, 
  loop = true,
  volume = 0.3 
}) => {
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [currentVolume, setCurrentVolume] = useState(volume);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : currentVolume;
    }
  }, [currentVolume, isMuted]);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(error => {
          console.log('Autoplay prevented:', error);
          setIsPlaying(false);
        });
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setCurrentVolume(newVolume);
    setIsMuted(newVolume === 0);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const handleEnded = () => {
    if (loop) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    } else {
      setIsPlaying(false);
    }
  };

  return (
    <div className="audio-player">
      <audio
        ref={audioRef}
        src={src}
        loop={loop}
        onEnded={handleEnded}
        preload="metadata"
      />
      
      <div className="audio-controls">
        <button 
          className="audio-btn play-pause-btn"
          onClick={togglePlayPause}
          aria-label={isPlaying ? 'Pause music' : 'Play music'}
        >
          {isPlaying ? '⏸️' : '▶️'}
        </button>
        
        <div className="volume-controls">
          <button 
            className="audio-btn mute-btn"
            onClick={toggleMute}
            aria-label={isMuted ? 'Unmute' : 'Mute'}
          >
            {isMuted ? '🔇' : '🔊'}
          </button>
          
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={isMuted ? 0 : currentVolume}
            onChange={handleVolumeChange}
            className="volume-slider"
            aria-label="Volume control"
          />
        </div>
        
        <span className="audio-title">{title}</span>
      </div>
    </div>
  );
};

export default AudioPlayer;
