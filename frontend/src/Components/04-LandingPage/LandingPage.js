import React from 'react';
import { Link } from 'react-router-dom';
import { LandingPageCont, MainContent, MainContentCont } from './style';
import Header from '../00-Header/Header';
import Footer from '../03-Footer/Footer';

export default function LandingPage() {
  return (
    <LandingPageCont>
      <Header />
      <MainContentCont>
        <MainContent>
          <div className="call-to-action">
            Track your sleeping pattern with 'Sleep Tracker App Name'
          </div>
          <Link to="/signup" className="get-started">
            <button>Get Started</button>
          </Link>
        </MainContent>
      </MainContentCont>
      <Footer />
    </LandingPageCont>
  );
}
