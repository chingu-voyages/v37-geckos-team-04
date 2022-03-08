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

export const MainContentCont = styled.div`
  display: flex;
  flex-grow: 1;
`;

export const MainContent = styled.main`
  /* display: flex;
  flex-direction: row; */
  /* align-items: flex-start; */
  /* row-gap: 2em; */
  /* justify-content: center;
  flex-grow: 1; */
  /* width: 35rem; */

  /* div {
    color: white;
  } */
  display: grid;
  grid-template-areas:
    '. . .'
    '. main .'
    '. . .'
    '. . .';
  grid-template-columns: 0.5fr 1.5fr 1fr;
  grid-template-rows: repeat(4, 1fr);

  .call-to-action {
    color: white;
    font-size: 2rem;
    grid-area: main;
    font-weight: 500;

    button {
      font-size: 1.75rem;
      text-align: center;
      padding: 0.5em 1.125em 0.5em 1.125em;
      border-radius: 40px;
      border: none;
      /* background-color: #96c5f7; */
      background-color: #eca72c;
      color: white;
      /* color: #f2f4ff; */
      /* border: 2px solid #96c5f7;
      background-color: #f2f4ff;
      color: #96c5f7; */
      /* font-famil: 'Roboto', sans-serif; */
      margin-top: 2rem;
      font-family: 'Montserrat', sans-serif;
      font-weight: bold;
    }
  }
`;
