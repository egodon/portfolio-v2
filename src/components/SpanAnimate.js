import React from 'react';
import styled, { keyframes } from 'styled-components';

const SpanAnimate = ({ children, delay }) => <Span delay={delay}>{children}</Span>;

const spanWidth = keyframes`
  0% {
    width: 0;
    left: 0;
  }

  50% {
    width: 100%;
    right: 0;
  }

  100% {
    width: 0;
    right: 0;
  }
`;

const hideDelay = keyframes`
  from { visibility: hidden;}
  to { visibility: visible;}
`;

const Span = styled.span`
  display: inline-block;
  position: relative;
  z-index: 5;

  > * {
    animation: ${hideDelay} ${props => props.delay / 2}s forwards step-end;
  }

  &::before {
    content: '';
    position: absolute;
    height: 100%;
    left: 0;
    background: linear-gradient(to right, var(--color-primary-dark), var(--color-primary-light));
    animation: ${spanWidth} ${props => props.delay}s cubic-bezier(1, 0, 0, 1) forwards;
  }
`;

export default SpanAnimate;
