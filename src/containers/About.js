import React from 'react';
import styled from 'styled-components';

const personAtDesk = 'images/person-at-desk.svg';
const code = 'images/code.svg';
const paintbrush = 'images/paintbrush.svg';
const lines = 'images/gray-lines.svg';

export default () => (
  <About>
    <h2>About</h2>
    <div className="main">
      <img src={personAtDesk} width={300} alt="person at a desk" className="desk-svg" />
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident id explicabo ab
        laudantium eveniet dolorem hic itaque numquam vitae enim!
      </p>
    </div>
    <Icons>
      <div>
        <img src={code} alt="code" />
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae, aut.</p>
      </div>
      <div>
        <img src={paintbrush} alt="paintbrush" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, explicabo.</p>
      </div>
      <div>
        <img src={lines} alt="lines" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, illum.</p>
      </div>
    </Icons>
  </About>
);

const About = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    text-transform: uppercase;
    font-size: var(--fs-large);
    margin-bottom: 5rem;
  }

  .main {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    max-width: 40rem;
    margin-bottom: 5rem;
  }

  .desk-svg {
    margin-bottom: 2rem;
  }
`;

const Icons = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  div {
    max-width: 20rem;
    margin: 0 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  img {
    max-width: 15rem;
  }

  p {
    text-align: center;
  }
`;
