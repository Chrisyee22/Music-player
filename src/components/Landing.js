import React from 'react';

const Landing = () =>(
  <section className="landing">
    <h1 className="hero-title"> More tunes! </h1>

    <section className="selling-points">
      <div className="point">
        <h2 className="point-title">Choose your tunes</h2>
        <p className="point-description"> Listen to what you want, when you want.</p>
      </div>
      <div className="point">
        <h2 className="point-title">Unlimited, ad-free streaming</h2>
        <p className="point-description">No limits or distractions</p>
      </div>
      <div className="point">
        <h2 className="point-title">Mobile enabled</h2>
        <p className="point-description">Listen to your music on the go.</p>
      </div>
    </section>
  </section>
);

export default Landing;
