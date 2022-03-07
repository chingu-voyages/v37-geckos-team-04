import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import bed from '../../Images/becca-schultz-l6BenhrIc2w-unsplash.jpeg';
import GoogleButton from '../02-SignUpLogInBtns/GoogleButton';
import { LogInPageCont, LogInFormCont, LogInForm } from './style';

export default function LogInPage() {
  const [loginInfo, setLoginInfo] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo((prevState) => ({ ...prevState, [name]: value }));
  };

  useEffect(() => {
    console.log(`Email state: `, loginInfo.email);
    console.log(`Password state: `, loginInfo.password);
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <LogInPageCont>
      <div>
        <img src={bed}></img>
      </div>
      <LogInFormCont>
        <Link to="/" className="app-name">
          App name
        </Link>
        <h1>Log In</h1>
        <LogInForm>
          <input
            placeholder="Email"
            type="text"
            value={loginInfo.email}
            name="email"
            onChange={handleChange}
            required
          ></input>
          <input
            placeholder="Password"
            type="password"
            value={loginInfo.password}
            name="password"
            onChange={handleChange}
            required
          ></input>
          <button onClick={handleSubmit}>Log In</button>
          <GoogleButton />
          <button className="facebook-oauth">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14222 14222">
              <circle cx="7111" cy="7112" r="7111" fill="#1977f3" />
              <path
                d="M9879 9168l315-2056H8222V5778c0-562 275-1111 1159-1111h897V2917s-814-139-1592-139c-1624 0-2686 984-2686 2767v1567H4194v2056h1806v4969c362 57 733 86 1111 86s749-30 1111-86V9168z"
                fill="#fff"
              />
            </svg>
            Log In with Facebook
          </button>
        </LogInForm>
        <div className="alternative">
          New user? Sign up{' '}
          <Link to="/signup" className="link">
            here
          </Link>
          .
        </div>
      </LogInFormCont>
    </LogInPageCont>
  );
}
