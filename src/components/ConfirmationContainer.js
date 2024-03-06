import React from "react";

const ConfirmationContainer = ({ selectedRideOption, onConfirmRide, onBackToSelection }) => {
  return (
    <div className="confirmation-container">
      <h2>Confirm Your Ride</h2>
      <div className="selected-option-card">
        <img src={selectedRideOption.imageSrc} alt={selectedRideOption.vehicleType} />
        <div className="ride-option-details">
          <h3>{selectedRideOption.vehicleType}</h3>
          <p>{selectedRideOption.vehicleInfo}</p>
          <p>Amount: ${selectedRideOption.amount}</p>
          <p>Estimated Time: {selectedRideOption.estimatedTime}</p>
        </div>
      </div>
      <button className="confirm-button" onClick={onConfirmRide}>Confirm</button>
      <button className="back-button" onClick={onBackToSelection}>Back</button>
    </div>
  );
};

export default ConfirmationContainer;
