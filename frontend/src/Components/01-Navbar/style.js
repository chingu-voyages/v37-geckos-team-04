import styled from 'styled-components';

export const NavbarCont = styled.div`
  display: flex;
  justify-content: space-between;
  /* margin: 2em 2em 2em 2em; */
  padding: 2em 2em 2em 2em;
  background-color: lightgray;

  > div {
    display: inherit;
    align-items: center;
  }

  .left {
    column-gap: 3em;
  }

  .right {
    column-gap: 2em;
  }
`;

export const AppName = styled.div`
  font-size: 2.25rem;
`;

const Button = styled.button`
  background: none;
  font-weight: bold;
  border: none;
  font-size: 1.125rem;
  font-family: inherit;
`;

export const LogInBtn = styled(Button)``;

export const SignUpBtn = styled(Button)`
  border: thin black solid;
  border-radius: 0.875rem;
  padding: 0.5rem 0.875rem 0.5rem 0.875rem;
`;
