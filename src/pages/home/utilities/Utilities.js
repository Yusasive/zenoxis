import React from 'react';
import './Utilities.css';
import airdrop from '../../../assets/airdrop.png';
import lock from '../../../assets/lock.png';
import square from '../../../assets/square.png';
import business from '../../../assets/business.png';
import copyright from '../../../assets/copyright.png'

const Utilities = () => {
  return (
    <div className="wrapper">
    <div className="box a">
    <img className='icon-1' src={business} alt="business" />
    <p className='paragraph'>Access to exclusive
events or communities</p>
    </div>
    <div className="box b">
      <img className='icons' src={lock} alt="lock" />
      <p className='paragraph'>Unlockable content</p>
    </div>
    <div className="box c">
      <img className='icons' src={copyright} alt="copyright" />
      <p className='paragraph'>IP rights</p>
    </div>
    <div className="box d">
      <img className='icons' src={airdrop} alt="airdrop" />
      <p className='paragraph'>Airdrops</p>
    </div>

    <div className="box e">
      <img className='icons' src={square} alt="square" />
      <p className='paragraph'>Limited edition
on physical merchandise</p>
    </div>
  </div>
  );
};


export default Utilities;
