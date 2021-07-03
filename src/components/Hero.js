import React from 'react';
import styled from 'styled-components';
import HeroImg from '../assets/images/hero.png';
import PText from './PText';
import Button from './Button';

const HeroStyles = styled.div`
  .hero {
    /* height: 100vh; */
    margin-bottom: -7%;
    min-height: 800px;
    width: 100%;
    /* text-align: center; */
    text-align: left;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  .hero_heading {
    font-size: 2rem;
    /* margin-bottom: -4rem; */
    position: relative;
    span {
      display: inline-block;
      width: 100%;
      font-family: 'Poppins Regular';
    }
    .hero_name {
      font-size: 4rem;
    }
  }
  .hero_img {
    max-width: 600px;
    width: 100%;
    height: 500px;
    /* margin: 0 auto; */
    margin-left: auto;
    margin-top: -15%;
  }
  .hero_info {
    /* margin-top: -18rem; */
    margin-top: -25%;
    margin-right: 60%;
  }

  @media only screen and (max-width: 768px) {
    .hero {
      min-height: 750px;
      text-align: center;
      margin-top: 10%;
    }
    .hero_heading {
      font-size: 1.4rem;
      margin-bottom: 3rem;
      .hero_name {
        font-size: 4rem;
      }
    }
    .hero_img {
      height: 300px;
      margin-top: -18%;
    }
    .hero_info {
      margin-top: 3rem;
      margin-right: 0;
    }
  }
  @media only screen and (max-width: 320px) {
    .hero_heading {
      .hero_name {
        font-size: 2.5rem;
      }
    }
  }
`;

export default function Hero() {
  return (
    <HeroStyles>
      <div className="hero">
        <div className="container">
          <h1 className="hero_heading">
            <span>Hello! I am</span>
            <span className="hero_name">Nazzal Naseer</span>
          </h1>
          <div className="hero_img">
            <img src={HeroImg} alt="" />
          </div>
          <div className="hero_info">
            <PText>Electrical Engineer | Real-time 3D | Writer</PText>
            <Button btnText="About Me" btnLink="/about" />
          </div>
        </div>
      </div>
    </HeroStyles>
  );
}
