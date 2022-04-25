import dataJSON from "../Data.json";

import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, defaults } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);


export function Chart(props) {

  var rawData = props.data[props.index].block.transactions[0].data.data.CarbonIntensityData;

  var ParsedData = {
      "East Midlands": rawData["East Midlands"],
      "East England": rawData["East England"],
      "West Midlands": rawData["West Midlands"],
      "North Scotland": rawData["North Scotland"],
      "South Scotland": rawData["South Scotland"],
      "South West England": rawData["South West England"],
      "North Wales and Merseyside": rawData["North Wales and Merseyside"],
      "North East England": rawData["North East England"],
      "South East England": rawData["South East England"],
      "South Wales": rawData["South Wales"],
      "North West England": rawData["North West England"],
      "Yorkshire": rawData["Yorkshire"],
      "London": rawData["London"],
      "South England": rawData["South England"]
  }

    const chartData = {
        labels: Object.keys(ParsedData),
        datasets: [
          {
            label: '#Carbon intensity in the specified area',
            data: Object.values(ParsedData),
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      };

  return (
    <section>
      <h1>Block: {props.data[props.index].block.block_number}</h1>
      <br></br>
      <Pie data={chartData} />
    </section>
  )
}

export default Chart;