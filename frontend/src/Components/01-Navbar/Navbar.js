import React from 'react';
import { AppName, LogInBtn, NavbarCont, SignUpBtn } from './style';

export default function Navbar() {
  return (
    <NavbarCont>
      <div className="left">
        <AppName>Sleep Tracker</AppName>
        <div>Features</div>
      </div>
      <div className="right">
        {/* <div>Log In</div>
        <div>Sign Up</div> */}
        <LogInBtn>Log In</LogInBtn>
        <SignUpBtn>Sign Up</SignUpBtn>
      </div>
    </NavbarCont>
  );
}
