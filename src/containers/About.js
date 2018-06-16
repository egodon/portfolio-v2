import React from 'react';
import styled from 'styled-components';
import { PageTitle } from './Home';

const personAtDesk = 'images/person-at-desk.svg';
const code = 'images/code.svg';
const paintbrush = 'images/paintbrush.svg';
const lines = 'images/gray-lines.svg';
const fuelGauge = 'images/fuel-gauge.svg';

export default () => (
  <About>
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
        <p>I aim to build beautiful response web pages.</p>
      </div>
      <div>
        <img src={fuelGauge} alt="fuel-gauge" />
        <p>I optimize my code to ensure fast load times.</p>
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
