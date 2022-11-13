import React from "react";
import { Routes, Route } from "react-router-dom";

import { Home, About, Projects, Contact, Navbar } from "./components";

import "./index.css";

const App = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </main>
      <footer></footer>
    </>
  );
};

export default App;
