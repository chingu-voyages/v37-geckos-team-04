import React from 'react';
import nightBed from '../../Images/beazy-toX2sYnycCw-unsplash.jpeg';
import { SignUpPageCont, SignUpForm } from './style';

export default function SignUpPage() {
  return (
    <SignUpPageCont>
      Sign Up
      <img src={nightBed}></img>
      <SignUpForm></SignUpForm>
    </SignUpPageCont>
  );
}
