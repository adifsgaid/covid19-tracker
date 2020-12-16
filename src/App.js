import './App.css';
import {MenuItem, Select, FormControl, Card, CardContent,} from '@material-ui/core';
import React, {useState,useEffect} from 'react';

function App() {
 
  const [countries, setCountries] = useState([]);
  
  useEffect(() => {
    const getCountriesData = async() => {
      await fetch("https://disease.sh/v3/covid-19/countries").then((response)=> response.json()).then((data)=>{
        const countries = data.map((country) =>({
          name: country.country,
          value: country.countryInfo.iso2
        }));
        setCountries(countries);
      })
    }
    getCountriesData();
  }, [])
 
  return (
    <div className="app">
      <div className="app__header">
        <h1>Covid-19 Tracker</h1>
        <FormControl className='app__dropdown'>
            <Select variant='outlined' value='abc'>
              
              {
                countries.map((country)=>
                (<MenuItem value={country.value}>{country.name}</MenuItem>))
              }

              {/* <MenuItem value='worldide'>worldide</MenuItem>
              <MenuItem value='worldide'>worldide</MenuItem>
              <MenuItem value='worldide'>worldide</MenuItem> */}
            </Select>
          </FormControl>
        </div>
        {/* title + dropDown */}

        {/* infoBoxes */}
        {/* infoBoxes */}
        {/* infoBoxes */}
        
        {/* table */}
        
        {/* graph */}
        
        {/* map */}
    
    </div>
  );
}

export default App;
