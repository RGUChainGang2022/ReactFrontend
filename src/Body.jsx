import React from 'react';
import "./components/css/body_styles.css"
import Stats from "./components/InfoDisplay"

import ChartOne from "./components/ChartOne"
import ChartTwo from "./components/ChartTwo"
import ChartThree from './components/ChartThree';

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
            <div className="column" id="bigGraph">
            <ChartThree data={props.data} index1={props.data.length -1} index2={props.data.length - 11}/>
            </div>
      </div>
      </div>
    );
  }


export default AppBody;
