import React, { useState, useEffect } from 'react';
import './App.css';
import Nav from './components/Nav/Nav.js';
import BarChart from './components/BarChart/BarChart.js';


function App() {
  const [apiData, setApiData] = useState([])
  const [displayCountries, setDisplayCountries] = useState(["EUR", "USD", "AUD", "GBP", "BRL"])
  function fetchAPIData() {
    let dropdown = document.querySelector('#date-dropdown');
    let year = dropdown.options[dropdown.selectedIndex].value;
    fetch(`https://api.exchangeratesapi.io/${year}-01-01?base=USD`)
    .then(response => response.json())
    .then(data => {
    const newData = Object.entries(data.rates);
    newData.sort()
    setApiData(newData)
    });
  }

  useEffect(fetchAPIData, []);

  return (
    <div className="graph">
        <Nav 
          fetchAPIData = {fetchAPIData}
        />
        <BarChart
          apiData = {apiData}
          displayCountries = {displayCountries}
        />
          
        </div>
  );
}

export default App;
