import React, {useState, useEffect} from 'react'
import {foodwhite, drinkwhite, grocerieswhite, credit, line, live, oneeight, fourth, twentyeight, people, location, bookings, livecon} from "./icons"
import "./css/Lalo.css"
import {Carousel} from "react-responsive-carousel"
import Collapsible from 'react-collapsible'

const  Lalo = ({setItIsOpen}) => {
    // function clicked(){
    //     setItIsOpen(false)
    // }
  return (
    <div className="Lalo-main">
            <div className="child-closer" onClick={() => setItIsOpen(false)}>
                <div className="closest">+</div>
            </div>
            <Carousel>
            <div>
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
                {/* <div className="child spec">
                    More {more}
                </div> */}
            </div>
            <div>
                {/* <div className="child" onClick={() => setItIsOpen(false)}>
                    <div className="closest" onClick={() => setItIsOpen(false)}>+</div>
                </div> */}
                <div className="child" style={{marginTop:"20px"}}>
                    <p>{line} &nbsp; &nbsp; LIVE Today &nbsp;&nbsp; {live}</p>
                </div>
                <div className="child" style={{marginTop:"20px"}}>
                    <p>{oneeight} &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; {fourth} &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; {twentyeight}</p>
                </div>
                <div className="child" style={{marginTop:"0"}}>
                    <p>{people} &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; {location} &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; {bookings}</p>
                </div>
                <div className="child">
                    <h3 style={{color:"#fff", textAlign:"center", marginLeft:"-50px", fontWeight:"bold"}}>Try Us!</h3>
                </div>
                {/* <div className="child spec">
                    More {more}
                </div> */}
            </div>
            <div>
                {/* <div className="child" onClick={() => setItIsOpen(false)}>
                    <div className="closest" onClick={() => setItIsOpen(false)}>+</div>
                </div> */}
                <div className="child">
                    <div className="child-container">
                        <div className="child-container-child-spec">
                            <h3>EAST AFRICA</h3>
                            {/* <p> &nbsp; &nbsp; {livecon}&nbsp; &nbsp; KENYA</p> */}
                            <Collapsible trigger="◎ KENYA +" className="collapsible">
                                <p>&nbsp; &nbsp; &nbsp; &nbsp;Diani</p>
                                <p>&nbsp; &nbsp; &nbsp; &nbsp;Kilifi</p>
                                <p>&nbsp; &nbsp; &nbsp; &nbsp;Watamu</p>
                                <p>&nbsp; &nbsp; &nbsp; &nbsp;Malindi</p>
                            </Collapsible>
                            <Collapsible trigger="◎ UGANDA +" className="collapsible">
                                <p>&nbsp; &nbsp; &nbsp; &nbsp;JINJER</p>
                                <p>&nbsp; &nbsp; &nbsp; &nbsp;Kilifi</p>
                            </Collapsible>
                        
                            <Collapsible trigger="◎ TANZANIA +" className="collapsible">
                                <p>&nbsp; &nbsp; &nbsp; &nbsp;Zanzibar</p>
                                <p>&nbsp; &nbsp; &nbsp; &nbsp;Kilifi</p>
                            </Collapsible>
                        </div>
                        <div className="child-container-child-spec">
                            <h3>CARRIBEAN</h3>
                            <Collapsible trigger="◎ BAHAMAS +" className="collapsible">
                                <p>&nbsp; &nbsp; &nbsp; &nbsp;JINJER</p>
                                <p>&nbsp; &nbsp; &nbsp; &nbsp;Kilifi</p>
                            </Collapsible>
                            <Collapsible trigger="◎ BERMUDA +" className="collapsible">
                                <p>&nbsp; &nbsp; &nbsp; &nbsp;JINJER</p>
                                <p>&nbsp; &nbsp; &nbsp; &nbsp;Kilifi</p>
                            </Collapsible>
                        </div>
                        <div className="child-container-child-spec">
                            <h3>AMERICAS</h3>
                            <p className="small"> &nbsp; &nbsp; (coming soon)</p>
                            <Collapsible trigger="◎ Costa Rica +" className="collapsible">
                            </Collapsible>
                            <Collapsible trigger="◎ El Savado +" className="collapsible">
                            </Collapsible>
                        </div>
                        <div className="child-container-child-spec">
                            <h3>ASIA</h3>
                            <p className="small">&nbsp; &nbsp; (coming soon)</p>
                            <Collapsible trigger="◎ Indonesia +" className="collapsible">
                            </Collapsible>
                            <Collapsible trigger="◎ Thailand +" className="collapsible">
                            </Collapsible>
                        </div>
                    </div>
                </div>
                {/* <div className="child spec">
                    More {more}
                </div> */}
            </div>
        </Carousel>
        
    </div>
  )
}

export default Lalo