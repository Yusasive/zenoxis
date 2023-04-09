import React from 'react'
import Picture from "../../../assets/ai.png"
import Icon from "../../../assets/icon-view.svg"
import './Features.css'
const FirstCard = () => {
  return (
    <div className="card">
    <p  className="card__images">
        <img src={Picture} alt="equilibrium" id="equilibrium" />
        <div className="card__images-layer">
          <img src={Icon} alt="an icon of eye/view" id="view" />
        </div>
    </p>
      <h1 className="card-title">ZENOXIS MEGA NFT</h1>
    <p className='card-id'>Otebalancecalmwfsjdmdjkfkndk esdjbesnbfdxkjmsfdfxsdfnmnjdy esdbnkjrndfiouemdfslkes</p>
    <div class="card__time">
        <div class="card__time-left">
         
          <p>Floor: <span>0.5ETH</span></p>

        </div>
        <div class="card__time-right">
         
          <p>Bid Time: <span>2h 30m 43s</span></p>
        </div>
    </div>
   
    </div>
  )
}

export default FirstCard;