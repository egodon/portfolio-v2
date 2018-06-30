import React from 'react';
import styled from 'styled-components';
import { Head } from 'react-static';
import { PageTitle } from './Home';
import { BREAKPOINT } from '../index.css';

const personAtDesk = 'images/person-at-desk.svg';
const code = 'images/code.svg';
const paintbrush = 'images/paintbrush.svg';
const lines = 'images/gray-lines.svg';
const fuelGauge = 'images/fuel-gauge.svg';

export default () => (
  <About>
    <Head>
      <title>Evan Godon | About</title>
    </Head>
    <PageTitle>About</PageTitle>
    <div className="main">
      <img src={personAtDesk} width={300} alt="person at a desk" className="desk-svg" />
      <p className="about-text">
        I'm a front-end web developer who loves creating user interfaces and smooth user
        experiences. Currently, I enjoy working in the React ecosystem but I am always ready to
        learn more and take on new challenges.
      </p>
    </div>
    <Icons>
      <div>
        <img src={code} alt="code" />
        <p>I strive to write clean readable code that will stay maintainable.</p>
      </div>
      <div>
        <img src={paintbrush} alt="paintbrush" />
        <p>I aim to build beautiful responsive web pages.</p>
      </div>
      <div>
        <img src={fuelGauge} alt="fuel-gauge" />
        <p>I optimize my code and follow best practices to ensure fast load times.</p>
      </div>
      <div>
        <img src={lines} alt="lines" />
        <p>I will forever be learning and improving my skills.</p>
      </div>
    </Icons>
  </About>
);

const About = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .main {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    max-width: 60rem;
    margin-bottom: 5rem;
  }

  .desk-svg {
    margin-bottom: 2rem;
  }
`;

const Icons = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  justify-items: center;
  width: 100%;
  max-width: 100rem;

  @media (max-width: ${BREAKPOINT.SMALL}px) {
    grid-template-columns: auto;
    grid-template-rows: repeat(1fr, 4);
  }

  div {
    width: 34rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

 

  img {
    max-width: 10rem;
  }

  p {
    margin-left: 1.2rem;
    text-align: left;
  }
`;
