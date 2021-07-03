import React from 'react';
import styled from 'styled-components';

const PortfolioHeadStyle = styled.div`
  text-align: center;
  p {
    font-family: 'Poppins Regular';
    font-size: 1.5rem;
  }
  h2 {
    font-family: 'Poppins Regular';
    font-size: 4.5rem;
    margin-top: 0.5rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    text-align: center;
    p {
      margin-top: 2%;
      font-size: 1.2rem;
    }
    h2 {
      margin-top: -0.5%;
      font-size: 2.6rem;
    }
  }
`;

export default function PortfolioHead({
  heading = 'This is heading',
  description = '',
}) {
  return (
    <PortfolioHeadStyle>
      <h2>{heading}</h2>
      <p>{description}</p>
    </PortfolioHeadStyle>
  );
}
