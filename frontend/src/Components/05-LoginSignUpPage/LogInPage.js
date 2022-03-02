import React from 'react';
import bed from '../../Images/becca-schultz-l6BenhrIc2w-unsplash.jpeg';
import { LogInPageCont, LogInFormCont, LogInForm } from './style';

export default function LogInPage() {
  return (
    <LogInPageCont>
      <img src={bed}></img>
      <LogInFormCont>
        <h1>Log In</h1>
        <LogInForm>
          <input placeholder="Email"></input>
          <input placeholder="Password" type="password"></input>
          <button>Log In</button>
          <button>Log In with Google</button>
          <button>Log In with Facebook</button>
        </LogInForm>
      </LogInFormCont>
    </LogInPageCont>
  );
}
