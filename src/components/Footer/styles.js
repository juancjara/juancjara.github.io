import styled from '@emotion/styled';

export const Container = styled.footer`
  padding: 2.25em 0;
  background-color: #1f1815;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 768px) {
    padding: 4em 0;
  }
  @media (min-width: 1024px) {
    display: none;
  }
`;
