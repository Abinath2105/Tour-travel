import React from "react";

import Ctc from "./pages/Ctc";
import Footer from "./pages/Footer";
import Navbar from "./Navbar";
import TravelPackagePage from "./pages/TravelPackagePage";
function TourPackage() {
    return(
    <>
    <Navbar/>
    <TravelPackagePage/>
    <Ctc/>
    <Footer/>
    </>
    );

};
export default TourPackage;