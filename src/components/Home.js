import React from 'react'
import "./css/home.css"
import ReactWhatsapp from 'react-whatsapp';

function Home() {
  return (
    <div className='container'>
        <h2>Deliveries with One Tap</h2>
        <h3>Welcome to DianiApp</h3>
        <div className='Tabs-container'>
            <ReactWhatsapp number="+254728000107" message="Interested in Transportation" className="whatsapp"><h4 className='Tab-item'>Transportation</h4></ReactWhatsapp>
            <ReactWhatsapp number="+254728000107" message="Interested in Forex" className="whatsapp"><h4 className='Tab-item'>Foreign Exchange</h4></ReactWhatsapp>
            <ReactWhatsapp number="+254728000107" message="Interested in Food and drinks delivery" className="whatsapp"><h4 className='Tab-item'>Drinks</h4></ReactWhatsapp>
            <ReactWhatsapp number="+254728000107" message="Interested in an Activity Guide" className="whatsapp"><h4 className='Tab-item'>Activity Guide</h4></ReactWhatsapp>
            <ReactWhatsapp number="+254728000107" message="I want to rent a bike" className="whatsapp"><h4 className='Tab-item'>Rent a Bike</h4></ReactWhatsapp>
            <ReactWhatsapp number="+254728000107" message="Iwant to make a reservation" className="whatsapp"><h4 className='Tab-item'>Make a Reservation</h4></ReactWhatsapp>
        </div>
    </div>
  )
}

export default Home