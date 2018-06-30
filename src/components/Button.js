import React from 'react';
import styled from 'styled-components';

const Button = ({ children, color, ...props }) => (
  <StyledButton color={color} {...props}>{children}</StyledButton>
);

const StyledButton = styled.a`
  border: 1px solid ${props => props.color};
  color: ${props => props.color};
  padding: 1rem 3.6rem;
  background: transparent;
  cursor: pointer;
  transition: all 0.1s;
  font-size: 1.4rem;
  display: flex;
  align-items: center;

  &:hover {
    opacity: 0.5;
  }
`;

export default Button;
