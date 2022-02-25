import React, { useState } from 'react';

import GoogleLogin, { GoogleLogout } from 'react-google-login';
import { LogInBtn } from './style';

const initialState = { firstName: '', lastName: '', isLoggedIn: false };

const GoogleButton = () => {
  const [user, setUser] = useState(initialState);

  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;

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
    <>
      {user.isLoggedIn ? (
        <>
          <h1>Welcome to your Sleep Tracker, {user.firstName}</h1>
          <GoogleLogout
            clientId="213058889101-r9cesh30eb5g2tftmld264gko9m6gltl.apps.googleusercontent.com"
            onLogoutSuccess={logout}
            render={(renderProps) => (
              <LogInBtn onClick={renderProps.onClick}>Logout</LogInBtn>
            )}
          />
        </>
      ) : (
        <GoogleLogin
          clientId="213058889101-r9cesh30eb5g2tftmld264gko9m6gltl.apps.googleusercontent.com"
          buttonText="Login with Google"
          onSuccess={googleSuccess}
          onFailure={googleFailure}
          cookiePolicy={'single_host_origin'}
          isSignedIn={true}
          render={(renderProps) => (
            <LogInBtn onClick={renderProps.onClick}>Login with Google</LogInBtn>
          )}
        />
      )}
    </>
  );
};

export default GoogleButton;
