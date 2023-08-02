import React from 'react'
import HeroImage from '../assets/heroImage.png';

const Hero = () => {
    return (
      <div className="hero-container">
        <div className="hero-text">
          <h1>NEVER LOSE THE <span className='highlight'>PEAKS</span>.</h1>
          <h1>BUY AT THE <span className='highlight'>CREEKS</span>.</h1>
          <h6>Stay ahead in the world of crypto-investing with seamless coin tracking and real-time trend updates to make smarter investment decisions.</h6>
          {/* Add any other content you want */}
        </div>
        <img className='hero-image' src={HeroImage} />
      </div>
    );
  };
  
  export default Hero;