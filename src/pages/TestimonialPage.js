import React, { useState } from 'react';
import './TestimonialPage.css';

const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    location: 'New York, USA',
    comment: 'Had an amazing experience with the tour!',
    image: 'https://img.freepik.com/free-photo/photo-attractive-bearded-young-man-with-cherful-expression-makes-okay-gesture-with-both-hands-likes-something-dressed-red-casual-t-shirt-poses-against-white-wall-gestures-indoor_273609-16239.jpg?w=900&t=st=1690960899~exp=1690961499~hmac=5cb5b61ded6aa2b9cce780bd8f9e05da063beb273b4d14cca6d06839eefafbbb',
  },
  {
    id: 2,
    name: 'Jane Smith',
    location: 'London, UK',
    comment: 'Best travel experience I have ever used.',
    image: 'https://img.freepik.com/free-photo/satisfied-bearded-male-customer-show-thumbs-up-approval_176420-19983.jpg?size=626&ext=jpg&uid=R104530040&ga=GA1.2.1700164988.1685182975&semt=ais',
  },
  {
    id: 3,
    name: 'John',
    location: 'Paris',
    comment: 'Amazing  travel experience I have ever used.',
    image: 'https://img.freepik.com/free-photo/beautiful-male-half-length-portrait-isolated-white-studio-background-young-emotional-hindu-man-facial-expression-human-emotions-advertising-concept-happy-showing-sign-nice-cool_155003-25249.jpg?size=626&ext=jpg&uid=R104530040&ga=GA1.1.1700164988.1685182975&semt=ais',
  },
  
];

const TestimonialPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="testimonial-page">
      <h1>Our Testimonials</h1>
      <div className="testimonial-slider">
        <button className="slider-button prev" onClick={prevSlide}>
          &#10094;
        </button>
        <div className="slider-content">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`slide ${
                index === currentIndex ? 'active' : 'inactive'
              }`}
            >
              <div className="testimonial-card">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="testimonial-img"
                />
                <p className="testimonial-text">{testimonial.comment}</p>
                <h4 className="testimonial-name">{testimonial.name}</h4>
                <span className="testimonial-location">
                  {testimonial.location}
                </span>
              </div>
            </div>
          ))}
        </div>
        <button className="slider-button next" onClick={nextSlide}>
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default TestimonialPage;
