import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)``;

export const NavbarCont = styled.nav`
  display: flex;
  justify-content: space-around;
  // justify-content: space-between;
  align-items: center;
  color: #f7f4f3;
  background-color: black;
  position: fixed;
  top: 0;
  width: 100%;
  height: auto;
  z-index: 99;
  transition: top 0.3s;

  .app-name {
    font-size: 2.25rem;
    font-weight: 800;
    color: white;
  }

  .desktop {
    display: flex;
    column-gap: 2em;
    align-items: center;
  }

  .mobile {
    display: none;
  }

  .menu.close {
    position: fixed;
    left: -1000;
  }

  @media screen and (max-width: 780px) {
    .app-name {
      font-size: 1.5rem;
      font-weight: 600;
    }

    .desktop {
      display: none;
    }

    .mobile {
      display: block;
      width: 40px;
      height: 30px;
    }

    .menu {
      display: flex;
      flex-direction: column;
      row-gap: 1em;
      justify-content: center;
      align-items: center;
      font-size: 2em;
      padding: 0;
      height: 100vh;
      width: 100%;
      position: fixed;
      left: -1000;
      top: 38.5px;
      border-top: 2px solid gray;
      background: black;
      transition: left 0.2s;

      li {
        width: 100%;
        list-style: none;
      }
    }
  }
`;
