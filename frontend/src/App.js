import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import axios from 'axios';

const App = () => {
  const [districts, setDistricts] = useState([]);

  useEffect(() => {
    // Fetch districts from API
    axios.get('https://your-heroku-app-url.com/api/districts')
      .then(response => setDistricts(response.data))
      .catch(error => console.error('Error fetching districts:', error));
  }, []);

  const onDistrictClick = (e, district) => {
    console.log('District clicked:', district);
    // Navigate to district-specific page
  };

  return (
    <div>
      <h1>St. Louis School District Map</h1>
      <MapContainer center={[38.6270, -90.1994]} zoom={10} style={{ height: '600px', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />
        {districts.map(district => (
          <GeoJSON
            key={district.id}
            data={district.geojson}  // Ensure geojson data is stored in PostgreSQL
            onClick={(e) => onDistrictClick(e, district)}
          />
        ))}
      </MapContainer>
    </div>
  );
};

export default App;
