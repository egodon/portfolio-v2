import React from 'react';
import styled, { keyframes } from 'styled-components';
import { COLOR } from '../index.css';


const Button = ({ children, color, ...props }) => (
  <StyledButton color={color} {...props}>{children}</StyledButton>
);

const swoosh = keyframes`
  0%, 100% { transform: translateX(6px)}
  50% { transform: translateX(10px)}
`;

const StyledButton = styled.a`
  background: linear-gradient(to bottom right, var(--color-primary-dark), var(--color-primary));
  border-radius: 2px;
  color: ${props => props.color};
  padding: 1rem 3.2rem;
  cursor: pointer;
  transition: all 0.1s;
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    position: relative;
    left: 10px;
  }

  svg {
    transform: translateX(6px);
  }

  &:hover svg{
    animation: ${swoosh} .8s ease infinite;
  }
`;

Button.defaultProps = {
  color: '#fff',
}

export default Button;
