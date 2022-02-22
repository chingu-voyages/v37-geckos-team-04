import React from 'react';
import { AppName, HeaderCont } from './style';
import Navbar from '../01-Navbar/Navbar';
import { LogInBtn, SignUpBtn } from '../02-SignUpLogInBtns/SignUpLoginBtns';

export default function Header() {
  return (
    <HeaderCont>
      <div className="app-name">Sleep Tracker App Name</div>
      <Navbar />
      <LogInBtn />
      <SignUpBtn />
    </HeaderCont>
  );
}
