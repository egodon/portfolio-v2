import React from 'react';
import { Router } from 'react-static';
import styled from 'styled-components';
import { hot } from 'react-hot-loader';
import Routes from 'react-static-routes';

import AnimatedRoutes from './AnimatedRoutes';
import Background from './components/Background';
import SideBar from './components/SideBar';
import './index.css';

const AppStyles = styled.div`
  display: grid;
  grid-template-columns: [sidebar-start] 27rem [sidebar-end] 1fr;

  .content {
    font-size: 1.6rem;
    padding: 12% 0;
    min-height: 114rem;
    overflow-Y: auto;
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
