import React from 'react';
import "./components/css/body_styles.css"
import Chart from "./components/Chart"
import ChartOne from "./components/ChartOne"
function AppBody(props){
    return (
      <div>
        <div className="row">
            <div className="column">
              <Chart data={props.data}/>
            </div>
        </div>

        <div className="row"> 

          <div className="column">
              <ChartOne data={props.data} index={0}/>
            </div>
            <div className="column">
              <ChartOne data={props.data} index={1}/>
            </div>
            <div className="column">
              <ChartOne data={props.data} index={2}/>
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
