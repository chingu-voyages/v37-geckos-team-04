import styled from 'styled-components';

const Container = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  img {
    display: block;
    height: 100vh;
  }

  h1 {
    font-size: 2rem;
  }
`;

export const LogInPageCont = styled(Container)``;

export const SignUpPageCont = styled(Container)``;

const FormCont = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  justify-content: center;
  align-items: center;
`;

export const LogInFormCont = styled(FormCont)``;
export const SignUpFormCont = styled(FormCont)``;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;

  input {
    font-family: inherit;
    border: none;
    border-bottom: 1px solid black;
    width: 16rem;
    height: 2rem;
    font-size: 1rem;
  }

  input:focus {
    outline: none;
  }

  button:first-of-type {
    font-weight: bold;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
  }

  button {
    display: flex;
    flex-direction: row;
    font-family: inherit;
    font-weight: 500;
    font-size: 1rem;
    border: none;
    border-radius: 0.25rem;
    justify-content: center;
    align-items: center;

    height: 2.5rem;
    width: 16rem;

    column-gap: 0.75rem;
  }

  .google-oauth {
    color: #db4437;
    svg {
      width: 1.5rem;
      height: 1.5rem;
    }
  }

  .facebook-oauth {
    svg {
      width: 1.75rem;
      height: 1.75rem;
    }

    color: #1877f2;
  }
`;

export const LogInForm = styled(Form)``;
export const SignUpForm = styled(Form)``;
