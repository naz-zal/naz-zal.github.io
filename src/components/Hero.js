// import React from 'react';
// import styled from 'styled-components';
// import HeroImg from '../assets/images/hero.png';
// import PText from './PText';
// import Button from './Button';

// const HeroStyles = styled.div`
//   .hero {
//     /* height: 100vh; */
//     margin-bottom: -7%;
//     min-height: 800px;
//     width: 100%;
//     /* text-align: center; */
//     text-align: left;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     position: relative;
//   }
//   .hero_heading {
//     font-size: 2rem;
//     /* margin-bottom: -4rem; */
//     position: relative;
//     span {
//       display: inline-block;
//       width: 100%;
//       font-family: 'Poppins Regular';
//     }
//     .hero_name {
//       font-size: 4rem;
//     }
//   }
//   .hero_img {
//     max-width: 600px;
//     width: 100%;
//     height: 500px;
//     /* margin: 0 auto; */
//     margin-left: auto;
//     margin-top: -15%;
//   }
//   .hero_info {
//     /* margin-top: -18rem; */
//     margin-top: -25%;
//     margin-right: 60%;
//   }

//   @media only screen and (max-width: 768px) {
//     .hero {
//       min-height: 750px;
//       text-align: center;
//       margin-top: 10%;
//     }
//     .hero_heading {
//       font-size: 1.4rem;
//       margin-bottom: 3rem;
//       .hero_name {
//         font-size: 4rem;
//       }
//     }
//     .hero_img {
//       height: 300px;
//       margin-top: -18%;
//     }
//     .hero_info {
//       margin-top: 3rem;
//       margin-right: 0;
//     }
//   }
//   @media only screen and (max-width: 320px) {
//     .hero_heading {
//       .hero_name {
//         font-size: 2.5rem;
//       }
//     }
//   }
// `;

// export default function Hero() {
//   return (
//     <HeroStyles>
//       <div className="hero">
//         <div className="container">
//           <h1 className="hero_heading">
//             <span>Hello! I am</span>
//             <span className="hero_name">Nazzal Naseer</span>
//           </h1>
//           <div className="hero_img">
//             <img src={HeroImg} alt="" />
//           </div>
//           <div className="hero_info">
//             <PText>Electrical Engineer | Real-time 3D | Writer</PText>
//             <Button btnText="About Me" btnLink="/about" />
//           </div>
//         </div>
//       </div>
//     </HeroStyles>
//   );
// }

import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import SectionTitle from './SectionTitle';
import HeroImg from '../assets/images/hero.png';

const SelectedProjectsStyles = styled.div`
  padding: 10rem 0;
  .IAM {
    font-family: 'Poppins Regular';
    font-size: 1.9rem;
    margin-bottom: -2%;
  }
  .container {
    margin-top: 2%;
    display: flex;
    align-items: left;
    justify-content: flex-start;
    text-align: left;
    /* min-height: 880px; */
  }
  .aboutSection__left {
    flex: 1;
    /* margin-left: 2%; */
    margin-top: 8%;
  }
  .aboutSection__right {
    flex: 1;
    img {
      border-radius: 0.5rem;
      align-items: flex-start;
      max-width: 600px;
      max-height: 500px;
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
      flex-direction: row;
      text-align: center;
    }
    h2 {
      text-align: left;
    }
    p{
      text-align: left;
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
      /* flex-direction: row;
      gap: 0rem;
      .button-wrapper,
      a {
        width: 67%;
        text-align: left; 
      } */
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 0rem;
      a {
        font-size: 0.8rem;
        padding-top: 10%;
        padding-bottom: 10%;
        padding-left: 50%;
        padding-right: 50%;
      }
    }
  }
`;

export default function AboutSection() {
  return (
    <SelectedProjectsStyles>
      <div className="container">
        <div className="aboutSection__left">
          <h2 className="IAM">Hello! I am</h2>
          <SectionTitle
            subheading=""
            heading="Nazzal Naseer"
            description="Electrical Engineer | Interactive 3D Developer | Writer"
          />
          <div className="aboutSection__buttons">
            <Button btnText="About" btnLink="/about" />
          </div>
        </div>
        <div className="aboutSection__right">
          <img className="aboutImg" src={HeroImg} alt="Img" />
        </div>
      </div>
    </SelectedProjectsStyles>
  );
}
