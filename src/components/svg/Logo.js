import React from 'react';
import { COLOR } from '.../../index.css';

const Logo = ({ size }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 60"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    xmlSpace="preserve"
    style={{
      fillRule: 'evenodd',
      clipRule: 'evenodd',
      strokeLinejoin: 'round',
      strokeMiterlimit: '1.41421',
    }}
  >
    <g transform="matrix(0.96252,0,0,0.894638,6.43929e-15,0)">
      <rect x={0} y={0} width="44.951" height="17.517" style={{ fill: 'rgb(187,188,191)' }} />
    </g>
    <g transform="matrix(6.7506e-17,1.05529,-1.0447,6.12323e-17,71.3393,-1.97215e-31)">
      <rect x={0} y={0} width="44.951" height="17.517" style={{ fill: 'rgb(187,188,191)' }} />
    </g>
    <g transform="matrix(1.0447,0,0,0.894638,53.0393,0)">
      <rect x={0} y={0} width="44.951" height="17.517" style={{ fill: 'rgb(187,188,191)' }} />
    </g>
    <g transform="matrix(0.52235,0,0,0.933639,76.5197,21.4812)">
      <rect x={0} y={0} width="44.951" height="17.517" style={{ fill: 'url(#_Linear1)' }} />
    </g>
    <g transform="matrix(1.0447,0,0,0.898814,53.0393,44.2556)">
      <rect x={0} y={0} width="44.951" height="17.517" style={{ fill: 'rgb(187,188,191)' }} />
    </g>
    <g transform="matrix(0.96252,0,0,0.894638,-7.10543e-15,22.1644)">
      <rect x={0} y={0} width="44.951" height="17.517" style={{ fill: 'url(#_Linear2)' }} />
    </g>
    <g transform="matrix(0.96252,0,0,0.898814,6.43929e-15,44.2556)">
      <rect x={0} y={0} width="44.951" height="17.517" style={{ fill: 'rgb(187,188,191)' }} />
    </g>
    <g transform="matrix(1.0447,0,0,0.596847,-4.46994,18.9407)">
      <rect
        x="84.662"
        y="38.758"
        width="15.338"
        height="7.312"
        style={{ fill: 'rgb(187,188,191)' }}
      />
    </g>
    <defs>
      <linearGradient
        id="_Linear1"
        x1={0}
        y1={0}
        x2={1}
        y2={0}
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(44.9514,0,0,17.5169,0,8.75846)"
      >
        <stop offset={0} style={{ stopColor: COLOR.PRIMARY, stopOpacity: 1 }} />
        <stop offset={1} style={{ stopColor: COLOR.PRIMARY_LIGHT, stopOpacity: 1 }} />
      </linearGradient>
      <linearGradient
        id="_Linear2"
        x1={0}
        y1={0}
        x2={1}
        y2={0}
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(44.9514,0,0,17.5169,0,8.75846)"
      >
        <stop offset={0} style={{ stopColor: COLOR.PRIMARY_DARK, stopOpacity: 1 }} />
        <stop offset={1} style={{ stopColor: COLOR.PRIMARY, stopOpacity: 1 }} />
      </linearGradient>
    </defs>
  </svg>
);

Logo.defaultProps = {
  size: 60,
};

export default Logo;
