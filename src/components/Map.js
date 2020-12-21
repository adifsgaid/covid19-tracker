import React from 'react';
import './Map.css'
import ReactMapboxGl from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { showDataOnMap } from "./util";

const MapToken = ReactMapboxGl ({accessToken:`${process.env.REACT_APP_API_KEY_MAPBOX}`});

function Map({ center, zoom, countries, casesType }){
  return (
        <div className='map'>
            <div className='mapContainer'>
                <div className="mapBox" >
                <MapToken
                    style="mapbox://styles/mapbox/streets-v9"
                    containerStyle={{
                      height: '100%',
                      width: '100%',

                    }}
                    zoom={[zoom]}
                    center={center}
                    >     
                  {showDataOnMap(countries, casesType)}
                  </MapToken>
                  </div>       
            </div>
        </div>
    )
}

export default Map
