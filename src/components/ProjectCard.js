import React from 'react';
import styled from 'styled-components';
import { COLOR_RGB } from 'index.css.js';

const ProjectCard = ({
  title, subtitle, builtWith, gitHubLink, demoLink, image,
}) => (
  <Card>
    <CardOverlay className="overlay">
      <h3 className="title">{title}</h3>
      <h4 className="subtitle">{subtitle}</h4>
      <span className="built-with">Built with:</span>
      <ul>{builtWith.map(tech => <li key={tech}>{tech}</li>)}</ul>
      <a href={gitHubLink} target="_blank" rel="noopener noreferrer">
        View Code
      </a>
      <a href={demoLink} target="_blank" rel="noopener noreferrer">
        Demo
      </a>
    </CardOverlay>
    <img src={image} alt="project screenshot" />
  </Card>
);

const Card = styled.div`
  width: 48rem;
  height: 25rem;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  position: relative;
  overflow: hidden;

  &:hover {
    .overlay {
      transform: scale(1);
      opacity: 1;
    }
  }

  img {
    width: 100%;
    height: 100%;
  }
`;

const CardOverlay = styled.div`
  padding: 3rem;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: scale(1.2);
  opacity: 0;
  transition: all 0.2s;
  color: #eee;
  background-color: rgba(${COLOR_RGB.PRIMARY_DARK}, 0.9);
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);

  .title {
    font-size: 2.4rem;
    margin-bottom: .8rem;
  }

  .subtitle {
    margin-bottom: 1.8rem;
  }

  .built-with {
    display: inline-block;
    margin-bottom: 1.2rem;
  }

  ul {
    margin-bottom: 4rem;
    display: flex;
  }

  li {
    position: relative;
    margin-right: 0.8rem;
    padding-left: 1.4rem;
  }

  li::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 4px;
    --size: 6px;
    width: var(--size);
    height: var(--size);
    border-right: 2px solid #fff;
    border-bottom: 2px solid #fff;
    transform: rotate(-45deg);
  }

  a {
    border: 1px solid #fff;
    padding: 0.5rem 1rem;
    border-radius: 2px;
    margin-right: 2rem;
  }

  a:hover {
    opacity: 0.8;
  }
`;

ProjectCard.defaultProps = {
  builtWith: [],
};

export default ProjectCard;
