// Home.js
import React, { useState } from 'react';
import Navbar from '../Navbar';
import './Home.css';
import Ctc from './Ctc';
import Footer from './Footer';

import TourLandingPage from './TourLandingPage';
import TripPlanner from './TripPlanner';
import TravelEnquiryForm from './TripPlanner';
import AboutPage from './AboutPage';

import Display from './Display';
import TravelPackagePage from './TravelPackagePage';
import TestimonialPage from './TestimonialPage';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 1 ? 3 : prevSlide - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 3 ? 1 : prevSlide + 1));
  };

  return (
    <>
      
        <Navbar />
     <TourLandingPage/>
     <AboutPage/>
   <Display/>
   <TravelPackagePage/>
   <TestimonialPage/>
   <Ctc/>
   <Footer/>
     
       

 
    </>
  );
};

export default Home;
