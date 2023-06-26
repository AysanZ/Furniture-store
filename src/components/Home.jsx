import React from "react";
import Hero from "./Hero";
import Value from "./Value";
import About from "./About";
import About2 from "./About2";
import Category from "./Category";

const Home = () => {
  return (
    <div className="min-h-[1800px]">
      <Hero />
      <Value />
      <About />
      <About2 />
      <Category/>
    </div>
  );
};

export default Home;
