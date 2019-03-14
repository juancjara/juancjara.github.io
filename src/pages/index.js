import React from 'react';
import styled from '@emotion/styled';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Projects from '../views/Projects';
import About from '../views/About';

const Container = styled.main`
  width: 100%;
  padding: 2.25em 1.5em 0.25em 1.5em;
  @media (min-width: 768px) {
    padding: 6em 4em;
  }
  @media (min-width: 1024px) {
    margin-left: 35%;
    padding: 6em 3em 3em 3em;
    width: 65%;
  }
  @media (min-width: 1280px) {
    padding: 8em 8em 4em 4em;
  }
`;

const IndexPage = ({ data: { dataYaml, allProjectsYaml } }) => {
  return (
    <Layout>
      <Container id="about">
        <About {...dataYaml} />
        <Projects projects={allProjectsYaml.edges.map(e => e.node)} />
      </Container>
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query AllQuery {
    dataYaml {
      name
      resume
      summary
    }
    allProjectsYaml {
      edges {
        node {
          name
          source
          preview
          summary
          tags {
            id
            color
            label
          }
        }
      }
    }
  }
`;
