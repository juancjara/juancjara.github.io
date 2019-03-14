import styled from '@emotion/styled';

import { space, width, theme } from '../../utils/styles';

export const Box = styled.div`
  ${width} ${space};
`;

export const Title = styled.h3`
  font-size: 1.1em;
  font-weight: 400;
  line-height: 1em;
  margin: 0 0 0.3em 0;
  color: rgb(120, 120, 120);
  @media (min-width: 1800px) {
    font-size: 1.4em;
  }
`;

export const Summary = styled.p`
  font-size: 0.9em;
  line-height: 1.2em;
  text-align: justify;
  margin-top: 0.5em;
  color: ${theme.palette.content};
  & a {
    transition: color 0.2s ease-in-out, border-color 0.2s ease-in-out;
    border-bottom: dotted 1px;
    color: #49bf9d;
    text-decoration: none;
  }
  @media (min-width: 1800px) {
    font-size: 1.1em;
    line-height: 1.5em;
  }
`;

export const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -5px;
  margin-right: -5px;
  * {
    margin: 2px 5px;
  }
`;

export const Chip = styled.div`
  color: white;
  background-color: ${props => props.bg};
  border-radius: 10px;
  padding: 0px 12px;
  font-size: 0.7em;
  line-height: 1.5em;
  @media (min-width: 1800px) {
    font-size: 0.9em;
  }
`;

export const Icon = styled.a`
  margin: 0 5px;
  text-decoration: none;
  path {
    transition: fill 0.2s ease-in-out, border-color 0.2s ease-in-out;
  }
  & svg:hover path {
    fill: ${theme.palette.link};
  }
`;
