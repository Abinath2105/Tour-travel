import React from 'react';
import './App.css';
import Navbar from './Navbar';

import Home from './pages/Home';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutPage from './pages/AboutPage';
import About from './pages/About';
import TourPackage from './TourPackage';
import Destination from './pages/Destination';
import Contact from './pages/Contact';
import TravelEnquiryForm from'./pages/TripPlanner';
import Trip from './pages/Trip';




function App() {
  return (
   <>
    <Router>
     <Routes>
      <Route index element={<Home/>}/>
      <Route path='/Home' element={<Home/>}/>
      <Route path='/Navbar' element={<Navbar/>}/>
      <Route path='/AboutPage' element={<AboutPage/>}/>
      <Route path='/About' element={<About/>}/>
    <Route path='/TourPackage' element={<TourPackage/>}/>
    <Route path='/Destination' element={<Destination/>}/>
    <Route path='/Contact' element={<Contact/>}/>
    <Route path='/TravelEnquiryForm' element={<TravelEnquiryForm/>}/>
    <Route path='/Trip' element={<Trip/>}/>
     </Routes>
    </Router>
   
  
 </>


  );
}

export default App;