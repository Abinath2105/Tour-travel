import React from "react";
import Navbar from "../Navbar";
import TripPlanner from "./TripPlanner";
import Ctc from "./Ctc";
import Footer from "./Footer";


function Trip() {
    return(
    <>
    <Navbar/>
    <TripPlanner/>
    <Ctc/>
    <Footer/>
    </>
    );

};
export default Trip;