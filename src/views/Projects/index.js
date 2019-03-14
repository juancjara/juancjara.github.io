import React from 'react';

import Project from '../../components/ProjectItem';
import { Section, Title, Wrapper, Column } from './styles';

const isOdd = (_, i) => i % 2 === 0;
const isEven = (_, i) => !isOdd(_, i);

const ProjectsSection = ({ projects }) => (
  <Section id="projects">
    <Title>Projects</Title>
    <Wrapper>
      <Column showMobile>
        {projects.map((project, i) => (
          <Project key={i} {...project} />
        ))}
      </Column>
      <Column>
        {projects.filter(isOdd).map((project, i) => (
          <Project key={i} {...project} />
        ))}
      </Column>
      <Column>
        {projects.filter(isEven).map((project, i) => (
          <Project key={i} {...project} />
        ))}
      </Column>
    </Wrapper>
  </Section>
);

export default ProjectsSection;
