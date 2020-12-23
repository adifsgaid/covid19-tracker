import './App.css';
import {MenuItem, Select, FormControl, Card, CardContent } from '@material-ui/core';
import React, {useState,useEffect} from 'react';
import InfoBox from './components/infoBox';
import Map from './components/Map';
import Table from './components/Table';
import numeral from 'numeral'
import { sortData, prettyPrintStat } from './components/util';
import LineGraph  from './components/LineGraph';
import 'mapbox-gl/dist/mapbox-gl.css';


function App() {
 
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState('worldwide');
  const [countryInfo, setCountryInfo] = useState({});
  const [tableData,setTableData] = useState([]);
  const [mapCenter, setMapCenter] = useState({  lng: 2.213749, lat: 46.227638 });
  const [mapZoom, setMapZoom] = useState(3);
  const [mapCountries, setMapCountries] = useState([]);
  const [casesType, setCasesType] = useState('cases');

  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/all")
      .then((response) => response.json())
      .then((data) => {
        setCountryInfo(data);
      });
  }, []);

  useEffect(() => {
    const getCountriesData = async () => {
      fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((country) => ({
            name: country.country,
            value: country.countryInfo.iso2,
          }));
          const sortedData = sortData(data);
          setCountries(countries);
          setMapCountries(data);
          setTableData(sortedData);
        });
    };

    getCountriesData();
  }, []);

  const onCountryChange = async (e) => {
    const countryCode = e.target.value;

    const url =
      countryCode === "worldwide"
        ? 'https://disease.sh/v3/covid-19/countries/'
        : `https://disease.sh/v3/covid-19/countries/${countryCode}`;
     await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCountry(countryCode);
        setCountryInfo(data);
      
        setMapCenter([data.countryInfo.long, data.countryInfo.lat]);
        setMapZoom(4);
      });
  };

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
        <InfoBox
            onClick={(e) => setCasesType("cases")}
            title="Coronavirus Cases"
            isRed
            active={casesType === "cases"}
            cases={prettyPrintStat(countryInfo.todayCases)}
            total={numeral(countryInfo.cases).format("0.0a")}
          />
          <InfoBox
            onClick={(e) => setCasesType("recovered")}
            title="Recovered"
            active={casesType === "recovered"}
            cases={prettyPrintStat(countryInfo.todayRecovered)}
            total={numeral(countryInfo.recovered).format("0.0a")}
          />
          <InfoBox
            onClick={(e) => setCasesType("deaths")}
            title="Deaths"
            isRed
            active={casesType === "deaths"}
            cases={prettyPrintStat(countryInfo.todayDeaths)}
            total={numeral(countryInfo.deaths).format("0.0a")}
          />
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
 