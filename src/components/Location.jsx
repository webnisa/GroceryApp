import React, { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";

const Location = () => {
  const [location, setLocation] = useState("Get Location");

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        const response = await fetch(
          `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`
        );

        const data = await response.json();

        setLocation(data.display_name);
      },

      (error) => {
        alert("Location permission denied!");
      },

         {
        enableHighAccuracy: false, // Faster
        timeout: 5000,
        maximumAge: 60000,
      }
      
    );
  };

  return (
    <div>
      <button
        className="flex items-center gap-2 w-56 h-10 px-2 overflow-hidden text-emerald-800"
        onClick={getLocation}>

        <FaLocationDot className="text-xl shrink-0" />
        <p className="truncate">{location}</p>
      </button>
    </div>
  );
};

export default Location;