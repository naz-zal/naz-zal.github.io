import React from 'react';
import styled from 'styled-components';
import PText from '../components/PText';
import Button from '../components/Button';
import AboutInfoItem from '../components/AboutInfoItem';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;
  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
    p {
      font-family: 'Poppins Regular';
    }
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;

export default function About() {
  return (
    <>
      <AboutPageStyles>
        <div className="container">
          <div className="top-section">
            <div className="left">
              <p className="about__subheading">
                I am <span>Nazzal Naseer</span>
              </p>
              <h2 className="about__heading">Interactive 3D experiential designer as well as an electrical engineering student.</h2>
              <div className="about__info">
                <PText>
                  I'm an electrical engineering student at the University of Alberta. While this is the path that I chose for my 
                  traditional education journey, I spend the rest of my time specializing in creating software experiences 
                  specifically for an interactive 3D digital space.  
                  <br /> <br />
                  With a background in machine learning, I wanted to branch out and explore different ways of telling stories. 
                  With proficiency in programming and a passion for design, I work to build experiences for people that augment 
                  our regular lives. What pushes me, ultimately, is celebrating the relationships we have by being able to 
                  create memories with them. 
                  <br />
                  <br />
                  My vision is to one day be able to bring telepresence into our reality, for the sole reason of being able to 
                  create memories with those we love. 
                </PText>
              </div>
              <Button btnText="Download CV" btnLink="#" />
            </div>
          </div>
          <div className="about__info__items">
            <div className="about__info__item">
              <h1 className="about__info__heading">Education</h1>

              <AboutInfoItem
                title="Diploma"
                items={['Andrew Ng\'s Specialization in Deep Learning on Coursera']}
              />
              <AboutInfoItem
                title="University"
                items={['University of Alberta']}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">My Skills</h1>

              <AboutInfoItem
                title="Programming"
                items={['Python', 'C', 'C++', 'Javascript', 'MATLAB']}
              />
              <AboutInfoItem
                title="Real-time 3D"
                items={['Unreal Engine']}
              />
              <AboutInfoItem
                title="Design"
                items={['Illustrator', 'Adobe Xd', 'Figma']}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">Experiences</h1>

              <AboutInfoItem
                title="2018"
                items={['Machine Learning Intern at Searchie, Dubai']}
              />
              <AboutInfoItem
                title="2017"
                items={['Full stack web and app developer at KAAD, Dubai']}
              />
            </div>
          </div>
        </div>
      </AboutPageStyles>
    </>
  );
}
