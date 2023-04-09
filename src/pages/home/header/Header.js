import React from 'react';

import './Header.css';
import ImageData from './ImageData';

const Header = () => (
  <div className="header section__padding" id="home">
    <div className="header-content">
      <h1 className="gradient__text">ZENOXIS NFT</h1>
      <p>Individuals can develop a sense of identity and individuality in the virtual world by owning an Zenoxis avatar. They can also connect with people who have similar interests and preferences. With the help of our inclusive and diverse avatars, people of all backgrounds can express themselves and feel a part of the online community.</p>
    </div>
    <ImageData />
    
  </div> 
 
  
);

export default Header;