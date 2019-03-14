import React from 'react';

import { Section, Summary, Title, ResumeLink } from './styles';

const AboutSection = ({ summary }) => (
  <Section>
    <Title>About me</Title>
    <Summary dangerouslySetInnerHTML={{ __html: summary }} />
    <ResumeLink href="#" target="_blank" rel="noopener noreferrer">
      Resume
    </ResumeLink>
  </Section>
);

export default AboutSection;
