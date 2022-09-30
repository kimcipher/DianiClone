import React, { useState, useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
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
import Rating from "./components/pages/RatingView"
import "animate.css/animate.min.css";
// import {AnimationOnScroll} from "react-animation-on-scroll"
import Popup from "./components/Popup"
import {Toaster}  from  "react-hot-toast"


function App() {
 
  // eslint-disable-next-line no-unused-vars
  const [isOpen, setIsOpen] = useState(true)
  
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
      {isOpen && <Popup setIsOpen={setIsOpen}/>}
      <MobileNav />
      <BotIcon/>
      <Routes>

            {/* <Navigate to="/popular" /> */}
        <Route path="/" element={<Home />} />
        <Route path="/popular" element={<Home />} />
        <Route path="/Wellness" element={<Wellness />} />
        <Route path="/NightLife" element={<NightLife />} />
        <Route path="/Tours" element={<Tours />} />
        <Route path="/VIP" element={<VIP />} />
        <Route path="/Activities" element={<Activities />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/rate-us" element={<Rating />} />
        {/* <Route path="/services/new" element={<NewService />} /> */}
      </Routes>
      <MobileFooter />

    </>
  );
}

export default App;
