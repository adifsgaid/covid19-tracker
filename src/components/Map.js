import React from 'react';
import './Map.css'
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const MapToken = ReactMapboxGl({
  accessToken:
    'pk.eyJ1IjoiZmFicmljOCIsImEiOiJjaWc5aTV1ZzUwMDJwdzJrb2w0dXRmc2d0In0.p6GGlfyV-WksaDV_KdN27A'
});

function Map({ center, zoom }){
  return (
        <div className='map'>
           <MapToken
              style="mapbox://styles/mapbox/streets-v9"
              containerStyle={{
                height: '100%',
                width: '100%',
                center: center,
                zoom: zoom
              }}
            >
            </MapToken> 
        </div>
    )
}

export default Map
