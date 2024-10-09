import React, { useState } from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import topojson from 'topojson-client';

const App = ({ geoData }) => {
  const [activeDistrict, setActiveDistrict] = useState(null);

  // Handle when a district is clicked
  const onEachDistrict = (district, layer) => {
    const districtName = district.properties.name;

    // Add hover effect
    layer.on({
      mouseover: (e) => {
        layer.setStyle({
          fillOpacity: 0.7,
        });
      },
      mouseout: (e) => {
        layer.setStyle({
          fillOpacity: 0.5,
        });
      },
      click: () => {
        setActiveDistrict(districtName);
      },
    });
  };

  return (
    <div>
      <MapContainer style={{ height: "600px", width: "100%" }} center={[38.6270, -90.1994]} zoom={11}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {geoData && (
          <GeoJSON
            data={geoData}
            onEachFeature={onEachDistrict}
            style={{
              fillColor: '#3388ff',
              weight: 2,
              opacity: 1,
              color: 'white',
              fillOpacity: 0.5,
            }}
          />
        )}
      </MapContainer>

      {activeDistrict && (
        <div className="info-box">
          <h4>District Info</h4>
          <p>{activeDistrict}</p>
        </div>
      )}
    </div>
  );
};

export default App;
