import React from 'react';
import { BtnsContainer, SignUpBtn, LogInBtn } from './style';
import GoogleButton from './GoogleButton';

export const SignUpLoginBtns = () => {
  return (
    <BtnsContainer>
      <LogInBtn>Log In</LogInBtn>
      <SignUpBtn>Sign Up</SignUpBtn>
      <GoogleButton />
    </BtnsContainer>
  );
};
