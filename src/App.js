import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, Polyline } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import RideOptionCard from "./components/RideOptionCard"; 
import PickupForm from "./components/PickupForm";
import ConfirmationContainer from "./components/ConfirmationContainer";
import L from "leaflet";
import pickupIconUrl from "./location-icon.png";
import dropIconUrl from "./location-icon.png";
import autoImage from "./Linklift-Auto.jpg"; 
import carImage from "./Linklift-Car2.jpg"; 
import erickshawImage from "./Linklift-Erickshaw.jpg"; 
import './App.css';

const pickupIcon = new L.Icon({
  iconUrl: pickupIconUrl,
  iconSize: [38, 38],
});

const dropIcon = new L.Icon({
  iconUrl: dropIconUrl,
  iconSize: [38, 38],
});

function App() {
  const [pickupLocation, setPickupLocation] = useState("");
  const [dropLocation, setDropLocation] = useState("");
  const [date, setDate] = useState("");
  const [seats, setSeats] = useState("");
  const [rideOptions, setRideOptions] = useState([]);
  const [selectedRideOption, setSelectedRideOption] = useState(null);
  const [showRideOptions, setShowRideOptions] = useState(false);
  const [confirmRide, setConfirmRide] = useState(false);

  const findRide = () => {
    const mockRideOptions = [
      {
        id: 1,
        vehicleType: "Linklift Auto",
        vehicleInfo: "Linklift Auto",
        amount: 100,
        estimatedTime: "5 mins",
        imageSrc: autoImage 
      },
      {
        id: 2,
        vehicleType: "Linklift Car",
        vehicleInfo: "Linklift Car",
        amount: 200,
        estimatedTime: "8 mins",
        imageSrc: carImage 
      },
      {
        id: 3,
        vehicleType: "E Rickshaw",
        vehicleInfo: "Linklift Erickshaw",
        amount: 150,
        estimatedTime: "6 mins",
        imageSrc: erickshawImage 
      },
    ];
    setRideOptions(mockRideOptions);
    setShowRideOptions(true);
  };

  const handleSelectRideOption = (rideOption) => {
    setSelectedRideOption(rideOption);
    setShowRideOptions(false); // Hide ride options container
    setConfirmRide(true); // Show confirmation container
  };
  
  const handleConfirmRide = () => {
    // No need to set confirmRide again
    setShowRideOptions(false); // Hide ride options container
  };
  
  const handleBackToSelection = () => {
    setConfirmRide(false);
    setSelectedRideOption(null);
    setShowRideOptions(true); // Show ride options container again
  };
  

  return (
    <div className="App">
      {showRideOptions && !confirmRide && (
        <div className="ride-options-container">
          {rideOptions.map((rideOption) => (
            <RideOptionCard
              key={rideOption.id}
              rideOption={rideOption}
              onSelectRideOption={handleSelectRideOption}
            />
          ))}
        </div>
      )}
      {confirmRide && (
        <ConfirmationContainer
          selectedRideOption={selectedRideOption}
          onConfirmRide={handleConfirmRide}
          onBackToSelection={handleBackToSelection}
        />
      )}
      {!showRideOptions && !confirmRide && (
        <PickupForm
          pickupLocation={pickupLocation}
          dropLocation={dropLocation}
          date={date}
          seats={seats}
          onPickupLocationChange={setPickupLocation}
          onDropLocationChange={setDropLocation}
          onDateChange={setDate}
          onSeatsChange={setSeats}
          onFindRide={findRide}
        />
      )}
      <div className="map-container">
        <MapContainer center={{ lat: 28.6139, lng: 77.2090 }} zoom={15} style={{ height: "100%" }}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {pickupLocation && (
            <Marker position={{ lat: 28.6139, lng: 77.2090 }} icon={pickupIcon}>
              <Popup>Pickup Location: {JSON.stringify({ lat: 28.6139, lng: 77.2090 })}</Popup>
            </Marker>
          )}
          {dropLocation && (
            <Marker position={{ lat: 28.6129, lng: 77.2295 }} icon={dropIcon}>
              <Popup>Drop Location: {JSON.stringify({ lat: 28.6139, lng: 77.2090 })}</Popup>
            </Marker>
          )}
          {pickupLocation && dropLocation && (
            <Polyline positions={[[28.6139, 77.2090], [28.6129, 77.2295]]} color="blue" />
          )}
        </MapContainer>
      </div>
    </div>
  );
}

export default App;
