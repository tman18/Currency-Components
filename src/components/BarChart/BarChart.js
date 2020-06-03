import React from 'react';
import './BarChart.css';

function BarChart(props) {
    function calculateBarHeight(exchangeRate) {
        let height = 50 / exchangeRate
        return height
      }

  return (
        <div className="graph-data" id="graph-location">
          {
            props.apiData.filter(([currency, exchangeRate]) => props.displayCountries.includes(currency)).map(([currency, exchangeRate]) => (
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
  );
}

export default BarChart;