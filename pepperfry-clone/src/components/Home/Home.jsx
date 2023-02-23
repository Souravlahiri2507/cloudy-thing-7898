import React from 'react';
import Hero from '../HomePageCards/Hero';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import "./Home.css";

const Home = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Footer/>
    </>
  )
}

export default Home;
