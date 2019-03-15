import React from 'react';

import { Section, Summary, Title, ResumeLink } from './styles';

const AboutSection = ({ summary, resume }) => (
  <Section>
    <Title>About me</Title>
    <Summary dangerouslySetInnerHTML={{ __html: summary }} />
    <ResumeLink href={resume} target="_blank" rel="noopener noreferrer">
      Resume
    </ResumeLink>
  </Section>
);

export default AboutSection;
