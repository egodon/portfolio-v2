import React from 'react';
import styled from 'styled-components';
import { hexToRgb, COLOR } from 'index.css.js';

const ProjectCard = ({
  title, techUsed, gitHubLink, demoLink, image,
}) => (
  <Card>
    <CardOverlay className="overlay">
      <h3>{title}</h3>
      {techUsed.map(tech => <li>{tech}</li>)}
      <a href={gitHubLink}>View Code</a>
      <a href={demoLink} >Demo</a>
    </CardOverlay>
    <img src={image} alt="project screenshot" />
  </Card>
);

const Card = styled.div`
  width: 48rem;
  height: 25rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
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
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: scale(1.2);
  opacity: 0;
  transition: all 0.2s;
  color: #eee;
  background: linear-gradient(
    to bottom right,
    rgba(${hexToRgb(COLOR.PRIMARY_DARK)}, 0.8),
    rgba(${hexToRgb(COLOR.PRIMARY_LIGHT)}, 0.4)
  );
`;

ProjectCard.defaultProps = {
  techUsed: [],
};

export default ProjectCard;
