import styled from '@emotion/styled';

export const Wrapper = styled.div`
  margin-bottom: 1em;
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
`;
