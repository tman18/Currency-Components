import React from 'react';
import './Nav.css';
import SelectYear from '../SelectYear/SelectYear';

function Nav(props) {

  return (
          <div className="graph-top">
            <div className="graph-title">Yearly Currency Rates in USD</div>
            <SelectYear 
                fetchAPIData = {props.fetchAPIData}
            />
          </div>
  );
}

export default Nav;