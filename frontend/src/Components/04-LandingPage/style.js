import styled from 'styled-components';

export const LandingPageCont = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const MainContent = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 2em;
  justify-content: center;
  flex-grow: 1;

  div {
    font-size: 3rem;
  }

  button {
    font-size: 2.25rem;
    /* width: 20%; */
    text-align: center;
    padding: 0.5em;
    border-radius: 40px;
  }
`;
