import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  border: 1px solid ${props => props.color};
  color: ${props => props.color};
  padding: 1rem 2rem;
  background: transparent;
  cursor: pointer;
  transition: all .1s;

  &:hover {
    opacity: 0.5;
  }
`;

const Button = ({ children, color }) => <StyledButton color={color}>{children}</StyledButton>;

export default Button;
