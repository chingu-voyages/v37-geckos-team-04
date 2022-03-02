import styled from 'styled-components';

const Container = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  img {
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
`;

export const LogInFormCont = styled(FormCont)``;
export const SignUpFormCont = styled(FormCont)``;

const Form = styled.form`
  display: flex;
  flex-direction: column;

  input,
  button {
    font-family: inherit;
  }
`;

export const LogInForm = styled(Form)``;
export const SignUpForm = styled(Form)``;
