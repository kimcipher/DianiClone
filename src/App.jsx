import React from'react'
import {Route, Routes } from 'react-router-dom'
import Home from "./components/Home"
import Nav from "./components/Nav"
import MobileFooter from './components/MobileFooter';
import Wellness from './components/pages/Wellness';
import Activities from './components/pages/Activities';
import NightLife from './components/pages/NightLife';
import Tours from './components/pages/Tours';
import VIP from './components/pages/VIP';
import MobileNav from './components/MobileNav';
import Type from './components/Type'
// import Pop from "./components/Pop"
// import ReactWhatsapp from 'react-whatsapp';

function App() {
  return (
    <>
      <Nav/>
      <Type/>
      <MobileNav/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Wellness" element={<Wellness/>}/>
        <Route path="/NightLife" element={<NightLife/>}/>
        <Route path="/Tours" element={<Tours/>}/>
        <Route path="/VIP" element={<VIP/>}/>
        <Route path="/Activities" element={<Activities/>}/>
      </Routes>
      <MobileFooter/>
    </>
    // <div className="App">
    //   <h2>Maps </h2>
    //   <ReactWhatsapp number="+254713201600" message="Interested"></ReactWhatsapp>
    // </div>
  );
}

export default (App);
