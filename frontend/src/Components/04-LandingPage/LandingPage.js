import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Splash, About, Features } from './style';
import Footer from '../03-Footer/Footer';
import Dashboard from './img/Dashboard.png';
import startModal from './img/startModal.png';
import table from './img/table.png';
import graph from './img/sleepGraph.png';
import Navbar from '../01-Navbar/Navbar';

export default function LandingPage() {
  return (
    <Container>
      <Navbar />
      <Splash id="home">
        <h1 className="call-to-action">
          Take control of your sleeping habits with SleepTracker
        </h1>
        <Link to="/signup" className="get-started">
          <button>Get Started</button>
        </Link>
      </Splash>
      <About id="about">
        <article className="about">
          <h2 className="heading">
            Irregular sleeping patterns are a common problem
          </h2>
          <p>
            Research has shown that sleeping and getting up at a certain time is
            a good sleeping practice and can improve mood quality.
          </p>
          <div>
            <p>The more you use SleepTracker, the more you learn about:</p>
            <ul>
              <li>Your best times for sleeping and waking</li>
              <li>
                How your mood changes according to how much and when you sleep
              </li>
              <li>Spot trends that lead to better or worse sleep</li>
            </ul>
          </div>
        </article>
        <figure>
          <img src={Dashboard} alt="dashboard" />
          <figcaption className="caption">
            With SleepTracker, you keep a log of your sleep schedule and see how
            it affects your mood.
          </figcaption>
        </figure>
      </About>
      <Features id="features">
        <article className="modal">
          <figure>
            <img src={startModal} alt="start sleep modal" />
            <figcaption>
              All you need to enter is the time you go to sleep and your mood
            </figcaption>
          </figure>
          <h3 className="modalHeading">Record your sleep and wake times</h3>
        </article>
        <article className="table">
          <h3 className="tableHeading">
            Log your sleep history in a convenient table
          </h3>
          <figure>
            <img src={table} alt="sleep table" />
            <figcaption>
              View and manually edit your past sleep data in a table
            </figcaption>
          </figure>
        </article>
        <article className="graph">
          <figure>
            <img src={graph} alt="sleep table" />
            <figcaption>See how you're sleeping on a graph</figcaption>
          </figure>
          <h3 className="graphHeading">
            Visualize your sleeping habits with different graphs
          </h3>
        </article>
      </Features>
      <Footer />
    </Container>
  );
}
