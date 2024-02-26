import { useState } from 'react';

function Location() {
  const [location, setLocation] = useState(null);

  // Default location
  const defaultLocation = { latitude: 40.7128, longitude: -74.0060 }; // New York City

  // Function to get the user's location
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      setLocation(`Geolocation is not supported by this browser. Defaulting to New York City.`);
    }
  }

  // Function to show the user's position
  const showPosition = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    setLocation(`Latitude: ${latitude}, Longitude: ${longitude}`);
  }

  // Set default location when the component mounts
  useState(() => {
    setLocation(`Latitude: ${defaultLocation.latitude}, Longitude: ${defaultLocation.longitude}`);
  }, []);

  return (
    <div>
      <h2>Get User Location</h2>
      <button onClick={getLocation}>Get My Location</button>
      {location && <p>{location}</p>}
    </div>
  );
}

export default Location;
