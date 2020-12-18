import React, {useEffect,useRef} from 'react';
import './Map.css'
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
mapboxgl.accessToken =
  "pk.eyJ1Ijoibm90YWxlbWVzYSIsImEiOiJjazhiOTZnb2gwM3NxM2ZucGp1Z21mNjZ0In0.Z4nS6wdB4WzflkDItyXSIQ";

function Map({ center, zoom }){
    const mapboxElRef = useRef(null); // DOM element to render map

  // Initialize our map
  useEffect(() => {
    // Mapbox functionality goes here
    new mapboxgl.Map({
      container: mapboxElRef.current,
      style: "mapbox://styles/notalemesa/ck8dqwdum09ju1ioj65e3ql3k",
      center: center,
      zoom: zoom, // initial zoom
    });
  });
    
  return (
        <div className='map' >
            <div className='mapContainer'>
                <div className="mapBox" ref={mapboxElRef} />
            </div>
        </div>
    )
}

export default Map
