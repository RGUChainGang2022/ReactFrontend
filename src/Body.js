import React from 'react';
import "./components/css/body_styles.css"
import Chart from "./components/ChartOne"

function AppBody(){
    return (
      <div>
        <div className="row">
            <div className="column">
              <h1>Test</h1>
            </div>
      </div>
      <div className="row">
            <div className="column">
              <Chart/>
            </div>
            <div className="column">
            <h2>Test test</h2>
            </div>
      </div>
      <div className="row">
            <div className="column">
              <h2>Test test</h2>
            </div>
            <div className="column">
            <h2>Test test</h2>
            </div>
      </div>
      </div>
    );
  }


export default AppBody;
