import React from 'react';
import { Router, Link } from 'react-static';
import styled, { injectGlobal } from 'styled-components';
import { hot } from 'react-hot-loader';
import Routes from 'react-static-routes';

import Background from './components/Background';
import SideBar from './components/SideBar';
import './index.css'

const AppStyles = styled.div`
  display: grid;
  grid-template-columns: [sidebar-start] 25rem [sidebar-end] 1fr;

  .content {
    font-size: 1.6rem;
    padding: 30rem 10rem;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
  }
`;

const App = () => (
  <Router>
    <AppStyles>
      <Background />
      <SideBar />
      <div className="content">
        <Routes />
      </div>
    </AppStyles>
  </Router>
);

export default hot(module)(App);
