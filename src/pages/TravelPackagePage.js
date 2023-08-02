import React from 'react';
import './TravelPackagePage.css';

const travelPackages = [
  {
    id: 1,
    name: 'Ooty',
    price: 499,
    days: '5 days 6 nights',
    accommodation: '5 star',
    transportation: 'Transportation included',
    food: 'Food facilities available',
    reviewCount: 2544,
    imageSrc: 'https://img.freepik.com/free-photo/small-house-built-peaceful-green-hill-high-up-mountains_181624-8241.jpg?w=900&t=st=1690958375~exp=1690958975~hmac=7fc245d9c74b0287fca3278d97c49913d5147b7eb37a93cb2b191aa84a2eed36', // Replace with actual image path
  },
  {
    id: 2,
    name: 'Kerala',
    price: 799,
    days: '6 days 5 nights',
    accommodation: '4 star',
    transportation: 'Transportation included',
    food: 'Meals included',
    reviewCount: 1898,
    imageSrc: 'https://img.freepik.com/premium-photo/houseboat-alappuzha-backwaters-kerala_78361-13386.jpg?size=626&ext=jpg&uid=R104530040&ga=GA1.2.1700164988.1685182975&semt=sph', // Replace with actual image path
  },
  {
    id: 3,
    name: 'Goa',
    price: 799,
    days: '6 days 5 nights',
    accommodation: '4 star',
    transportation: 'Transportation included',
    food: 'Meals included',
    reviewCount: 1898,
    imageSrc: 'https://img.freepik.com/free-photo/beautiful-tropical-beach-sea_74190-6772.jpg?size=626&ext=jpg&uid=R104530040&ga=GA1.2.1700164988.1685182975&semt=sph', // Replace with actual image path
  },
  {
    id: 4,
    name: 'Mysore',
    price: 499,
    days: '5 days 6 nights',
    accommodation: '5 star',
    transportation: 'Transportation included',
    food: 'Food facilities available',
    reviewCount: 2544,
    imageSrc: 'https://img.freepik.com/free-photo/beautiful-shot-isa-khan-s-tomb-delhi-india-cloudy-sky_181624-20750.jpg?size=626&ext=jpg&uid=R104530040&ga=GA1.2.1700164988.1685182975&semt=sph', // Replace with actual image path
  },
  {
    id: 5,
    name: 'Kashmir',
    price: 499,
    days: '5 days 6 nights',
    accommodation: '5 star',
    transportation: 'Transportation included',
    food: 'Food facilities available',
    reviewCount: 2544,
    imageSrc: 'https://img.freepik.com/premium-photo/one-most-beautiful-countries-that-travel-kasmir_924629-11822.jpg?size=626&ext=jpg&uid=R104530040&ga=GA1.2.1700164988.1685182975&semt=sph', // Replace with actual image path
  },
  {
    id: 6,
    name: 'Karnataka',
    price: 499,
    days: '5 days 6 nights',
    accommodation: '5 star',
    transportation: 'Transportation included',
    food: 'Food facilities available',
    reviewCount: 2544,
    imageSrc: 'https://img.freepik.com/free-photo/buddha-statue-wat-mahathat-temple-precinct-sukhothai-historical-park_335224-907.jpg?size=626&ext=jpg&uid=R104530040&ga=GA1.2.1700164988.1685182975&semt=sph', // Replace with actual image path
  },
];

const TravelPackagePage = () => {
  return (
    <section className="travel-package-page">
      <div className="container">
        <div className="page-header text-center">
          <h2>Special Travel Packages</h2>
         
        </div>
        <div className="package-list">
          {travelPackages.map((TravelPackage) => (
            <div key={TravelPackage.id} className="package-item">
              <img
                src={TravelPackage.imageSrc}
                alt={`Package: ${TravelPackage.name}`}
              />
              <div className="package-details">
                <h3>{TravelPackage.name}</h3>
                <p className="price">${TravelPackage.price}</p>
                <p>{TravelPackage.days}</p>
                <p>{TravelPackage.accommodation}</p>
                <p>{TravelPackage.transportation}</p>
                <p>{TravelPackage.food}</p>
                <div className="review">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <i key={index} className="fa fa-star"></i>
                  ))}
                  <span>{TravelPackage.reviewCount} reviews</span>
                </div>
                <button className="book-button">Book Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
     <button className='btn btn-primary'>Discover More</button>
    </section>
  );
};

export default TravelPackagePage;
