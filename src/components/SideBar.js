import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-static';
import Logo from './Logo';
import Icon, { icons } from './Icon';
import Button from './Button';

const Nav = styled.nav`
  background-color: rgba(0, 0, 0, 0.7);
  height: 100vh;
  display: flex;
  flex-direction: column;
  z-index: 5;
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 .7rem;
`;

const NavList = styled.div`
  align-self: stretch;
`;

const StyleNavLink = styled(NavLink)`
  padding: 1rem 2rem;
  font-size: 1.6rem;
  display: grid;
  grid-template-columns: 8rem 1fr;
  align-items: center;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    height: 100%;
    width: 3px;
    background: linear-gradient(to bottom right, var(--color-primary), var(--color-primary-dark));
    transform: scaleY(0);
    transition: transform 0.3s, width 0.3s cubic-bezier(1, 0, 0, 1) 0.2s, background-color 0.1s;
    z-index: -1;
  }

  &.active::before,
  &:hover::before,
  &--active::before {
    transform: scaleY(1);
    width: 100%;
  }

  svg {
    grid-column: 1 / 2;
    justify-self: flex-end;
    margin-right: 2rem;
  }

  a {
    grid-column: 2 / 3;
  }
`;

const FooterBottom = styled.div`
  padding: 0 2.5rem;
  margin-top: auto;
  margin-bottom: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Icons = styled.div`
  display: flex;
  justify-content: center;

  svg {
    margin: 2rem 1rem;
  }

  a {
    cursor: pointer;
    transition: all 0.1s;
  }

  a:hover {
    opacity: 0.5;
  }
`;

const SideBar = () => (
  <Nav>
    <LogoContainer>
      <Logo size={100} />
    </LogoContainer>
    <NavList>
      <StyleNavLink exact to="/">
        <Icon icon={icons.HOME} />
        HOME
      </StyleNavLink>
      <StyleNavLink to="/about">
        <Icon icon={icons.USER} />
        ABOUT
      </StyleNavLink>
      <StyleNavLink to="/projects">
        <Icon icon={icons.CODE} />
        PROJECTS
      </StyleNavLink>
      <StyleNavLink to="/contact">
        <Icon icon={icons.ENVELOPE} />
        CONTACT
      </StyleNavLink>
    </NavList>

    <FooterBottom>
      <Icons>
        <a href="mailto:e.godon@outlook.com" target="_blank" title="Email">
          <Icon icon={icons.EMAIL} size={25} />
        </a>
        <a href="https://github.com/egodon" target="_blank" title="GitHub">
          <Icon icon={icons.GITHUB} size={25} />
        </a>
        <a href="https://www.linkedin.com/in/egodon" target="_blank" title="Linkedin">
          <Icon icon={icons.LINKEDIN} size={25} />
        </a>
      </Icons>
      <Button color="#eee">DOWNLOAD CV</Button>
    </FooterBottom>
  </Nav>
);

export default SideBar;
