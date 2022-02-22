import React from 'react';
import { MainContent } from './style';
import Navbar from '../01-Navbar/Navbar';
import Footer from '../02-Footer/Footer';

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <MainContent>
        <div>Call to action slogan here.</div>
        <button>Get Started</button>
      </MainContent>
      <Footer />
    </>
  );
}
