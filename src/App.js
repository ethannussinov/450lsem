import React, { useState } from 'react';
import 'leaflet/dist/leaflet.css';
import StLouisMap from './components/StLouisMap';
import './App.css';

const App = () => {
  return (
    <div>
      <h1>St. Louis District Map</h1>
      <StLouisMap />
    </div>
  );
};

export default App;
