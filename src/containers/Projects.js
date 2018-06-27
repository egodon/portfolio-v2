import React from 'react';
import { withRouteData } from 'react-static';
import styled from 'styled-components';
import ProjectCard from 'components/ProjectCard';
import { PageTitle } from './Home';

export default withRouteData(() => (
  <Projects>
    <PageTitle>Projects</PageTitle>

    <FlexContainer>
      {projects.map(project => (
        <ProjectCard
          key={project.title}
          title={project.title}
          image={project.image}
          builtWith={project.builtWith}
          gitHubLink={project.gitHubLink}
          demoLink={project.demoLink}
        />
      ))}
    </FlexContainer>
  </Projects>
));

const Projects = styled.div`
  max-width: 180rem;
  margin: 0 auto;
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  > div {
    margin: 0 3rem 6rem 3rem;
  }
`;

/* PROJECT 1 */
const projects = [
  /* PROJECT 1 */
  {
    title: 'React HackerNews',
    image: 'images/hackernews.png',
    builtWith: ['React'],
    gitHubLink: 'https://github.com/egodon/react-hacker-news',
    demoLink: 'https://hacker-news.gq/',
  },
  /* PROJECT 2 */
  {
    title: 'LinkLib',
    image: 'images/linklib.jpg',
    builtWith: ['jQuery', 'Sass', 'Express', 'MongoDB'],
    gitHubLink: 'https://github.com/egodon/link-library',
    demoLink: 'https://linklib.link/',
  },
  /* PROJECT 3 */
  {
    title: 'ChuChat',
    image: 'images/chuchat.jpg',
    builtWith: ['JavaScript', 'Express', 'MongoDB', 'Socket.io'],
    gitHubLink: 'https://github.com/egodon/chat-app',
    demoLink: 'https://chuchat.me/',
  },
  /* PROJECT 4 */
  {
    title: 'Scratch',
    image: 'images/scratch.png',
    builtWith: ['React', 'AWS Lambda'],
    gitHubLink: 'https://github.com/egodon/scratch',
    demoLink: 'https://scratch.netlify.com/',
  },
  /* PROJECT 5 */
  {
    title: 'Portfolio',
    image: 'images/portfolio.png',
    builtWith: ['React-Static'],
    gitHubLink: 'https://github.com/egodon/portfolio-v2',
    demoLink: 'https://egodon.me',
  },
];
