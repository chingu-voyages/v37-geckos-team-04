import React from 'react';
import { useDispatch } from 'react-redux';

import GoogleLogin from 'react-google-login';
import { GoogleLogo } from './style';
import { isAuthenticated } from '../../reducers/userSlice';

const GoogleButton = () => {
  const dispatch = useDispatch();

  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;
    dispatch(isAuthenticated({ data: result, token }));
  };

  const googleFailure = () =>
    console.log('Sign in with Google was unsuccessful. Try again later.');

  return (
    <GoogleLogin
      clientId="213058889101-r9cesh30eb5g2tftmld264gko9m6gltl.apps.googleusercontent.com"
      onSuccess={googleSuccess}
      onFailure={googleFailure}
      cookiePolicy={'single_host_origin'}
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
