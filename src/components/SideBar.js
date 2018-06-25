import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-static';
import Logo from './Logo';
import Icon, { icons } from './Icon';
import Button from './Button';
import { BREAKPOINT } from '../index.css';

const SideBar = () => (
  <Nav>
    <LogoContainer>
      <Logo size={60} />
    </LogoContainer>
    <NavList>
      <StyleNavLink exact to="/">
        <Icon icon={icons.HOME} si />
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
    </NavList>

    <FooterBottom>
      <Icons>
        <a
          href="mailto:e.godon@outlook.com"
          target="_blank"
          rel="noopener noreferrer"
          title="Email"
        >
          <Icon icon={icons.EMAIL} viewBox={bottomIconViewBox} />
        </a>
        <a
          href="https://github.com/egodon"
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub"
        >
          <Icon icon={icons.GITHUB} viewBox={bottomIconViewBox} />
        </a>
        <a
          href="https://www.linkedin.com/in/egodon"
          target="_blank"
          rel="noopener noreferrer"
          title="Linkedin"
        >
          <Icon icon={icons.LINKEDIN} viewBox={bottomIconViewBox} />
        </a>
      </Icons>
      <Button color="#eee">DOWNLOAD CV</Button>
    </FooterBottom>
  </Nav>
);

const Nav = styled.nav`
  background-color: #212121;
  height: 100vh;
  display: flex;
  flex-direction: column;
  min-height: 56rem;
  z-index: 5;
  color: var(--color-sidebar-text);

  @media (max-width: ${BREAKPOINT.MEDIUM}px) {
    justify-content: center;
    align-items: center;
    grid-row: 2 / 3;
    flex-direction: row;
    min-height: auto;
    height: auto;
    width: 100vw;
  }

  @media (max-width: ${BREAKPOINT.MEDIUM}px) {
    justify-content: space-space-evenly;
  }

  @media (max-width: ${BREAKPOINT.SMALL}px) {
    position: fixed;
    bottom: 0;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-self: center;
  padding: 0 0.7rem;
  margin: 1.2rem 0;
  position: relative;
  right: 5px;

  @media (max-width: ${BREAKPOINT.MEDIUM}px) {
    margin: 0;
    margin-right: 1rem;
    position: static;
    right: 5px;
  }
`;

const NavList = styled.div`
  align-self: stretch;

  @media (max-width: ${BREAKPOINT.MEDIUM}px) {
    display: flex;
    align-items: center;
  }
`;

const StyleNavLink = styled(NavLink)`
  padding: 1rem 2rem;
  font-size: 1.6rem;
  display: grid;
  grid-template-columns: 8rem 1fr;
  align-items: center;
  position: relative;

  @media (max-width: ${BREAKPOINT.MEDIUM}px) {
    padding: 1rem;
    grid-template-columns: auto;
  }

  &::before {
    content: '';
    position: absolute;
    left: 0;
    height: 100%;
    width: 0;
    transform: scaleY(0);
    background: linear-gradient(to bottom right, var(--color-primary-dark), var(--color-primary));
    transition: transform 0.3s, width 0.3s cubic-bezier(1, 0, 0, 1) 0.16s, background-color 0.1s;
    z-index: -1;
  }

  &.active::before,
  &:hover::before,
  &--active::before {
    width: 100%;
    transform: scaleY(1);
  }

  svg {
    grid-column: 1 / 2;
    justify-self: flex-end;
    margin-right: 2rem;

    @media (max-width: ${BREAKPOINT.MEDIUM}px) {
      justify-self: center;
      margin-right: 0;
      margin-bottom: 1rem;
    }
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

  @media (max-width: ${BREAKPOINT.MEDIUM}px) {
    flex-direction: row;
    margin: 0;
  }

  @media (max-width: ${BREAKPOINT.SMALL}px) {
    display: none;
  }
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

const bottomIconViewBox = '0 0 10 10';

export default SideBar;
