import styled from '@emotion/styled';

export const Section = styled.section`
  width: 100%;
  height: 100%;
  margin: 2.25em 0 0 0;
  padding: 2.25em 0 0 0;
  border-top: solid 2px #efefef;
  @media (min-width: 768px) {
    margin: 4em 0 0 0;
    padding: 4em 0 0 0;
  }
`;

export const Title = styled.h2`
  color: #787878;
  font-weight: 400;
  font-size: 1.35em;
  line-height: 1.5em;
  margin: 0 0 1em 0;
  @media (min-width: 768px) {
    font-size: 2em;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const Column = styled.div`
  display: ${props => (props.showMobile ? 'flex' : 'none')};
  width: 100%;
  flex-direction: column;
  @media (min-width: 480px) {
    width: calc(50% - 1em);
    display: ${props => (props.showMobile ? 'none' : 'flex')};
  }
  @media (min-width: 1080px) {
    width: calc(50% - 2em);
  }
`;
