import React from 'react';
import { withSiteData, Head } from 'react-static';
import styled from 'styled-components';
import SpanAnimate from 'components/SpanAnimate';
import DeskSVG from 'components/svg/DeskSVG';
import { BREAKPOINT } from '../index.css';

export default withSiteData(() => (
  <Home>
    <Head><title>Evan Godon | Home</title></Head>
    <div className="header-container">
      <SpanAnimate delay={1.6}>
        <h1>EVAN GODON</h1>
      </SpanAnimate>
      <SpanAnimate delay={1.8}>
        <h2>Front-End Web Developer</h2>
      </SpanAnimate>
    </div>
    <DeskSVG />
  </Home>
));

const Home = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  grid-column: 3 / 5;

  @media (max-width: ${BREAKPOINT.SMALL}px) {
    margin-top: 10rem;
  }

  .header-container {
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

    @media (max-width: ${BREAKPOINT.SMALL}px) {
      letter-spacing: 5px;
    }
  }

  h2 {
    font-size: 2.6rem;
    font-weight: 300;
    letter-spacing: 4px;
    padding: 2px;
  }

  svg {
    margin-top: 4rem;
    width: 60rem;

    @media (max-width: ${BREAKPOINT.SMALL}px) {
      margin-top: 6rem;
      width: 40rem;
    }
  }
`;

export const PageTitle = styled.h2`
  font-size: var(--fs-large);
  margin-bottom: 5rem;
  text-align: center;
`;
