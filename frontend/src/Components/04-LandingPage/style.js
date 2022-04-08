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
  justify-content: center;
`;

export const MainContent = styled.main`
  /* display: flex;
  flex-direction: row; */
  /* align-items: flex-start; */
  /* row-gap: 2em; */
  /* justify-content: center;
  flex-grow: 1; */
  /* width: 35rem; */

  display: grid;
  grid-template-areas:
    '. . . .'
    '. main . .'
    '. description . .'
    '. . button .'
    '. . . .';
  grid-template-columns: 0.5fr 1.5fr 1fr 0.5fr;
  // grid-template-rows: 1fr 0.75fr 0.5fr 0.5fr 1fr;

  .description {
    grid-area: description;
    color: #f7f4f3;
    font-size: 1rem;
    font-style: italic;
    font-weight: 500;
    margin-left: 0.5em;
  }

  .call-to-action {
    /* color: white; */
    color: #f7f4f3;
    font-size: 2rem;
    grid-area: main;
    font-weight: 500;
    align-self: end;
    padding-bottom: 1rem;
  }

  .get-started {
    grid-area: button;
    align-self: flex-start;
    text-align: center;
    border-radius: 1.5rem;
    border: none;
    width: 14rem;
    background-color: #eca72c;
    cursor: pointer;

    button {
      font-family: 'Montserrat', sans-serif;
      font-weight: bold;
      border: none;
      background-color: inherit;
      color: white;
      vertical-align: middle;
      font-size: 1.75rem;
      padding: 0.625rem 0 0.625rem 0;
    }
  }
`;
