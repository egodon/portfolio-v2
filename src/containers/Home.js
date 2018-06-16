import React from 'react';
import { withSiteData } from 'react-static';
import styled from 'styled-components';

const deskImage = 'images/desk.svg';

export default withSiteData(() => (
  <Home>
    <div className="text-container">
      <h1>EVAN GODON</h1>
      <h2>Front-End Web Developer</h2>
    </div>

    <img src={deskImage} width={600} alt="desk" />
  </Home>
));

const Home = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  grid-column: 3 / 5;

  .text-container {
    text-align: center;
  }

  h1 {
    font-size: 4.4rem;
    letter-spacing: 12px;
    margin-bottom: 2.5rem;
    position: relative;
    left: 4px;
  }

  h2 {
    font-size: 2.6rem;
    font-weight: 300;
    letter-spacing: 4px;
    margin-bottom: 10rem;  }
`;

export const PageTitle = styled.h2`
  text-transform: uppercase;
  font-size: var(--fs-large);
  margin-bottom: 5rem;
  text-align: center;
`;
