import React from 'react';
import { Link } from "react-router-dom";
import people from '../../../assets/people.png'
import './Who.css';

const Who = () => {
  return (
    <div className='who'>
      <div className='who-image'>
        <img src={people} className='who-image-icon' alt="people" />
      </div>
      <div className='who-content'>
        <h1 className='who-header'>Who we are</h1>
        <p className='who-description'>The Zenoxis team is composed of passionate individuals with diverse backgrounds and experiences. Our team comprises experts in blockchain technology, digital art, and user experience design. We have a deep understanding of the digital world and are committed to leveraging technology to create a more inclusive and connected online community.
</p>
    <Link className='Learn' to="/AboutUs">Learn More Zenoxis</Link>
      </div>
    </div>
  )
}

export default Who
