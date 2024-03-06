import React from "react";

function RideOptionCard({ rideOption, onSelectRideOption }) {
  const { vehicleInfo, amount, imageSrc, estimatedTime } = rideOption;

  const handleClick = () => {
    onSelectRideOption(rideOption);
  };

  return (
    <div className="ride-option" onClick={handleClick}>
      <img src={imageSrc} alt={vehicleInfo} className="ride-option-image" />
      <div className="ride-option-details">
        <h3>{vehicleInfo}</h3>
        <p>Amount: {amount}</p>
        <p>Estimated Arrival Time: {estimatedTime}</p>
      </div>
    </div>
  );
}

export default RideOptionCard;
