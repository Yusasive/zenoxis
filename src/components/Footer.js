import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import {FaTwitter, FaTelegram, FaDiscord} from 'react-icons/fa';
const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer__head'>
        <h2>Stay in the loop</h2>
        <input type="email" placeholder='Your email here *' />
      </div>
      <div className='footer__sub'>
      <Link className='footer__text' to="/FAQs">
        FAQs
      </Link>
      <Link className='footer__text' to="/FAQs">
        Become a Partner
      </Link> <br />
      <div className='footer__icons'>
      <Link className='icons' to="#"> <FaDiscord /> </Link>
      <Link className='icons' to="#"> <FaTwitter /> </Link>
      <Link className='icons' to="#"> <FaTelegram /> </Link>
      </div>
      </div> 
      <div className='footer__para'><p>my nnameghedfb</p></div>
    </div>
  )
}

export default Footer;


