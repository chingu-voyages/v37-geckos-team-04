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
          <h1 className="call-to-action">
            Track your sleeping pattern with SleepTracker
          </h1>
          <div className="description">
            <p>
              Irregular sleeping patterns are a common problem. Research has
              shown that sleeping and getting up at a certain time is a good
              sleeping practice and can improve mood quality.
            </p>
            <p>
              With SleepTracker, you simply record when you go to sleep and wake
              up, and see how your mood changes according to your sleeping
              habits.
            </p>
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
