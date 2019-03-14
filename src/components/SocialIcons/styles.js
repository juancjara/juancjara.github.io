import styled from '@emotion/styled';

import { theme } from '../../utils/styles';

export const Icon = styled.li`
  margin-right: 1em;
  path {
    transition: fill 0.2s ease-in-out, border-color 0.2s ease-in-out;
  }
  & svg:hover path {
    fill: ${theme.palette.link};
  }
`;

export const Social = styled.ul`
  display: flex;
  margin-bottom: 1em;
  list-style-type: none;
  & li:last-child {
    margin-right: 0;
  }
`;
