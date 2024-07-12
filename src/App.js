import React, { useState, useRef } from 'react';
import Header from "./components/Header";
import Hero from "./components/Hero";
import Howtobuy from "./components/Howtobuy";
import Tokenomics from "./components/Tokenomics";
import Underpackage from "./components/Underpackage";
import Welcomepackage from "./components/Welcomepackage";
import bgmusic from './assets/bgmusic.mp3';
import enter from './assets/enter.svg';
import audio from './assets/audio.png';

function App() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const handlePlayMusic = () => {
    if (audioRef.current) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleToggleMute = () => {
    if (audioRef.current) {
      if (isMuted) {
        audioRef.current.muted = false;
      } else {
        audioRef.current.muted = true;
      }
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="relative flex flex-col App overflow-hidden">
      {!isPlaying && (
        <div className="bg-black/60 backdrop-blur-xl fixed w-full h-screen flex flex-col justify-center items-center z-[60] ftop-10">
          <img
            src={enter}
            alt="Enter"
            className="w-96 p-3 z-[60] cursor-pointer"
            onClick={handlePlayMusic}
          />
        </div>
      )}
      <audio ref={audioRef} src={bgmusic} loop />

      <img
        src={audio}
        alt="Audio Control"
        className="fixed w-28 bottom-2 right-2 z-[60] cursor-pointer"
        onClick={handleToggleMute}
      />
      <Header />
      <Hero />
      <Welcomepackage />
      <Underpackage />
    </div>
  );
}

export default App;
