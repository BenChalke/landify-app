import React from 'react';

import '../../styles/HomeHero.scss';
import Header from '../Header/Header';


function HomeHero() {
  return (
    <div className="home-hero">
      <Header />
      <img src="home-hero.png" alt="Decorative background" className="home-hero__background" />
      <div className="home-hero__content container">
        <div className="home-hero__content__title">
          <h1>Organise projects. <br/>Get more done.</h1>
          <button>Get Started</button>
        </div>
        <div className="home-hero__content__phone">
          <img src="hero-phone-mockup.png" alt="Phone with mockup of app" className="img-responsive container" />
        </div>
      </div>
    </div>
  );
}

export default HomeHero;
