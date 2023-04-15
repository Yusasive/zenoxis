import React from 'react';
import "./Features.css";
import ai from '../../../assets/ai.png'

export default function FirstCard() {
    function renderCards() {
        return (
            <div className="card-container box-contents">
              
              
              <div className='Card-one'>
              <div className="card-image-container">
                    <img src={ai} alt="card" className="card-image" />
                </div>
                <div className="card-content">
                    <h1 className="card-title">Zenoxis NFT</h1>
                    <p className="card-description">ghdsjhsnknmsjjjjjjdrfbjngdfghjnbm
                    dkjdfghggfvbbnghffcvggfedfhhhhh
                    gfmd</p>
                    <div className="card-details-container">
                        <div className="details-container">
                            
                            <p className="price-text">Floor: <strong>0.5ETH</strong></p>
                            <p className="price-text">Bid Time: <strong>2h 30m 30s</strong></p>
                        </div>
                    </div>
                   </div>
                     </div>

<div className='Card-two'>
<div className="card-image-container-two">
                    <img src={ai} alt="card" className="card-image-two" />
                </div>
                <div className="card-content">
                    <h1 className="card-title">Zenoxis NFT</h1>
                    <p className="card-description">ghdsjhsnknmsjjjjjjdrfbjngdfghjnbm
                    dkjdfghggfvbbnghffcvggfedfhhhhh
                    gfmd</p>
                    <div className="card-details-container">
                        <div className="details-container">
                            
                            <p className="price-text">Floor: <strong>0.5ETH</strong></p>
                            <p className="price-text">Bid Time: <strong>2h 30m 30s</strong></p>
                        </div>
                    </div>
                   
                </div>
</div>




<div className='Card-three'>
<div className="card-image-container">
                    <img src={ai} alt="card" className="card-image" />
                </div>
                <div className="card-content">
                    <h1 className="card-title">Zenoxis NFT</h1>
                    <p className="card-description">ghdsjhsnknmsjjjjjjdrfbjngdfghjnbm
                    dkjdfghggfvbbnghffcvggfedfhhhhh
                    gfmd</p>
                    <div className="card-details-container">
                        <div className="details-container">
                            
                            <p className="price-text">Floor: <strong>0.5ETH</strong></p>
                            <p className="price-text">Bid Time: <strong>2h 30m 30s</strong></p>
                        </div>
                    </div>
                   
                </div>
</div>


            </div>
        )
    }
    return (
        <div>
          
            {renderCards()}
        </div>
    )
}