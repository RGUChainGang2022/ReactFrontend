import React from 'react';
import "./components/css/body_styles.css"
import Stats from "./components/InfoDisplay"

import ChartOne from "./components/ChartOne"
import ChartTwo from "./components/ChartTwo"


function AppBody(props){
    return (
      <div>
        <div className="row">
            <div className="column">
              <Stats data={props.data}/>
            </div>
            <div className="column">
              <ChartTwo data={props.data} index={props.data.length -1}/>
            </div>
        </div>

        <center>
          <br></br>
            <h1>Data from previous blocks</h1>
          </center>

        <div className="row"> 
          <div className="column">
              <ChartOne data={props.data} index={props.data.length -2}/>
            </div>
            <div className="column">
              <ChartOne data={props.data} index={props.data.length -3}/>
            </div>
            <div className="column">
              <ChartOne data={props.data} index={props.data.length -4}/>
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
