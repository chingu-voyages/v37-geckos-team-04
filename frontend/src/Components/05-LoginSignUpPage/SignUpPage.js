import React from 'react';
import nightBed from '../../Images/beazy-toX2sYnycCw-unsplash.jpeg';
import { SignUpPageCont, SignUpFormCont, SignUpForm } from './style';

export default function SignUpPage() {
  return (
    <SignUpPageCont>
      <SignUpFormCont>
        <h1>Sign Up</h1>
        <SignUpForm>
          <input placeholder="Email"></input>
          <input placeholder="First Name"></input>
          <input placeholder="Last Name"></input>
          <input placeholder="Password" type="password"></input>
          <input placeholder="Confirm Password" type="password"></input>
          <button>Sign Up</button>
          <button>Sign Up with Google</button>
          <button>Sign Up with Facebook</button>
        </SignUpForm>
      </SignUpFormCont>
      <img src={nightBed}></img>
    </SignUpPageCont>
  );
}
