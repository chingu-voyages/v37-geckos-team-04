import React from 'react';
import { NavbarCont } from './style';

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
        <div className="app-name">Sleep Tracker</div>
        <div>Features</div>
      </div>
      <div className="right">
        <div>Log In</div>
        <div>Sign Up</div>
      </div>
    </NavbarCont>
  );
}
