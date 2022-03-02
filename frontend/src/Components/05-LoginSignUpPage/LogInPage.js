import React from 'react';
import bed from '../../Images/becca-schultz-l6BenhrIc2w-unsplash.jpeg';
import { LogInPageCont, LogInForm } from './style';

export default function LogInPage() {
  return (
    <LogInPageCont>
      <img src={bed}></img>
      Log In
      <LogInForm></LogInForm>
    </LogInPageCont>
  );
}
