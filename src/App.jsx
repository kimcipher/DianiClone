import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Nav from "./components/Nav";
import MobileFooter from "./components/MobileFooter";
import Wellness from "./components/pages/Wellness";
import Activities from "./components/pages/Activities";
import NightLife from "./components/pages/NightLife";
import Tours from "./components/pages/Tours";
import VIP from "./components/pages/VIP";
import MobileNav from "./components/MobileNav";
import Type from "./components/Type";
import HowItWorks from "./components/pages/HowItWorks";
import AddToHomeScreen from "@ideasio/add-to-homescreen-react";
import BotIcon from "./components/BotIcon"
import "animate.css/animate.min.css";
import {AnimationOnScroll} from "react-animation-on-scroll"
import Popup from "./components/Popup"


function App() {
 
  const [isOpen, setIsOpen] = useState(true)
  function open(){
    setIsOpen(true)
  }
  useEffect(() => {
    if ("caches" in window) {
      caches.keys().then((names) => {
        names.forEach((name) => {
          caches.delete(name);
        });
      });
    }
  }, []);
  return (
    <>
      <Nav />
      <AddToHomeScreen />
      <Type />
      {/* <WeatherIcon /> */}
      {isOpen && <Popup setIsOpen={setIsOpen}/>}
      <MobileNav />
      <BotIcon/>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/Wellness" element={<Wellness />} />
        <Route path="/NightLife" element={<NightLife />} />
        <Route path="/Tours" element={<Tours />} />
        <Route path="/VIP" element={<VIP />} />
        <Route path="/Activities" element={<Activities />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        {/* <Route path="/services/new" element={<NewService />} /> */}
      </Routes>
      <MobileFooter />

    </>
  );
}

export default App;
