import React from 'react';

import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer , Marker , Popup} from 'react-leaflet';
import L from 'leaflet';

let marker = L.icon({
  iconUrl: 'icon.png',
  iconSize: new L.Point(30, 30),
});

function Map () {
    return (
      <div>
      <MapContainer center={[47.217220,-1.562805]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker icon={ marker } position={[47.217220,-1.587570]}>
          <Popup>
            My home
          </Popup>
      </Marker>
      </MapContainer>
  </div> 
    );
}

export default Map;
