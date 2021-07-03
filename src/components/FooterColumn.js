import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ColumnStyle = styled.div`
  .heading {
    font-family: 'Poppins Regular';
    font-size: 2.4rem;
    margin-bottom: 2rem;
  }
  li {
    font-family: 'Poppins Regular';
    margin-bottom: 1rem;
  }
  a {
    font-family: 'Poppins Regular';
    font-size: 1.8rem;
  }
`;

export default function FooterColumn({
  heading = 'Col Heading',
  links = [
    {
      type: 'Link',
      title: 'Home',
      path: '/home',
    },
    {
      type: 'Link',
      title: 'About',
      path: '/about',
    },
  ],
}) {
  return (
    <ColumnStyle>
      <h2 className="heading">{heading}</h2>
      <ul>
        {links.map((item, index) => (
          <li key={index}>
            {item.type === 'Link' ? (
              <Link to={item.path}>{item.title}</Link>
            ) : (
              <a href={item.path} target="_blank" rel="noreferrer">
                {item.title}
              </a>
            )}
          </li>
        ))}
      </ul>
    </ColumnStyle>
  );
}
