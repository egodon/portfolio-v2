import React from 'react';

const ExperienceLine = () => (
  <svg
    width="6rem"
    height="100%"
    viewBox="0 0 100 400"
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
    <path
      d="M46.077,100.513C20.312,98.496 0,76.783 0,50.333C0,22.553 22.404,0 50,0C77.596,0 100,22.553 100,50.333C100,76.783 79.688,98.496 53.923,100.513L53.923,400L46.077,400L46.077,100.513Z"
      style={{ fill: 'url(#_Linear1)' }}
    />
    <clipPath id="_clip2">
      <path d="M46.077,100.513C20.312,98.496 0,76.783 0,50.333C0,22.553 22.404,0 50,0C77.596,0 100,22.553 100,50.333C100,76.783 79.688,98.496 53.923,100.513L53.923,400L46.077,400L46.077,100.513Z" />
    </clipPath>
    <g clipPath="url(#_clip2)">
      <g id="location" transform="matrix(2.77984,0,0,3.33793,50,54.1841)">
        <g transform="matrix(1,0,0,1,-10,-10)">
          <clipPath id="_clip3">
            <rect x={0} y={0} width={20} height={20} />
          </clipPath>
          <g clipPath="url(#_clip3)">
            <path
              d="M10,20C10,20 3,10.87 3,7C3,3.16 6.16,0 10,0C13.84,0 17,3.16 17,7C17,10.87 10,20 10,20ZM10,9C11.097,9 12,8.097 12,7C12,5.903 11.097,5 10,5C8.903,5 8,5.903 8,7C8,8.097 8.903,9 10,9Z"
              style={{ fill: 'white', fillRule: 'nonzero' }}
            />
          </g>
        </g>
      </g>
    </g>
    <defs>
      {/* <linearGradient
        id="_Linear1"
        x1={0}
        y1={0}
        x2={1}
        y2={0}
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(7.10751e-15,-162.945,116.074,9.97753e-15,50,384.086)"
      >
        <stop offset={0} style={{ stopColor: 'rgb(235,235,235)', stopOpacity: 0 }} />
        <stop offset={1} style={{ stopColor: 'rgb(33,150,243)', stopOpacity: 1 }} />
      </linearGradient> */}
    </defs>
  </svg>
);

export default ExperienceLine;
