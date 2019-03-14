import React from 'react';
import Helmet from 'react-helmet';
import { Global, css } from '@emotion/core';
import styled from '@emotion/styled';
import { StaticQuery, graphql } from 'gatsby';
import Menu from '../Menu';

import Footer from '../Footer';
import Header from '../Header';

import normalize from '../../normalize';

const globalStyles = css`
  ${normalize}
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    font-family: 'Source Sans Pro', Helvetica, sans-serif;
    font-weight: 400;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    font-size: 16px;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const TemplateWrapper = ({ children }) => (
  <StaticQuery
    query={query}
    render={({ site, dataYaml, headerImage, bgImage, ...rest }) => (
      <>
        <Container>
          <Menu />
          <Helmet title={site.siteMetadata.title} />
          <Global styles={globalStyles} />
          <Header {...dataYaml} avatar={headerImage} bgImage={bgImage} />
          {children}
          <Footer links={dataYaml.socialLinks} />
        </Container>
      </>
    )}
  />
);

export default TemplateWrapper;

export const query = graphql`
  query LayoutQuery {
    headerImage: file(relativePath: { eq: "avatar.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 150) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    bgImage: file(relativePath: { eq: "bg.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1274) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
    dataYaml {
      name
      description
      socialLinks {
        icon
        url
        samePage
      }
    }
  }
`;
