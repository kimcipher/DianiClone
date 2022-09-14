import React from'react'
import {Route, Routes } from 'react-router-dom'
import './App.css';
import Home from "./components/Home"
import Nav from "./components/Nav"
import MobileFooter from './components/MobileFooter';
// import Pop from "./components/Pop"
// import ReactWhatsapp from 'react-whatsapp';

function App() {
  return (
    <>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}/>
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
