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
// import WeatherIcon from "./components/WeatherIcon";
import { Toaster } from "react-hot-toast";
import BotIcon from "./components/BotIcon"
import "animate.css/animate.min.css";
import {AnimationOnScroll} from "react-animation-on-scroll"


function App() {
  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: "",
          duration: 5000,
          style: {
            background: "#363636",
            color: "#fff",
          },
        }}
      />
      <Nav />
      <AddToHomeScreen />
      <Type />
      {/* <WeatherIcon /> */}
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
      </Routes>
      <MobileFooter />

    </>
  );
}

export default App;
