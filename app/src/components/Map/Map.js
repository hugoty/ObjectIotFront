import React from 'react';

import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer , Marker , Popup} from 'react-leaflet';
import L from 'leaflet';
import Users from '../../db/users.json';
import icon from '../../assets/icon.png'

let marker = L.icon({
  iconUrl: icon,
  iconSize: new L.Point(30, 30),
});

function Map () {
    const url = window.location.href;

    let id = url.split('/')[4]
    
    return (
      <div>
        <MapContainer center={[47.217220,-1.562805]} zoom={13} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {Users[id].objects.map((value, index) => (
            <Marker key={value.id} icon={ marker } position={[value.longitude, value.latitude]}>
              <Popup>
                {value.name}
              </Popup>
            </Marker>
          ))}
        </MapContainer>

    </div> 
    );
}

export default Map;
