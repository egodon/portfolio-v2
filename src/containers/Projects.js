import React from 'react';
import { withRouteData, Link } from 'react-static';
import styled from 'styled-components';
import ProjectCard from 'components/ProjectCard';

// TODO: Put links and info up here for each project
const project_image_1 = 'images/hackernews.png';
const project_image_2 = 'images/linklib.jpg';
const project_image_3 = 'images/chuchat.jpg';
const project_image_4 = 'images/scratch.png';
const project_image_5 = 'images/portfolio.png';

export default withRouteData(({ posts }) => (
  <Projects>
    <h2>PROJECTS</h2>

    <FlexContainer>
      <ProjectCard
        title="React HackerNews"
        techUsed={['React']}
        image={project_image_1}
        gitHubLink="https://github.com/egodon/portfolio"
        demoLink="https://hacker-news.gq/"
      />
      <ProjectCard image={project_image_2} />
      <ProjectCard image={project_image_3} />
      <ProjectCard image={project_image_4} />
      <ProjectCard image={project_image_5} />
    </FlexContainer>
  </Projects>
));

const Projects = styled.div`
  max-width: 180rem;
  margin: 0 auto;

  h2 {
    text-align: center;
    margin-bottom: 3rem;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  > div {
    margin: 0 3rem 6rem 3rem;
  }
`;
