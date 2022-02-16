import React from 'react';
import { NavbarCont } from './style';

export default function Navbar() {
  return (
    <NavbarCont>
      <div>
        <span>Sleep Tracker</span>
        <span>Features</span>
        {/* </div>
      <div> */}
        <span>Log In</span>
        <span>Sign Up</span>
      </div>
    </NavbarCont>
  );
}
