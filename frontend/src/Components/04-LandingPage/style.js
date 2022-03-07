import styled from 'styled-components';
import nightSky from '../../Images/night-sky.jpeg';

export const LandingPageCont = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-image: url(${nightSky});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
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
    font-size: 2rem;
    text-align: center;
    padding: 0.25em 0.75em 0.25em 0.75em;
    border-radius: 40px;
    border: none;
    background-color: #96c5f7;
    color: white;
    /* color: #f2f4ff; */
    /* border: 2px solid #96c5f7;
    background-color: #f2f4ff;
    color: #96c5f7; */
    font-family: 'Poppins', sans-serif;
  }
`;
