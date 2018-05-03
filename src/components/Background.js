import React from 'react';
import Trianglify from 'trianglify';
import styled from 'styled-components';

const screenSize = (() => ({
  width: window.innerWidth,
  height: window.innerHeight,
}))();

const pattern = Trianglify({
  ...screenSize,
  cell_size: 200,
  palette: Trianglify.colorbrewer,
  x_colors: 'Greys',
});

const Div = styled.div`
  position: absolute;
  top: 0%;
  left: 0%;
  z-index: -1;

  &::after {
    content: '';
    position: absolute;
    top: 0%;
    left: 0%;
    width: 100vw;
    height: 100vh;
    /* background-color: rgba(0, 0, 0, 0.6); */
  }
`;

export default () => (
  <Div>
    {/* <svg {...screenSize} dangerouslySetInnerHTML={{ __html: pattern.svg().innerHTML }} /> */}
  </Div>
);
