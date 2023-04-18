import React from "react";
import styled from "styled-components";
import sell1 from "../../../assets/ai.png";
import sell2 from "../../../assets/ai.png";
import sell3 from "../../../assets/ai.png";
import Buttons from "../../../components/Buttons";

export default function Features() {
  const data = [
    {
      image: sell1,
      head: "ZENOXIS MEGA NFT",
      title1: "Floor :",
      title2: "Bid Time :",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.",
     
    },
    {
      image: sell2,
      head: "ZENOXIS MEGA NFT",
      title1: "Floor :",
      title2: "Bid Time :",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.",
      
    },
    {
      image: sell3,
      head: "ZENOXIS MEGA NFT",
      title1: "Floor :",
      title2: "Bid Time :",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.",
     
    },
  ];
  return (
    <Section>
      <div className="title">
        <h2>Featured NFTs</h2>
      </div>
      <div className="container">
        <div className="ellipse"></div>
        <div className="content">
          {data.map(({ image, head, title1, title2, description,  }, index) => {
            return (
              <div className="createAndSell" key={index}>
                <div className="image">
                  <img src={image} alt="create and sell" />
                </div>
                <h2>{head}</h2>
                <p>{description}</p>
                <h5>{title1} <span>0.5ETH</span></h5>
                <h5>{title2} <span>22h 4m 34s</span></h5>

              </div>
            );
          })}
        </div>
        <Buttons text="Explore >" blue />
      </div>
    </Section>
  );
}

const Section = styled.section`
  margin: 0 6rem;
  margin-bottom: 5rem;

  .title {
    text-align: left;
    h2 {
      color: whitesmoke;
      font-size: 3rem;
      font-weight: 800;
      margin-bottom: 0.1rem;
    }
  }
  .container {
    background-color: transparent;
    padding: 2rem;
    border-radius: 1rem;
    position: relative;
    overflow: hidden;
    .ellipse {
      height: 30rem;
      width: 30rem;
      background-color: #ae54c27d;
      border-radius: 100%;
      filter: blur(2000px);
      opacity: 0.5;
      position: absolute;
      bottom: -30%;
      left: -10%;
      z-index: 1;
    }
    .content {
      display: flex;
      gap: 3rem;
      .createAndSell {
        background-color: #ffffff34;
        z-index: 10;
        padding: 2rem;
        display: flex;
        flex-direction: column;
        border-radius: 1rem;
        .image {
          background-color: #2d69fd;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 0.8rem;
          width: max-content;
          border-radius: 2rem;
          img {
            height: 15rem;
            background-color: transparent;
          }
        }
        h5 {
          color: whitesmoke;
          background-color: transparent;
        }
        h2 {
            background-color: transparent;
            color: whitesmoke;
            margin-bottom: 0.5rem;
            font-weight: 700;
        }
        p {
          color: whitesmoke;
          background-color: transparent;
          margin-bottom: 1rem;
        }
        span {
            background-color: transparent;
            font-weight: 750;
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin: 2rem;
    .title {
      h2 {
        font-size: 2rem;
      }
    }
    .container {
      padding: 1rem;
      .content {
        flex-direction: column;
        gap: 1rem;
        width: 21rem;
        
      }
    }
  }
`;