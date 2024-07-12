import React, { useState, useRef } from 'react';
import Header from "./components/Header";
import Hero from "./components/Hero";
import Howtobuy from "./components/Howtobuy";
import Tokenomics from "./components/Tokenomics";
import Underpackage from "./components/Underpackage";
import Welcomepackage from "./components/Welcomepackage";
import bgmusic from './assets/bgmusic.mp3';

function App() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayMusic = () => {
    if (audioRef.current) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="relative flex flex-col  r items-center App overflow-hidden">
      {/* <div className="fixed  z-[60] top-10">
        <button className='z-[60]' onClick={handlePlayMusic} disabled={isPlaying}>
          {isPlaying ? 'Music Playing' : 'Play Music'}
        </button>

        hellooo
        <audio ref={audioRef} src={bgmusic} loop />
      </div> */}
      <Header />
      <Hero />
      <Welcomepackage />
      <Underpackage />
    </div>
  );
}

export default App;
