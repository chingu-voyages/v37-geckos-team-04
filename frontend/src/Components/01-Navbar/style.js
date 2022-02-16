import styled from 'styled-components';

export const NavbarCont = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2em 2em 2em 2em;

  > div {
    display: inherit;
    align-items: center;
  }

  .left {
    column-gap: 4em;
  }

  .right {
    column-gap: 2em;
  }
`;

export const AppName = styled.div`
  font-size: 2.25rem;
`;
