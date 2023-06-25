import React from 'react'
import Navbar from "../components/navbar";
import Footer from '../components/Footer';
import Weather from '../Weather/Weather';


const WeatherPage = () => {
  return (
    <>
     
    <Navbar />

    <Weather/>
    
    <Footer />
    
  </>
  )
}

export default WeatherPage;