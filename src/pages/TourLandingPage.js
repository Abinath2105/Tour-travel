import React, { useState, useEffect } from 'react';
import './TourLandingPage.css';

const slides = [
  {
    backgroundImage: 'url(https://images.pexels.com/photos/5124396/pexels-photo-5124396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)',
    title: 'Amazing Places',
    description: 'Explore breathtaking destinations around the world.',
  },
  {
    backgroundImage: 'url(https://img.freepik.com/premium-photo/houseboat-kerala-backwaters-india_163782-3929.jpg?size=626&ext=jpg&uid=R104530040&ga=GA1.2.1700164988.1685182975&semt=ais)',
    title: 'Adventurous Activities',
    description: 'Embark on thrilling adventures and create memories.',
  },
  {
    backgroundImage: 'url(https://img.freepik.com/premium-photo/man-watching-sunset-taj-mahal-from-wooden-boat-with-bird-flying_42667-753.jpg?size=626&ext=jpg&uid=R104530040&ga=GA1.2.1700164988.1685182975&semt=ais)',
    title: 'Relax and Unwind',
    description: 'Indulge in tranquility and recharge mind & your soul.',
  },
];

const TourLandingPage = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const renderSlide = (slide, index) => {
    const isActive = index === activeSlideIndex;
    return (
      <div
        key={index}
        className={`slide ${isActive ? 'active' : ''}`}
        style={{ backgroundImage: slide.backgroundImage }}
      >
         <div className="gradient-overlay" />
        <div className="slide-content">
          <h1>{slide.title}</h1>
          <p>{slide.description}</p>
         
        
        <button className="book-now-button">Book Now</button>
        </div>
      </div>
    );
  };

  return (
    <div className="tour-landing-page">
      {slides.map((slide, index) => renderSlide(slide, index))}
    </div>
  );
};

export default TourLandingPage;
