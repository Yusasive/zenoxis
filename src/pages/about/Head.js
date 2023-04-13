import React from 'react';
import './About.css'; 
import Business from '../../assets/business.png';

const Head = () => {
  return (
    <div className='head'>
    <img src={Business} alt="Business" />
      <h1>About Us</h1>
    </div>
  )
}

export default Head
