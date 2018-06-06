import React from 'react';
import { withRouteData, Link } from 'react-static';
import styled from 'styled-components';
import ProjectCard from 'components/ProjectCard';

export default withRouteData(({ posts }) => (
  <Projects>
    <h2>PROJECTS</h2>

    <FlexContainer>
      <ProjectCard
        title={project_1_title}
        image={project_1_image}
        builtWith={project_1_builtWith}
        gitHubLink={project_1_gitHubLink}
        demoLink={project_1_demoLink}
      />
      <ProjectCard
        title={project_2_title}
        image={project_2_image}
        builtWith={project_2_builtWith}
        gitHubLink={project_2_gitHubLink}
        demoLink={project_2_demoLink}
      />
      <ProjectCard
        title={project_3_title}
        image={project_3_image}
        builtWith={project_3_builtWith}
        gitHubLink={project_3_gitHubLink}
        demoLink={project_3_demoLink}
      />
      <ProjectCard
        title={project_4_title}
        image={project_4_image}
        builtWith={project_4_builtWith}
        gitHubLink={project_4_gitHubLink}
        demoLink={project_4_demoLink}
      />
      <ProjectCard
        title={project_5_title}
        image={project_5_image}
        builtWith={project_5_builtWith}
        gitHubLink={project_5_gitHubLink}
        demoLink={project_5_demoLink}
      />
    </FlexContainer>
  </Projects>
));

const Projects = styled.div`
  max-width: 180rem;
  margin: 0 auto;

  h2 {
    text-align: center;
    margin-bottom: 5rem;
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

/* PROJECT 1 */
const project_1_title = 'React HackerNews';
const project_1_image = 'images/hackernews.png';
const project_1_builtWith = ['React'];
const project_1_gitHubLink = 'https://github.com/egodon/portfolio';
const project_1_demoLink = 'https://hacker-news.gq/';

/* PROJECT 2 */
const project_2_title = 'LinkLib';
const project_2_image = 'images/linklib.jpg';
const project_2_builtWith = ['jQuery', 'Sass', 'Express', 'MongoDB'];
const project_2_gitHubLink = 'https://github.com/egodon/link-library';
const project_2_demoLink = 'https://linklib.link/';

/* PROJECT 3 */
const project_3_title = 'ChuChat';
const project_3_image = 'images/chuchat.jpg';
const project_3_builtWith = ['JavaScript', 'Express', 'MongoDB', 'Socket.io'];
const project_3_gitHubLink = 'https://github.com/egodon/chat-app';
const project_3_demoLink = 'https://chuchat.me/';

/* PROJECT 4 */
const project_4_title = 'Scratch';
const project_4_image = 'images/scratch.png';
const project_4_builtWith = ['React', 'AWS Lambda'];
const project_4_gitHubLink = 'https://github.com/egodon/scratch';
const project_4_demoLink = 'https://scratch.netlify.com/';

/* PROJECT 5 */

const project_5_title = 'Portfolio';
const project_5_image = 'images/portfolio.png';
const project_5_builtWith = ['React-Static'];
const project_5_gitHubLink = 'https://github.com/egodon/portfolio-v2';
const project_5_demoLink = 'https://egodon.me';
