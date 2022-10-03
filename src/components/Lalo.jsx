import React, {useState, useEffect} from 'react'
import {foodwhite, drinkwhite, grocerieswhite, credit} from "./icons"
import "./css/Lalo.css"
import { FormspreeProvider } from '@formspree/react'

const  Lalo = ({setItIsOpen}) => {
    const clicked = () => {
        setItIsOpen(false)
        console.log("ameskia")
    }
    
  return (
    <div className="Lalo-main">
        <div className="child" onClick={() => setItIsOpen(false)}>
            <div className="closest" onClick={() => setItIsOpen(false)}>+</div>
        </div>
        <div className="child" style={{marginTop:"20px"}}>
            <p>LaLo Communitie(s) is an always ON<br/>      24/7 INSTANT WEB3 BOOKING DAPP<br/> powering small communities and their<br/> visitors globally.<br/><br/> Delivers Anything. Anytime</p>
        </div>
        <div className="child">
            <div className="child-container">
                <div className="child-container-child">
                    {foodwhite} Food
                </div>
                <div className="child-container-child">
                    {drinkwhite} Drinks
                </div>
                <div className="child-container-child">
                    {grocerieswhite} Groceries
                </div>
                <div className="child-container-child">
                   {credit} Bookings
                </div>
            </div>
        </div>
        <div className="child">
            <h3 style={{color:"#fff", textAlign:"center", marginLeft:"-50px", fontWeight:"bold"}}>Try Us!</h3>
        </div>
    </div>
  )
}

export default Lalo