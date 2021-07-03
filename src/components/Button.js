import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ButtonStyle = styled.div`
  margin-top: 17rem;
  .button {
    font-size: 1.5rem;
    font-family: 'Poppins Regular';
    background-color: ${(props) =>
      props.outline ? 'transperant' : 'var(--gray-1)'};
    padding: 0.7em 3em;
    border: 2px solid var(--gray-1);
    border-radius: 3px;
    display: inline-block;
    color: ${(props) => (props.outline ? 'var(--gary-1)' : 'black')};
  }
  @media only screen and (max-width: 768px) {
    margin-top: 10%;
    .button {
      font-size: 1.8rem;
    }
  }
`;

export default function Button({
  btnText = 'Button',
  btnLink = '/',
  outline = false,
}) {
  return (
    <ButtonStyle outline={outline} className="button-wrapper">
      <Link className="button" to={btnLink}>
        {btnText}
      </Link>
    </ButtonStyle>
  );
}
