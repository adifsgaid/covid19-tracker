import React from 'react';
import {MapContainer as MapLeaflet, TileLayer } from 'react-leaflet';
import './Map.css'
import 'leaflet/dist/leaflet.css';


function Map({ center, zoom }){
    return (
        <div className='map'>
          <MapLeaflet center={center} zoom={zoom}>
            <TileLayer
             url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
             attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
         </MapLeaflet>
        </div>
    )
}

export default Map
