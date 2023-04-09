import React from 'react'
import FirstCard from './FirstCard'
import SecondCard from './SecondCard'
import ThirdCard from './ThirdCard'
import './Features.css'
const Features = () => {
  return (
    <div className='Features-nfts'>
    <h1>Features NFTs</h1>
    <div className='Features'>
      <FirstCard />
      <SecondCard />
      <ThirdCard />
    </div>
    </div>
  )
}

export default Features
