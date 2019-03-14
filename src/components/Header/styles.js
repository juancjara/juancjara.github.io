import styled from '@emotion/styled';
import { css } from '@emotion/core';

import { space } from '../../utils/styles';

export const Box = styled.div`
  ${space};
  display: none;
  @media (min-width: 1024px) {
    display: block;
  }
`;
export const Name = styled.strong`
  color: white;
  font-weight: 400;
`;

export const Container = styled.header`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  padding: 4.5em 1.5em;
  & a {
    text-decoration: none;
    border-bottom: dotted 1px;
    color: #a2a2a2;
    transition: color 0.2s ease-in-out, border-color 0.2s ease-in-out;
  }
  & a:hover {
    color: #49bf9d;
    border-bottom-color: transparent;
  }
  @media (min-width: 768px) {
    padding: 6em 4em;
  }
  @media (min-width: 1024px) {
    align-items: flex-end;
    padding: 6em 3em 6em 3em;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    width: 30%;
  }
  @media (min-width: 1280px) {
    padding-right: 4em;
    width: 35%;
  }
`;

export const AvatarClassName = css`
  position: relative;
  overflow: hidden;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 1em;
  @media (min-width: 1280px) {
    width: 150px;
    height: 150px;
    margin-bottom: 2em;
  }
`;

export const Description = styled.h1`
  max-width: 400px;
  text-align: center;
  font-weight: 400;
  font-size: 1.35em;
  line-height: 1.75em;
  margin: 0;
  color: #ffffffab;
  max-width: 360px;
  @media (min-width: 768px) {
    font-size: 1.75em;
  }
  @media (min-width: 1024px) {
    text-align: right;
    font-size: 1.25em;
  }
  @media (min-width: 1280px) {
    font-size: 1.35em;
    line-height: 1.75em;
  }
  @media (min-width: 1800px) {
    font-size: 1.7em;
    line-height: 1.75em;
  }
`;
