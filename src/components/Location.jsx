import React, { useEffect, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";

const Location = () => {
  const [location, setLocation] = useState("Get Location");
  const [loading, setLoading] = useState(false);
  const [permission, setPermission] = useState("prompt");

  useEffect(() => {
    if (navigator.permissions) {
      navigator.permissions
        .query({ name: "geolocation" })
        .then((result) => {
          setPermission(result.state);

          result.onchange = () => {
            setPermission(result.state);
          };
        })
        .catch(() => {});
    }
  }, []);

  const getLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported in this browser.");
      return;
    }

    setLoading(true);

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const { latitude, longitude } = position.coords;

          const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
          );

          const data = await response.json();

          const address = data.address;

          const place =
            address.suburb ||
            address.neighbourhood ||
            address.city ||
            address.town ||
            address.village ||
            address.state ||
            data.display_name;

          setLocation(place);

        } 
        catch (err) {
          console.error(err);
          alert("Unable to fetch address.");
        } 
        finally {
          setLoading(false);
        }
      },
      
      (error) => {
        setLoading(false);

        switch (error.code) {
          case error.PERMISSION_DENIED:
            alert("Location permission denied.");
            break;

          case error.POSITION_UNAVAILABLE:
            alert("Location unavailable.");
            break;

          case error.TIMEOUT:
            alert("Location request timed out.");
            break;

          default:
            alert("Something went wrong.");
        }
      },
      {
        enableHighAccuracy: true,
        timeout: 30000,
        maximumAge: 0,
      }
    );
  };

  return (
    <button
      onClick={getLocation}
      disabled={loading}
      className="flex items-center gap-2 max-w-56 h-10 px-2 overflow-hidden text-emerald-800 cursor-pointer"
    >
      <FaLocationDot className="text-xl shrink-0" />

      <p className="truncate">
        {loading ? "Getting Location..." : location}
      </p>
    </button>
  );
};

export default Location;