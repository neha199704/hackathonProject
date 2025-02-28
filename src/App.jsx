import React from "react";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import PartnersSection from "./components/PartnersSection";
import StatsSection from "./components/StatsSection";
import SponsorsSection from "./components/SponsorsSection";
import Footer from "./components/Footer";
import "./index.css";

const App = () => {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <HeroSection />
      <PartnersSection />
      <StatsSection />
      <SponsorsSection />
      <Footer />
    </div>
  );
};

export default App;
