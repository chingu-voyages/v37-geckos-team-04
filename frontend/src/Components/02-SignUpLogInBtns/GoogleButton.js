import React, { useState } from 'react';

import GoogleLogin, { GoogleLogout } from 'react-google-login';
import { GoogleLogo } from './style';

const initialState = { firstName: '', lastName: '', isLoggedIn: false };

const GoogleButton = () => {
  const [user, setUser] = useState(initialState);

  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;

    // const data = {
    //   token,
    //   email: result.email,
    //   password: 'password',
    // };
    // console.log('google response: ', res);
    // await fetch('http://localhost:4000/users/login', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ token }),
    // }).then((response) => console.log('fetch res: ', response));

    // Dispatch an auth action to the store to store result and token and push history to desired page

    setUser({
      firstName: result.givenName,
      lastName: result.familyName,
      isLoggedIn: true,
    });
  };

  const googleFailure = () =>
    console.log('Sign in with Google was unsuccessful. Try again later.');

  const logout = () => setUser(initialState);

  return (
    <GoogleLogin
      clientId="213058889101-r9cesh30eb5g2tftmld264gko9m6gltl.apps.googleusercontent.com"
      buttonText="Login with Google"
      onSuccess={googleSuccess}
      onFailure={googleFailure}
      cookiePolicy={'single_host_origin'}
      isSignedIn={true}
      render={(renderProps) => (
        <button className="google-oauth" onClick={renderProps.onClick}>
          <GoogleLogo />
          Log In with Google
        </button>
      )}
    />
  );
};

export default GoogleButton;
