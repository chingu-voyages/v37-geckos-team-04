import React from 'react';
import { Link } from 'react-router-dom';

import nightBed from '../../Images/beazy-toX2sYnycCw-unsplash.jpeg';
import { SignUpPageCont, SignUpFormCont, SignUpForm } from './style';
import GoogleButton from '../02-SignUpLogInBtns/GoogleButton';

export default function SignUpPage() {
  return (
    <SignUpPageCont>
      <SignUpFormCont>
        <Link to="/" className="app-name">
          App name
        </Link>
        <h1>Sign Up</h1>
        <SignUpForm>
          <input placeholder="First Name" className="first-name"></input>
          <input placeholder="Last Name" className="last-name"></input>
          <input placeholder="Email"></input>
          <input placeholder="Password" type="password"></input>
          <input placeholder="Confirm Password" type="password"></input>
          <button>Sign Up</button>
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
