import React from 'react';
import './About.css';
import AI from '../../assets/ai.png';

const SecondAbout = () => {
  return (
    <div className="first-about" id="home">
     
    <div className="first-about-content">

      <p> Our team culture emphasizes creativity, innovation, and continuous learning, allowing us to stay at the forefront of the digital world.Our team has a strong track record of delivering high-quality projects, and we are excited to continue creating innovative solutions that enable individuals to express themselves and connect with others in the digital world through NFTs.</p>
    </div>
    <div className="first-about-image">
      <img src={AI} alt="AI" />
    </div>
  </div> 
  )
}

export default SecondAbout;
