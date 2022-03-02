import styled from 'styled-components';

const Container = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  img {
    height: 100vh;
  }
`;

export const LogInPageCont = styled(Container)``;

export const SignUpPageCont = styled(Container)``;

const Form = styled.form`
  display: flex;
`;

export const LogInForm = styled(Form)``;
export const SignUpForm = styled(Form)``;
