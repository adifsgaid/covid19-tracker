import './App.css';
import {MenuItem, Select, FormControl, Card, CardContent } from '@material-ui/core';
import React, {useState,useEffect} from 'react';
import InfoBox from './components/infoBox';
import Map from './components/Map';
import Table from './components/Table';
import { sortData } from './components/util';
import LineGraph  from './components/LineGraph';
import 'leaflet/dist/leaflet.css';

function App() {
 
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("worldwide");
  const [countryInfo, setCountryInfo] = useState({});
  const [tableData,setTableData] = useState([]);
 
  useEffect(()=>{
    fetch('https://disease.sh/v3/covid-19/all').then(response => response.json()).then(data =>{
      setCountryInfo(data);
    })
  },[]);

  useEffect(() => {
    const getCountriesData = async() => {
      await fetch("https://disease.sh/v3/covid-19/countries").then((response)=> response.json()).then((data)=>{
        const countries = data.map((country) =>({
          name: country.country,
          value: country.countryInfo.iso2,
        }));
        const sortedData = sortData(data)
        setTableData(sortedData); 
        setCountries(countries);
      })
    }
    getCountriesData();
  }, []);
 
  const onCountryChange = async (e) => {
    const countryCode = e.target.value;
    
    setCountry(countryCode)
    const url =
    countryCode === "worldwide"
      ? "https://disease.sh/v3/covid-19/all"
      : `https://disease.sh/v3/covid-19/countries/${countryCode}`;
    await fetch(url).then(response => response.json()).then(data => {
      setCountry(countryCode);
      setCountryInfo(data);
    })
  }
  
  return (
    <div className="app">
     <div className='app__left'>
      <div className="app__header">
        <h1>Covid-19 Tracker</h1>
        <FormControl className='app__dropdown'>
            <Select variant='outlined' onChange={onCountryChange} value={country}>
            <MenuItem value="worldwide">Worldwide</MenuItem>
              {
                countries.map((country)=>
                (<MenuItem value={country.value}>{country.name}</MenuItem>))
              }
            </Select>
          </FormControl>
        </div> 

        <div className='app__stats'>
          <InfoBox title='Coronavirus cases' cases={countryInfo.todayCases} total={countryInfo.cases}/>
          <InfoBox title='Recovered' cases={countryInfo.todayRecovered} total={countryInfo.recovered}/>
          <InfoBox title='Deaths' cases={countryInfo.todayDeaths} total={countryInfo.deaths} />
        </div>
        <Map 
          center={mapCenter}
          zoom={mapZoom}/>
    </div>
    <Card className='app__right'>
     <CardContent>
        <h3>Live Cases By Country</h3>
        <Table countries={tableData}/>
        <div className='text__graph'>
        <h3 className='name__graph'>Worldwide new cases</h3><p>(Last 30 days)</p>
        </div>
        <LineGraph/>
      </CardContent>
    </Card>
  </div>
  );
} 

export default App;
 