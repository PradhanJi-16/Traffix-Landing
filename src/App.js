import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Features from "./components/features";
import Product from "./components/product";
import './App.css';
import delhi from "./assets/delhi-traffic.webp";
import Challenges from "./components/challenges";
import Footer from "./components/footer";
import Technology from "./components/technology.jsx";


function App() {
  return (
    <div className="background-image">
      <img src={delhi} alt="Traffic Background" className="bg-image" />
      

      <div className="content-overlay">
        <Navbar />
        <Hero />
        <Product />
        <Features />
        <Challenges/>
        <Technology />
        <Footer />
      </div>
      
    </div>
  )
}

export default App;