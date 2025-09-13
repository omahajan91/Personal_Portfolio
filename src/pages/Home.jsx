// src/pages/Home.jsx
import React from "react";
import Hero from "../components/Hero";
import LogoBanner from "../components/LogoBanner";
import About from "../components/About";

const Home = () => {
  return (
    <div>
      <Hero />
      <LogoBanner />
      <About />
    </div>
  );
};

export default Home;
