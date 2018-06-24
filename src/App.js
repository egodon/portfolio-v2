import React from 'react';
import { Router } from 'react-static';
import styled from 'styled-components';
import { hot } from 'react-hot-loader';
import Routes from 'react-static-routes';

import AnimatedRoutes from './AnimatedRoutes';
import Background from './components/Background';
import SideBar from './components/SideBar';
import { BREAKPOINT } from './index.css';

const AppStyles = styled.div`
  display: grid;
  grid-template-columns: [sidebar-start] 27rem [sidebar-end] 1fr;
  height: 100vh;
  width: 100vw;

  @media (max-width: ${BREAKPOINT.MEDIUM}px) {
    grid-template-columns: auto;
    grid-template-rows: 1fr 10rem;
  }

  .content {
    font-size: 1.6rem;
    padding: 14% 0;
    overflow-y: auto;
    height: 100%;

    @media (max-width: ${BREAKPOINT.MEDIUM}px) {
      grid-row: 1 / 2;
    }

  }

  .animated-routes-container {
    position: relative;
    grid-column: 1 / 7;
  }
`;

const App = () => (
  <Router>
    <AppStyles>
      <Background />
      <SideBar />
      <div className="content">
        <Routes component={AnimatedRoutes} />
      </div>
    </AppStyles>
  </Router>
);

export default hot(module)(App);
