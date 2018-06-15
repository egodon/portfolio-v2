import React from 'react';
import { COLOR } from '../index.css';

const Logo = ({ size }) => (
  <div>
    <svg
      id="Layer_1"
      x="0px"
      y="0px"
      width={size}
      height={size}
      fill="transparent"
      viewBox="0 0 258 258"
      xmlSpace="preserve"
    >
      <linearGradient id="Gradient1">
        <stop offset="0%" stopColor={COLOR.PRIMARY_DARK} />
        <stop offset="100%" stopColor={COLOR.PRIMARY} />
      </linearGradient>
      <linearGradient id="Gradient2">
        <stop offset="0%" stopColor={COLOR.PRIMARY} />
        <stop offset="100%" stopColor={COLOR.PRIMARY_LIGHT} />
      </linearGradient>

      <defs id="defs3703" />
      <rect x="30.64469" y="59.80114" width="199.776" height="139.864" id="rect3680" />
      <rect
        x="44.89069"
        y="116.00114"
        width="79.918999"
        height="25.455999"
        id="rect3682"
        fill="url(#Gradient1)"
      />
      {/* Left Rectangle */}
      <rect
        x="173.29268"
        y="116.31713"
        width="42.109001"
        height="25.457001"
        id="rect3684"
        fill="url(#Gradient2)"
      />
      {/* Right Rectangle */}
      <rect
        x="44.89069"
        y="74.267136"
        width="79.918999"
        height="25.455999"
        id="rect3686"
        fill="#bbbcbf"
      />
      <rect
        x="134.93768"
        y="74.267136"
        width="81.007004"
        height="25.455999"
        id="rect3688"
        fill="#bbbcbf"
      />
      <rect
        x="44.89069"
        y="159.21715"
        width="79.918999"
        height="25.455999"
        id="rect3690"
        fill="#bbbcbf"
      />
      <rect
        x="135.47969"
        y="159.21715"
        width="79.921997"
        height="25.455999"
        id="rect3692"
        fill="#bbbcbf"
      />
      <rect
        x="134.93768"
        y="74.267136"
        width="27.233"
        height="110.406"
        id="rect3694"
        fill="#bbbcbf"
      />
      <rect
        x="188.16968"
        y="148.56514"
        width="27.232"
        height="35.556"
        id="rect3696"
        fill="#bbbcbf"
      />
    </svg>
  </div>
);

Logo.defaultProps = {
  size: 60,
};

export default Logo;
