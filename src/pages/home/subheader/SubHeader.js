import React from 'react';
import { Link } from "react-router-dom";

import ai from '../../../assets/ai.png';
import './SubHeader.css';

const SubHeader = () => (
    <div className='sub'>
    <h1>Our avatars are created to be cross-
platform & cross-application compatible
allowing users to carry their digital
identity with them wherever they go.</h1>
  <div className="subheader section__padding" id="home">
     <div className="subheader-image">
      <img src={ai} alt="AI" />
    </div>
    <div className="subheader-content">
      <h2 className="gradient__text">What is Zenoxis ?</h2>
      <p> Zenoxis offers a unique and easy way for individuals to express themselves and connect with others in the digital world through NFTs. Each NFT avatar is a one-of-a-kind digital asset that reflects the personality and preferences of its owner according to what chooses.</p>
      <p>Additionally, our avatars are peer-to-peer (P2P), allowing users to transact directly with one another without the aid of middlemen or marketplaces.</p>
      <Link className='Learn' to="../../About.js">Learn More Zenoxis</Link>

    </div>
  </div> 
  </div>
 
  
);

export default SubHeader;