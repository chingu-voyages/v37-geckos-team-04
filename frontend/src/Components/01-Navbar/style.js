import styled from 'styled-components';

export const NavbarCont = styled.div`
  display: flex;
  justify-content: space-between;

  .left {
    display: inherit;
    column-gap: 5em;
    align-items: center;

    > div {
      display: inherit;
    }

    .app-name {
      font-size: 2.25rem;
    }
  }

  .right {
    display: inherit;
    column-gap: 2em;
    align-items: center;

    div {
      display: inherit;
    }
  }
`;
