import React, { Fragment } from 'react';
import styled from 'styled-components';

import { COLOR } from '../index.css';

const Div = styled.div`
  position: absolute;
  top: 0;
  left: 0%;
  z-index: 0;
  width: 100vw;
`;

export default () => (
  <Fragment>
    <Div>
      <svg
        width="100%"
        height="20%"
        viewBox="0 0 1280 140"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <linearGradient id="BGgradient">
          <stop offset="0%" stopColor={COLOR.PRIMARY_DARK} />
          <stop offset="100%" stopColor={COLOR.PRIMARY_LIGHT} />
        </linearGradient>
        <g fill="url(#BGgradient)">
          <path d="M0 0s573.08 140 1280 140V0z" />
        </g>
      </svg>
    </Div>
  </Fragment>
);
