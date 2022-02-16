import React from 'react';
import { AppName, NavbarCont } from './style';

export default function Navbar() {
  return (
    <NavbarCont>
      {/* <div>
        <span>Sleep Tracker</span>
        <span>Features</span>
        <span>Log In</span>
        <span>Sign Up</span>
      </div> */}
      <div className="left">
        <AppName>Sleep Tracker</AppName>
        <div>Features</div>
      </div>
      <div className="right">
        <div>Log In</div>
        <div>Sign Up</div>
      </div>
    </NavbarCont>
  );
}
