import './App.css';
import {MenuItem, Select, FormControl, Card, CardContent,} from '@material-ui/core';
import React, {useState,useEffect} from 'react';

function App() {
 
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState('worldide');

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
 
  const onCountryChange = async (e) => {
    const countryCode = e.target.value;
    setCountry(countryCode)
  }
  
  return (
    <div className="app">
      <div className="app__header">
        <h1>Covid-19 Tracker</h1>
        <FormControl className='app__dropdown'>
            <Select variant='outlined' onChange={onCountryChange} value={country}>
            <MenuItem value='worldide'>worldide</MenuItem>
              {
                countries.map((country)=>
                (<MenuItem value={country.value}>{country.name}</MenuItem>))
              }
            </Select>
          </FormControl>
        </div>

        <div className='app__stats'>
          {/* infoBoxes */}
          {/* infoBoxes */}
          {/* infoBoxes */}
        </div>
       
        {/* table */}
        {/* graph */}
        {/* map */}
    
    </div>
  );
}

export default App;
