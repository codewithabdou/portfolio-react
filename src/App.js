import React from "react";
import { Routes, Route } from "react-router-dom";

import { Home, About, Projects, Contact, Navbar, Footer } from "./components";

import "./index.css";

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      <Footer />
      </main>
    </>
  );
};

export default App;
