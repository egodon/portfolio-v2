import React from 'react';
import styled from 'styled-components';
import { Head } from 'react-static';
import { PageTitle } from './Home';
import Icon, { icons } from '../components/svg/Icon';
import { COLOR, BREAKPOINT } from '../index.css';

const ExperiencePage = () => (
  <Experience>
    <Head>
      <title>Evan Godon | Experience</title>
    </Head>
    <PageTitle>Experience</PageTitle>
    <JobContainer>
      <p className="date">January 2018 - Present</p>
      <img src="images/portfolio-job-line.svg" alt="line" />
      <Info>
        <h5>Bmad</h5>
        <h6>Front-End Web Developer</h6>
        <p>
          <span className="bold">Tech stack:</span> React, Redux, Redux-Saga, React 360,
          Styled-Components, Jest, Django, Flask, MySQL
        </p>
        <ul>
          <li>
            <Icon
              icon={icons.CHEVERON_RIGHT}
              fillColor={COLOR.PRIMARY}
              className="right-arrow"
              viewBox={viewBox}
            />
            Collaborated with team members using the Scrum framework and sprint planning.
          </li>
          <li>
            <Icon
              icon={icons.CHEVERON_RIGHT}
              fillColor={COLOR.PRIMARY}
              className="right-arrow"
              viewBox={viewBox}
            />
            Responsible for the front-end infrastructure of a web and electron application using
            React.
          </li>
          <li>
            <Icon
              icon={icons.CHEVERON_RIGHT}
              fillColor={COLOR.PRIMARY}
              className="right-arrow"
              viewBox={viewBox}
            />
            Developed the UI while implementing the design specifications provided by the UX/UI
            designer.
          </li>
          <li>
            <Icon
              icon={icons.CHEVERON_RIGHT}
              fillColor={COLOR.PRIMARY}
              className="right-arrow"
              viewBox={viewBox}
            />
            Created many reusable React components and helped grow the UI library of the
            application.
          </li>
          <li>
            <Icon
              icon={icons.CHEVERON_RIGHT}
              fillColor={COLOR.PRIMARY}
              className="right-arrow"
              viewBox={viewBox}
              s
            />
            Developed the registration and login pages and built the UI for a virtual reality
            platform using React 360.
          </li>
        </ul>
      </Info>
    </JobContainer>
  </Experience>
);

const viewBox = '0 -2 24 24';

const Experience = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1.8rem;
`;

const JobContainer = styled.div`
  display: grid;
  grid-template-columns: 16rem 6rem 1fr;
  grid-column-gap: 2.1rem;

  @media (max-width: ${BREAKPOINT.SMALL}px) {
    grid-template-columns: 8rem 1fr;

    .date {
      grid-column: 1 / -1;
      margin-bottom: 1.8rem;
      justify-self: center;
    }
  }

  .date {
    margin-top: 2.2rem;
    font-size: 1.4rem;
  }
`;

const Info = styled.div`
  padding-top: 2.1rem;

  h5 {
    font-size: 1.8rem;
    font-weight: 600;
    margin-bottom: 0.6rem;
  }
  h6 {
    font-size: 1.7rem;
    margin-bottom: 1.6rem;
  }

  p {
    margin-bottom: 1.2rem;
  }

  .bold {
    font-weight: bold;
  }

  li {
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    position: relative;
  }

  .right-arrow {
    position: absolute;
    left: -20px;
  }
`;
export default ExperiencePage;
