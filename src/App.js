import React from 'react';
import { Router, Link } from 'react-static';
import styled, { injectGlobal } from 'styled-components';
import { hot } from 'react-hot-loader';
import Routes from 'react-static-routes';

import AnimatedRoutes from './AnimatedRoutes';
import Background from './components/Background';
import SideBar from './components/SideBar';
import './index.css';

const AppStyles = styled.div`
  display: grid;
  grid-template-columns: [sidebar-start] 25rem [sidebar-end] 1fr;

  .content {
    font-size: 1.6rem;
    padding: 20rem 10rem;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    min-height: 114rem;
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
