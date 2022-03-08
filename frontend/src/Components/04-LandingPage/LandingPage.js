import React from 'react';
import { LandingPageCont, MainContent, MainContentCont } from './style';
import Header from '../00-Header/Header';
import Footer from '../03-Footer/Footer';

export default function LandingPage() {
  return (
    <LandingPageCont>
      <Header />
      <MainContentCont>
        <MainContent>
          <div></div>
          <div className="call-to-action">
            Track your sleeping pattern with 'Sleep Tracker App Name'
            <button>Get Started</button>
          </div>
        </MainContent>
      </MainContentCont>
      <Footer />
    </LandingPageCont>
  );
}
