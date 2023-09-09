import React from 'react';
import '../css/Home.css';

function Home() {
  return (
    <div className="home-container">
      <div id="Home" className="text-container">
        <div className="intro-text">
          <h1 className="text-5xl text-white mb-6 animate-bounce">I'M JAIME PÉREZ</h1>
          <h2 className="text-4xl text-red-700 font-semibold mb-8 animate-fade-in">Backend Development</h2>
        </div>
        <div className=" text-6xl animate-slide-in-left-opacity">
          Welcome to My Portfolio
        </div>
      </div>
    </div>
  );
}

export default Home;
