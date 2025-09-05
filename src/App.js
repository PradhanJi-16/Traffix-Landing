import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Features from "./components/features";
import './App.css';
import jam3 from "./assets/jam3.png";

function App() {
  return (
    <div className="background-image">
      <img src={jam3} alt="Traffic Background" className="bg-image" />
      

      <div className="content-overlay">
        <Navbar />
        <Hero />
        <Features />
      </div>
      
    </div>
  )
}

export default App;