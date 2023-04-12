import React from 'react';
import AI from '../assets/ai.png';
import './index.css'

const About = () => {
  return (

<div className='about'>

<div className='about__header'>
  <h1>About Us</h1>
</div>

<div className="first__about" id="home">
     <div className="first-about-image">
      <img src={AI} alt="AI" />
    </div>
    <div className="first-about-content">

      <p> The Zenoxis team is composed of passionate individuals with diverse backgrounds and experiences. Our team comprises experts in blockchain technology, digital art, and user experience design. We have a deep understanding of the digital world and are committed to leveraging technology to create a more inclusive and connected online community.We take a collaborative approach to all our projects, ensuring that each team member's unique skillset is utilized to its fullest potential. </p>

      

    </div>
    </div>

</div>
  );
}

export default About;