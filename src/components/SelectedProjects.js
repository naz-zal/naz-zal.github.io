import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import SectionTitle from './SectionTitle';
import AboutImg from '../assets/images/projectImg.png';

const SelectedProjectsStyles = styled.div`
  /* padding: 10rem 0; */
  h2 {
    text-transform: uppercase;
  }
  p {
    font-size: 1.5rem;
    /* margin-top: 0%; */
  }
  .container {
    margin-top: 7%;
    display: flex;
    align-items: left;
    justify-content: flex-start;
    text-align: left;
  }
  .aboutSection__left {
    flex: 1;
    margin-left: 2%;
  }
  .aboutSection__right {
    flex: 1;
    margin-right: 2%;
    img {
      border-radius: 0.5rem;
      align-items: flex-start;
      max-width: 600px;
      max-height: 400px;
    }
  }
  .section-title {
    text-align: left;
    margin: 20%;
  }
  .para {
    margin-top: 2rem;
    margin-left: 0;
  }
  .aboutSection__buttons {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
    margin-top: -5rem;
  }
  @media only screen and (max-width: 950px) {
    .aboutSection__left {
      flex: 4;
    }
    .aboutSection__right {
      flex: 3;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      text-align: center;
    }
    .aboutSection__left,
    .aboutSection__right {
      width: 100%;
    }
    .aboutSection__right {
      margin-top: 3rem;
    }
    .section-title {
      text-align: center;
    }
    .para {
      margin: 0 auto;
      margin-top: 2rem;
    }
    .aboutSection__buttons {
      flex-direction: column;
      gap: 0rem;
      margin-top: -4%;
      .button-wrapper,
      a {
        width: 90%;
        text-align: center;
      }
    }
  }
`;

export default function AboutSection() {
  return (
    <SelectedProjectsStyles>
      <div className="container">
        <div className="aboutSection__right">
          <img className="aboutImg" src={AboutImg} alt="Img" />
        </div>
        <div className="aboutSection__left">
          <SectionTitle
            subheading="Unreal Engine"
            heading="Animation Challenge"
            description="Experimented with animation and lighting using the Sequencer in Unreal Engine"
          />
          <div className="aboutSection__buttons">
            <Button btnText="Read more" btnLink="/renderer" outline />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="aboutSection__right">
          <img className="aboutImg" src={AboutImg} alt="Img" />
        </div>
        <div className="aboutSection__left">
          <SectionTitle
            subheading="Graphics Programming"
            heading="3D Rendering Engine"
            description="Built a 3D ray tracing renderer from scratch using MATLAB"
          />
          <div className="aboutSection__buttons">
            <Button btnText="Read more" btnLink="/renderer" outline />
          </div>
        </div>
      </div>
    </SelectedProjectsStyles>
  );
}
