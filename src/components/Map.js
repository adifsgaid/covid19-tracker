import React, {useEffect,useRef} from 'react';
import './Map.css'
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const MapToken = ReactMapboxGl ({accessToken:`${process.env.REACT_APP_API_KEY_MAPBOX}`});

function Map({ center, zoom }){
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
                  </MapToken>
                  </div>
            </div>
        </div>
    )
}

export default Map
