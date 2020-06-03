import React, { useState, useEffect } from 'react';
import './App.css';
import Nav from './components/Nav/Nav.js';


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

  function calculateBarHeight(exchangeRate) {
    let height = 50 / exchangeRate
    return height
  }

  return (
    <div className="graph">
        <Nav 
          fetchAPIData = {fetchAPIData}
        />
          <div className="graph-data" id="graph-location">
          {
            apiData.filter(([currency, exchangeRate]) => displayCountries.includes(currency)).map(([currency, exchangeRate]) => (
            <div 
            className="graph-data-bar" 
            onClick={() => alert(`1 USD = ${exchangeRate.toFixed(2)} ${currency}`)} 
            style= {{height: calculateBarHeight(exchangeRate)+ "%"}}>
              <div className="graph-data-bar-country-name">
            {currency}
            </div>
            </div>
            ))
          }
          </div>
        </div>
  );
}

export default App;
