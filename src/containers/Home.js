import React from 'react'
import { withSiteData } from 'react-static'
import styled from 'styled-components';
import Logo from 'components/Logo';

export default withSiteData(() => (
  <Home>
    <h1>EVAN GODON</h1>
    <h2>Front End Web Developer</h2>

    <img src="images/svg-desk.svg" alt="desk"/>
  </Home>
))


const Home = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  grid-column: 3 / 5;
  color: #222;

  h1 {
    font-size: 3.8rem;
    letter-spacing: 7px;
    margin-bottom: 2.5rem;
  }

  h2 {
    font-size: 2.6rem;
    font-weight: 300;
    letter-spacing: 4px;
    margin-bottom: 10rem;
  }
`