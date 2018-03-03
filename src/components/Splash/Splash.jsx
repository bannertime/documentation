import React from 'react';
import Interactive from 'antwar-interactive';
import Container from '../Container/Container';
import SplashViz from '../SplashViz/SplashViz';
import './Splash.scss';
import '../SplashViz/SplashViz.scss';

const Splash = () => (
  <div className="splash">
    <Interactive
      id="src/components/SplashViz/SplashViz.jsx"
      component={ SplashViz } />

    <div className="splash__section splash__section--dark page__content">
      <Container>
        <div dangerouslySetInnerHTML={{
          __html: require('page-loader!../../content/index.md').body
        }} />
      </Container>
    </div>
  </div>
);

Splash.title = 'Bannertime';
Splash.description = 'The goal of this project is to streamline banner builds and standardise workflow. The generator sets up the project scaffolding for you so that you can focus on the fun stuff.';

export default Splash;
