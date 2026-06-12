/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import Process from "./components/Process";
import Benefits from "./components/Benefits";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";

export default function App() {
  return (
    <div className="relative min-h-screen bg-dark-bg text-white selection:bg-gold selection:text-black overflow-hidden font-sans">
      {/* Decorative top lighting glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-gold/15 to-transparent filter blur-3xl pointer-events-none z-0"></div>

      {/* Main Structural Layout */}
      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        <AboutUs />
        <Services />
        <Process />
        <Benefits />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

