import React from "react";
import'./Display.css'
function Display(){
    return(
  
<div className="top-places">
  <h4 className="subject">Destinations</h4>
  <h2 className="topcourse-title">Explore Top Places</h2>
    <div className="flex-container">
      <div className="flex-box">
        <div className="cat-item ">
          <img className="image" src="https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""/>
          <a className="cat-overlay" href="">
              <h4 className="text-white font-weight-medium">Delhi</h4>
              <span>50 Places</span>
          </a>
      </div>

      </div>
      <div className="flex-box">
        <div className="cat-item ">
          <img className="image" src="https://images.pexels.com/photos/774282/pexels-photo-774282.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""/>
          <a className="cat-overlay" href="">
              <h4 className="text-white font-weight-medium">TamilNadu</h4>
              <span>100 Places</span>
          </a>
      </div> 
         
      </div>
      <div className="flex-box">
        <div className="cat-item ">
          <img className="image" src="https://images.pexels.com/photos/11428111/pexels-photo-11428111.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""/>
          <a className="cat-overlay" href="">
              <h4 className="text-white font-weight-medium">Kerala</h4>
              <span>100 Places</span>
          </a>
      </div>

      </div>
      <div className="flex-box">
        <div className="cat-item ">
          <img className="image" src="https://images.pexels.com/photos/16542959/pexels-photo-16542959/free-photo-of-wood-sea-city-sunset.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""/>
          <a className="cat-overlay" href="">
              <h4 className="text-white font-weight-medium">Andra Pradesh</h4>
              <span>100 Places</span>
          </a>
      </div>

      </div>
      <div className="flex-box">
        <div className="cat-item ">
          <img className="image" src="https://images.pexels.com/photos/4134644/pexels-photo-4134644.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""/>
          <a className="cat-overlay" href="">
              <h4 className="text-white font-weight-medium">Karnataka</h4>
              <span>100 Places</span>
          </a>
      </div>

      </div>
      <div className="flex-box">
        <div className="cat-item ">
          <img className="image" src="https://images.pexels.com/photos/797824/pexels-photo-797824.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""/>
          <a className="cat-overlay" href="">
              <h4 className="text-white font-weight-medium"> Rajasthan </h4>
              <span>100 Places</span>
          </a>
      </div>
      </div>
      <div className="flex-box">
        <div className="cat-item ">
          <img className="image" src="https://images.pexels.com/photos/8981618/pexels-photo-8981618.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""/>
          <a className="cat-overlay" href="">
              <h4 className="text-white font-weight-medium">Kashmir</h4>
              <span>100 Places</span>
          </a>
      </div>
      </div>
      <div className="flex-box">
        <div className="cat-item ">
          <img className="image" src="https://images.pexels.com/photos/774570/pexels-photo-774570.jpeg?auto=compress&cs=tinysrgb&w=600"alt=""/>
          <a className="cat-overlay" href="">
              <h4 className="text-white font-weight-medium">West Bengal</h4>
              <span>100 Places</span>
          </a>
      </div>
      </div>
      </div>
      <button className="btn btn-primary">Discover More</button>
</div>
      
    );
}
export default Display;