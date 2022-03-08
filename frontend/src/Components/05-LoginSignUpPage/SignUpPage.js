import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import nightBed from '../../Images/beazy-toX2sYnycCw-unsplash.jpeg';
import { SignUpPageCont, SignUpFormCont, SignUpForm } from './style';
import GoogleButton from '../02-SignUpLogInBtns/GoogleButton';

export default function SignUpPage() {
  const [signUpInfo, setSignUpInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignUpInfo((prevState) => ({ ...prevState, [name]: value }));
  };

  useEffect(() => {
    console.log(`First name state: `, signUpInfo.firstName);
    console.log(`Last name state: `, signUpInfo.lastName);
    console.log(`Email state: `, signUpInfo.email);
    console.log(`Password state: `, signUpInfo.password);
    console.log(
      `Password confirmation state: `,
      signUpInfo.passwordConfirmation
    );
  });

  const validatePassword = () => {
    let passwordsMatch = true;

    // check if state password and state passwordConfirmation match
    if (signUpInfo.password === signUpInfo.passwordConfirmation) {
      return passwordsMatch;
    } else {
      return !passwordsMatch;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputArr = e.target.parentElement.querySelectorAll('input');

    if (validatePassword()) {
      for (const input of inputArr) {
        setSignUpInfo((prevState) => ({ ...prevState, [input.name]: '' }));
      }
      alert('Passwords DO match!');
      // dispatch isLoggedIn success here??
      return;
    } else {
      alert('Passwords do not match');
      return;
    }
  };

  return (
    <SignUpPageCont>
      <SignUpFormCont>
        <Link to="/" className="app-name">
          App name
        </Link>
        <h1>Sign Up</h1>
        <SignUpForm>
          <input
            placeholder="First Name"
            onChange={handleChange}
            name="firstName"
            value={signUpInfo.firstName}
            className="first-name"
            required
          ></input>
          <input
            placeholder="Last Name"
            onChange={handleChange}
            name="lastName"
            value={signUpInfo.lastName}
            className="last-name"
            required
          ></input>
          <input
            placeholder="Email"
            name="email"
            value={signUpInfo.email}
            onChange={handleChange}
            required
          ></input>
          <input
            placeholder="Password"
            type="password"
            name="password"
            value={signUpInfo.password}
            onChange={handleChange}
            required
          ></input>
          <input
            placeholder="Confirm Password"
            type="password"
            name="passwordConfirmation"
            value={signUpInfo.passwordConfirmation}
            onChange={handleChange}
            required
          ></input>
          <button onClick={handleSubmit}>Sign Up</button>
          <GoogleButton />
          <button className="facebook-oauth">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14222 14222">
              <circle cx="7111" cy="7112" r="7111" fill="#1977f3" />
              <path
                d="M9879 9168l315-2056H8222V5778c0-562 275-1111 1159-1111h897V2917s-814-139-1592-139c-1624 0-2686 984-2686 2767v1567H4194v2056h1806v4969c362 57 733 86 1111 86s749-30 1111-86V9168z"
                fill="#fff"
              />
            </svg>
            Sign Up with Facebook
          </button>
        </SignUpForm>
        <div className="alternative">
          Returning user? Log in{' '}
          <Link to="/login" className="link">
            here
          </Link>
          .
        </div>
      </SignUpFormCont>
      <div>
        <img src={nightBed}></img>
      </div>
    </SignUpPageCont>
  );
}
