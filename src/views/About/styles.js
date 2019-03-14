import styled from '@emotion/styled';

export const Section = styled.section`
  width: 100%;
  height: 100%;
`;

export const Title = styled.h2`
  color: ${props => props.theme.palette.title};
  font-weight: 400;
  font-size: 1.35em;
  line-height: 1.5em;
  margin: 0 0 1em 0;
  @media (min-width: 768px) {
    font-size: 2em;
  }
  @media (min-width: 1800px) {
    font-size: 2.5em;
  }
`;

export const Summary = styled.p`
  font-size: 1em;
  line-height: 1.85em;
  color: ${props => props.theme.palette.content};
  text-align: justify;
  margin-bottom: 2em;
  & a {
    transition: color 0.2s ease-in-out, border-color 0.2s ease-in-out;
    border-bottom: dotted 1px;
    color: ${props => props.theme.palette.link};
    text-decoration: none;
  }
  @media (min-width: 1800px) {
    font-size: 1.3em;
  }
`;

export const ResumeLink = styled.a`
  text-decoration: none;
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out,
    border-color 0.2s ease-in-out;
  background-color: transparent;
  border-radius: 0.35em;
  border: solid 3px #efefef;
  color: ${props => props.theme.palette.title};
  cursor: pointer;
  display: inline-block;
  font-weight: 400;
  height: 3.15em;
  height: calc(2.75em + 6px);
  line-height: 2.75em;
  min-width: 10em;
  padding: 0 1.5em;
  text-align: center;
  width: 100%;
  &:hover {
    border-color: ${props => props.theme.palette.link};
    color: ${props => props.theme.palette.link} !important;
  }
  @media (min-width: 480px) {
    width: auto;
  }
  @media (min-width: 1800px) {
    font-size: 1.25em;
  }
`;
