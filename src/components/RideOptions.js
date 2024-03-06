import React from "react";
import RideOptionCard from "./RideOptionCard";

function RideOptions({ rideOptions, onSelectRideOption }) {
  return (
    <div className="ride-options-container">
      {rideOptions.map((rideOption) => (
        <RideOptionCard
          key={rideOption.vehicleNumber}
          rideOption={rideOption}
          onSelectRideOption={onSelectRideOption}
          
        />
      ))}
    </div>
  );
}

export default RideOptions;
