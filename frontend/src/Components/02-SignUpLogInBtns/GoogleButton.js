import React from 'react';

import GoogleLogin from 'react-google-login';
import { GoogleLogo } from './style';

const GoogleButton = () => {
  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;

    // This request decodes the token from google; this will be later modified to have the backend decode the token
    await fetch(
      `https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=${token}`,
      {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      }
    ).then((res) => console.log('res: ', res));

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
  };

  const googleFailure = () =>
    console.log('Sign in with Google was unsuccessful. Try again later.');

  return (
    <GoogleLogin
      clientId="213058889101-r9cesh30eb5g2tftmld264gko9m6gltl.apps.googleusercontent.com"
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
