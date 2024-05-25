import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Componanat/Header";
import Banner from "./Componanat/Banner";
import About from "./Componanat/About";
import Services from "./Componanat/Services";
import Experties from "./Componanat/Experties";
import Footar from "./Componanat/Footar";
import Project from "./Componanat/Project";
import Skill from "./Componanat/Skill";
// import Conatct from "./Componanat/Conatct";

const App = () => {
  return (
    <>
      <Header />
      <Banner />
      <About />
      <Services />
      {/* <Conatct /> */}
      <Skill />
      <Experties />
      <Project />
      <Footar />
    </>
  );
};

export default App;
