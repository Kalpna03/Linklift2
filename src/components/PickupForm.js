import React from "react";

function PickupForm({ pickupLocation, dropLocation, date, seats, onPickupLocationChange, onDropLocationChange, onDateChange, onSeatsChange, onFindRide }) {
  return (
    <div className="box-with-circular-ends">
      <div className="header">
        <h2><strong>Where can we Pickup?</strong></h2>
      </div>
      <div className="form-container">
        <div className="pickup-location">
          <input
            type="text"
            placeholder="Add a pickup location"
            value={pickupLocation}
            onChange={(e) => onPickupLocationChange(e.target.value)}
          />
        </div><br />
        <div className="drop-location">
          <input
            type="text"
            placeholder="Enter Your Destination"
            value={dropLocation}
            onChange={(e) => onDropLocationChange(e.target.value)}
          />
        </div><br />
        <div className="date">
          <input
            type="date"
            placeholder="Date"
            value={date}
            onChange={(e) => onDateChange(e.target.value)}
          />
        </div><br />
        <div className="seats">
          <input
            type="number"
            placeholder="Number of seats"
            value={seats}
            min="1"
            onChange={(e) => onSeatsChange(e.target.value)}
          />
        </div><br />
        <button onClick={onFindRide}>Find Ride</button>
      </div>
    </div>
  );
}

export default PickupForm;
