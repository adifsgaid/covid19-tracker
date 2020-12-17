import React from 'react';
import { Map as LeafletMap, TileLayer } from 'leaflet';
import './Map.css'
import 'leaflet/dist/leaflet.css';

function Map() {
    return (
        <div className='map'>
          <LeafletMap>
            <TileLayer
             url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
             attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
         </LeafletMap>
        </div>
    )
}

export default Map
