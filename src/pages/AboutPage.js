// AboutPage.js
import React from 'react';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className='about-page'>
      <div class="container-fluid py-5">
        <h3  >About Us</h3>
        <div class="container pt-5">
            <div class="row">
                <div class="col-lg-6">
                    <div class="position-relative h-100">
                        <img class="position-absolute" src="https://images.pexels.com/photos/2870167/pexels-photo-2870167.jpeg?auto=compress&cs=tinysrgb&w=600"/>
                    </div>
                </div>
                <div class="col-lg-6 pt-5 pb-lg-5">
                    <div class="about-text bg-white p-4 p-lg-5 my-lg-5">
                        
                        <h1 class="mb-3">We Provide Best Tour Packages In Your Budget</h1>
                        <p>Welcome to our travel agency! We are dedicated to making your travel dreams come true by offering the best tour packages in your budget. Our team of experienced travel experts is committed to providing you with exceptional travel experiences, whether you are planning a relaxing beach vacation, an adventurous trekking expedition, or a cultural tour.</p>
                        <p>Our mission is to create unforgettable memories for our clients through our carefully crafted travel packages. We handpick the best destinations and experiences to ensure that you have a delightful journey filled with joy and excitement. Whether you are a solo traveler, a couple, or a family, we have something special for everyone.</p>

                        <div class="row mb-4">
                          
                        </div>
                        <a href="" class="btn btn-primary mt-1">Book Now</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    
  );
};

export default AboutPage;
