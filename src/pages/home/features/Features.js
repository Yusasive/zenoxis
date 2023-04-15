import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import AI from '../../../assets/ai.png';

const Features = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className='mb-4'>
<div className='Live__auction__top d-flex align-items-center justify-content-between'>
<h3>Live Auction</h3>
<span><Link to='/Market'> Explore Market</Link></span>
</div>
          </Col>

          <Col lg='3'>
            <div className='single__nft__card'>
              <div className='nft__img'>
                <img src={AI} alt="NFT"className='w-100'/>
              </div>

              <div className="nft__content">
              <h5 className="nft__title"> Travel Monkey Club</h5>
               <div className="creator__info-wrapper">
                <div className="creator__img">
                  <img src={AI} alt="img" className='w-50'/>
                </div>

                <div className="creator__info d-flex align-items-center justify-content-between">
                <div className="w-50">
                <h6>Created by</h6>
                  <p>Yusasive</p>
                </div>

                <div className="w-50">
                  <h6>Current Bid</h6>
                  <p>0.5ETH</p>
                </div>
                </div>
               </div>
               
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Features;
