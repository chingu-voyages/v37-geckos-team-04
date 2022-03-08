import React from 'react';
import { LandingPageCont, MainContent } from './style';
import Header from '../00-Header/Header';
import Footer from '../03-Footer/Footer';

export default function LandingPage() {
  return (
    <LandingPageCont>
      <Header />
      <MainContent>
        <div>Track your sleeping pattern with 'Sleep Tracker App Name'</div>
        <button>Get Started</button>
      </MainContent>
      <Footer />
    </LandingPageCont>
  );
}
