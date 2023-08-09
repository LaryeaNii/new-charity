import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './LeafMap.css'; 

const LeafletMap = () => {
  const center = [5.8656, -0.1865];

  return (
    <div className="leaflet-map-container">
      <MapContainer center={center} zoom={13} className="leaflet-map">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={center}>
          <Popup>Our Office</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default LeafletMap;
