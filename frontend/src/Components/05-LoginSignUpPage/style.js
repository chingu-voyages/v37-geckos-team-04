import styled from 'styled-components';

const Container = styled.section`
  /* display: flex;
  flex-direction: row; */
  display: grid;
  grid-template-columns: 0.5fr 1fr 1fr 0.5fr;
  background-color: #31263e;

  /* justify-content: space-around; */
  /* background-color: black; */
  /* img {
    display: block;
    height: 100vh;
  } */

  .image-cont {
    /* margin: 0 !important; */
    /* background-color: #31263e; */
  }

  .image {
    width: 100%;
    height: 100vh;
    grid-area: img;
    /* display: block; */
    /* height: 100vh;
    width: 50vh; */
    /* padding-left: 1.5rem; */
    /* padding-right: 1.5rem; */
  }

  .alternative {
    margin-top: 0.75rem;
    color: #f7f4f3;

    .link,
    .link:visited {
      text-decoration: none;
      color: inherit;
      font-weight: bold;
    }
  }
`;

export const LogInPageCont = styled(Container)`
  /* background-color: #31263e; */
  /* background-color: #eca72c; */
  grid-template-areas: '. img form .';
`;

export const SignUpPageCont = styled(Container)`
  /* background-color: #eca72c; */
  /* background-color: #31263e; */
  grid-template-areas: '. form img .';
`;

const FormCont = styled.div`
  grid-area: form;
  display: flex;
  flex-direction: column;
  /* background-color: #31263e; */
  /* background-color: #f7f4f3; */

  justify-content: center;
  align-items: center;

  .app-name {
    position: absolute;
    top: 2.5%;
    text-decoration: none;
    font-size: 1.125rem;
    font-style: italic;
    color: #f7f4f3;
    font-weight: bold;
  }

  .app-name:visited {
    color: #f7f4f3;
  }

  h1 {
    font-size: 2rem;
    color: #f7f4f3;
  }
`;

export const LogInFormCont = styled(FormCont)`
  .app-name {
    right: 2.5%;
  }
`;

export const SignUpFormCont = styled(FormCont)`
  .app-name {
    left: 2.5%;
  }
`;

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
    border-radius: 0.25rem;
    padding-left: 1rem;
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
    width: 17rem;

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
