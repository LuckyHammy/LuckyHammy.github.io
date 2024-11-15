import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Projects from "./pages/projects";
import About from "./pages/About";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Contact from "./pages/contact";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/skills" element={<Skills />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
        <ScrollToTopButton />
        <Footer />
      </Router>
    </div>
  );
};

export default App;
