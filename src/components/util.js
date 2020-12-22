import React from "react";
import numeral from "numeral";
import {Popup, Layer, Feature} from 'react-mapbox-gl';

const casesTypeColors = {
  cases: {
    hex: "#CC1034",
    multiplier: 800,
  },
  recovered: {
    hex: "#7dd71d",
    multiplier: 1200,
  },
  deaths: {
    hex: "#fb4443",
    multiplier: 2000,
  },
};

export const sortData = (data) =>{
    const sortedData = [...data];
   return sortedData.sort((a,b)=> ((a.cases > b.cases) ? - 1 : 1))} 


export const prettyPrintStat = (stat) =>
  stat ? `+${numeral(stat).format("0.0a")}` : "+0";

export const showDataOnMap = (data , casesType = 'cases') =>
  data.map((country) => (
    
   
    
    <Layer
      id='clusters'
      type='circle'
      paint={{ 
         'circle-radius':  Math.sqrt(country[casesType]) * casesTypeColors[casesType].multiplier,
         'circle-color': casesTypeColors[casesType].hex,
         'circle-opacity': 0.4
      }}
      {...console.log(Math.sqrt(country[casesType]) * casesTypeColors[casesType].multiplier)}
      >  
      
      <Feature countries={[country.countryInfo.long, country.countryInfo.lat]}/>
      
      <Popup>
        <div className='info-container'>
          <div
            className='info-flag'
            style={{ backgroundImage: `url(${country.countryInfo.flag})` }}
          ></div>
          <div className='info-name'>{country.country}</div>
          <div className='info-confirmed'>
            Cases: {numeral(country.cases).format('0,0')}
          </div>
          <div className='info-recovered'>
            Recovered: {numeral(country.recovered).format('0,0')}
          </div>
          <div className='info-deaths'>
            Deaths: {numeral(country.deaths).format('0,0')}
          </div>
        </div>
      </Popup>
    </Layer>
  ))
