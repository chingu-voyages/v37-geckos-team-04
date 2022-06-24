import styled from 'styled-components';
import nightSky from '../../Images/night-sky.jpeg';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  // position: relative;
  // position: absolute;
`;

const Section = styled.section`
  display: flex;
  min-height: 100vh;
  max-width: 100%;
`;

export const Splash = styled(Section)`
  background-image: url(${nightSky});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .call-to-action {
    width: 50%;
    color: #f7f4f3;
    font-size: 2rem;
    font-weight: 500;
    text-align: center;
    padding-bottom: 1rem;
  }

  .get-started {
    text-align: center;
    border-radius: 1.5rem;
    border: none;
    width: 14rem;
    background-color: #eca72c;

    button {
      font-family: 'Montserrat', sans-serif;
      font-weight: bold;
      border: none;
      background-color: inherit;
      color: white;
      font-size: 1.75rem;
      padding: 0.625rem 0 0.625rem 0;
      cursor: pointer;
    }
  }
`;

export const About = styled(Section)`
  @media screen and (max-width: 1000px) {
    flex-direction: column;
    justify-content: center;
  }

  .about {
    display: flex;
    flex-direction: column;
    justify-content: center;
    row-gap: 2em;
    padding: 1em;
    font-size: 1rem;

    p,
    ul {
      margin-left: 1em;
    }
  }

  figure {
    align-self: center;
    padding: 0.5em;
    text-align: center;

    img {
      max-width: 90%;
      border-radius: 3px;
      -webkit-box-shadow: -1px 0px 11px 1px rgba(0, 0, 0, 0.51);
      box-shadow: -1px 0px 11px 1px rgba(0, 0, 0, 0.51);
    }

    .caption {
      padding: 1em;
      font-style: italic;
      font-size: 0.8rem;
      text-align: center;
    }
  }
`;

// Features is a flex container; article is the sole item;
// The entire features section should just be images with a description
// Include procedures for creating sleep, updating sleep, table, graphs
export const Features = styled(Section)`
  display: grid;
  grid-template-columns: 12em repeat(4, 1fr) 12em;
  grid-row-gap: 2em;
  grid-template-areas:
    '. . heading heading . .'
    '. modal modal modal . .'
    '. . table table table .'
    '. graph graph graph . .';
  text-align: center;

  article {
    display: flex;
    column-gap: 1em;
  }

  .heading {
    grid-area: heading;
  }

  figcaption {
    font-style: italic;
    font-size: 0.8em;
    padding: 1em;
  }

  .modal {
    grid-area: modal;
  }

  .table {
    grid-area: table;
  }

  .graph {
    grid-area: graph;
  }

  img {
    max-width: 100%;
    min-height: 25vh;
    -webkit-box-shadow: -1px 0px 11px 1px rgba(0, 0, 0, 0.51);
    box-shadow: -1px 0px 11px 1px rgba(0, 0, 0, 0.51);
  }

  @media screen and (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 3em;

    article {
      display: flex;
      flex-direction: column;

      h3 {
        order: -1;
      }
    }
  }
`;
