import React from 'react';
import { withSiteData } from 'react-static';
import styled from 'styled-components';
import SpanAnimate from 'components/SpanAnimate';

const deskImage = 'images/desk.svg';

export default withSiteData(() => (
  <Home>
    <div className="text-container">
      <SpanAnimate delay={1.6}>
        <h1>EVAN GODON</h1>
      </SpanAnimate>
      <SpanAnimate delay={1.8}>
        <h2>Front-End Web Developer</h2>
      </SpanAnimate>
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
    height: 9rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

  }

  h1 {
    font-size: 4.4rem;
    letter-spacing: 12px;
    position: relative;
    left: 4px;
    z-index: -1;
  }

  h2 {
    font-size: 2.6rem;
    font-weight: 300;
    letter-spacing: 4px;
    padding: 2px;
  }

  img{
    margin-top: 4rem;    
  }
`;

export const PageTitle = styled.h2`
  font-size: var(--fs-large);
  margin-bottom: 5rem;
  text-align: center;
`;
