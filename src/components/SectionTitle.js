import React from 'react';
import styled from 'styled-components';

const SectionTitleStyle = styled.div`
  text-align: left;
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

export default function SectionTitle({
  subheading = 'This is subheading',
  heading = 'This is heading',
  description = '',
}) {
  return (
    <SectionTitleStyle>
      <p>{subheading}</p>
      <h2>{heading}</h2>
      <p>{description}</p>
    </SectionTitleStyle>
  );
}
