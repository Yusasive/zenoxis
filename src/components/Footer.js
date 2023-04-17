import React from 'react';
import { Link } from 'react-router-dom';
//import FAQs from "../pages/faqs/FAQs";
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
      <Link className='footer__text' to="../pages/faqs/">
        FAQs
      </Link>
      <Link className='footer__text' to="">
        Become a Partner
      </Link> <br />
      <div className='footer__icons'>
      <Link className='social__icons' to="#"> <FaDiscord className='social' /> </Link>
      <Link className='social__icons' to="#"> <FaTwitter className='social' /> </Link>
      <Link className='social__icons' to="#"> <FaTelegram className='social' /> </Link>
      </div>
      </div> 

    </div>
  )
}

export default Footer;


