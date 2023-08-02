import React, { useState } from 'react';
import './TripPlanner.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const TripPlanner = () => {
  const [destination, setDestination] = useState('');
  const [destinationLocation, setDestinationLocation] = useState('');
  const [checkIn, setCheckIn] = useState(null);
  const [checkOut, setCheckOut] = useState(null);
  const [duration, setDuration] = useState('5');
  const [numOfPeople, setNumOfPeople] = useState('1');
  const [trips, setTrips] = useState([]);
  const [editingTripIndex, setEditingTripIndex] = useState(null);

  const [activityTitle, setActivityTitle] = useState('');
  const [activityDescription, setActivityDescription] = useState('');
  const [editingActivityIndex, setEditingActivityIndex] = useState(null);

  const handleSearch = () => {
    // Handle the search functionality here
    console.log({
      destination,
      destinationLocation,
      checkIn,
      checkOut,
      duration,
      numOfPeople,
    });
  };

  const handleAddTrip = () => {
    const newTrip = {
      destination,
      destinationLocation,
      checkIn,
      checkOut,
      duration,
      numOfPeople,
      activities: [],
    };

    setTrips([...trips, newTrip]);

    setDestination('');
    setDestinationLocation('');
    setCheckIn(null);
    setCheckOut(null);
    setDuration('5');
    setNumOfPeople('1');
  };

 

  return (
    <>
    <div className='planner'>
    <h2>Make a trip </h2>
    <div className="travel-enquiry-form">
      <div className="form-content">
      <div className="form-group">
          <h2>Destination</h2>
          
          <div className="form-row">
            <label>Location:</label>
            <div className="select-box">
              <select
                className="form-control"
                value={destinationLocation}
                onChange={(e) => setDestinationLocation(e.target.value)}
              >
                <option value="default">Enter your destination location</option>
                <option value="istanbul">Istanbul</option>
                <option value="moscow">Moscow</option>
                <option value="cairo">Cairo</option>
              </select>
            </div>
          </div>
        </div>

        <div className="form-group">
          <h2>Check In</h2>
          <div className="form-row">
            <label>Check-in Date:</label>
            <div className="check-icon">
              <DatePicker
                selected={checkIn}
                onChange={(date) => setCheckIn(date)}
                dateFormat="dd-MM-yyyy"
                minDate={new Date()}
                className="form-control"
                placeholderText="Select check-in date"
              />
            </div>
          </div>
        </div>

        <div className="form-group">
          <h2>Check Out</h2>
          <div className="form-row">
            <label>Check-out Date:</label>
            <div className="check-icon">
              <DatePicker
                selected={checkOut}
                onChange={(date) => setCheckOut(date)}
                dateFormat="dd-MM-yyyy"
                minDate={checkIn || new Date()}
                className="form-control"
                placeholderText="Select check-out date"
              />
            </div>
          </div>
        </div>

        <div className="form-group">
          <h2>Duration</h2>
          <div className="form-row">
            <label>Duration (days):</label>
            <div className="select-box">
              <select
                className="form-control"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
              >
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="20">20</option>
              </select>
            </div>
          </div>
        </div>

        <div className="form-group">
          <h2>Number of People</h2>
          <div className="form-row">
            <label>Number of People:</label>
            <div className="select-box">
              <select
                className="form-control"
                value={numOfPeople}
                onChange={(e) => setNumOfPeople(e.target.value)}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="4">4</option>
                <option value="8">8</option>
              </select>
            </div>
          </div>
        </div>

        <div className="form-buttons">
        
          <button className="btn add-trip-btn" onClick={handleAddTrip}>
            Add Trip
          </button>
        </div>
      </div>

      <div className="trip-activities">
        <h2>Created Trips</h2>
        {trips.length > 0 ? (
          <ul>
            {trips.map((trip, index) => (
              <li key={index}>
                <strong>{trip.destination}</strong> - {trip.destinationLocation}
                <br />
                Check-in: {trip.checkIn ? trip.checkIn.toLocaleDateString() : ''},
                Check-out: {trip.checkOut ? trip.checkOut.toLocaleDateString() : ''}
                <br />
                Duration: {trip.duration} days, Number of People: {trip.numOfPeople}
                <br />
                <button onClick={() => handleEditTrip(index)}>Edit</button>
                <button onClick={() => handleDeleteTrip(index)}>Delete</button>
                {editingTripIndex === index && (
                  <div className="activity-form">
                    <div className="form-group">
                      <input
                        type="text"
                        placeholder="Title"
                        value={activityTitle}
                        onChange={(e) => setActivityTitle(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <textarea
                        placeholder="Description"
                        value={activityDescription}
                        onChange={(e) => setActivityDescription(e.target.value)}
                      ></textarea>
                    </div>
                    <div className="form-buttons">
                      {editingActivityIndex !== null ? (
                        <>
                          <button className="btn save-activity-btn" onClick={handleSaveActivity}>
                            Save Activity
                          </button>
                          <button
                            className="btn cancel-activity-btn"
                            onClick={() => setEditingActivityIndex(null)}
                          >
                            Cancel
                          </button>
                        </>
                      ) : (
                        <button className="btn add-activity-btn" onClick={handleAddActivity}>
                          Add Activity
                        </button>
                      )}
                    </div>
                    <ul className="activity-list">
                      {trip.activities.map((activity, activityIndex) => (
                        <li key={activityIndex}>
                          <strong>{activity.title}</strong>
                          <p>{activity.description}</p>
                          <div className="activity-actions">
                            <button onClick={() => handleEditActivity(index, activityIndex)}>Edit</button>
                            <button onClick={() => handleDeleteActivity(index, activityIndex)}>Delete</button>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        ) : (
          <p>No trips created yet.</p>
        )}
      </div>
    </div>
    </div>
    </>
  );
};

export default TripPlanner;
