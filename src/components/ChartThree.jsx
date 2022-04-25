import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';


export default function ChartThree(props) {

var rawDataOne = props.data[props.index1].block.transactions[0].data.data.CarbonIntensityData;
var rawDataTwo = props.data[props.index2].block.transactions[0].data.data.CarbonIntensityData;

var ParsedDataOne = {
    "East Midlands": rawDataOne["East Midlands"],
    "East England": rawDataOne["East England"],
    "West Midlands": rawDataOne["West Midlands"],
    "North Scotland": rawDataOne["North Scotland"],
    "South Scotland": rawDataOne["South Scotland"],
    "South West England": rawDataOne["South West England"],
    "North Wales and Merseyside": rawDataOne["North Wales and Merseyside"],
    "North East England": rawDataOne["North East England"],
    "South East England": rawDataOne["South East England"],
    "South Wales": rawDataOne["South Wales"],
    "North West England": rawDataOne["North West England"],
    "Yorkshire": rawDataOne["Yorkshire"],
    "London": rawDataOne["London"],
    "South England": rawDataOne["South England"]
}


var ParsedDataTwo = {
    "East Midlands": rawDataTwo["East Midlands"],
    "East England": rawDataTwo["East England"],
    "West Midlands": rawDataTwo["West Midlands"],
    "North Scotland": rawDataTwo["North Scotland"],
    "South Scotland": rawDataTwo["South Scotland"],
    "South West England": rawDataTwo["South West England"],
    "North Wales and Merseyside": rawDataTwo["North Wales and Merseyside"],
    "North East England": rawDataTwo["North East England"],
    "South East England": rawDataTwo["South East England"],
    "South Wales": rawDataTwo["South Wales"],
    "North West England": rawDataTwo["North West England"],
    "Yorkshire": rawDataTwo["Yorkshire"],
    "London": rawDataTwo["London"],
    "South England": rawDataTwo["South England"]
}


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: false,
      text: '',
    },
  },
};

const data = {
  labels: Object.keys(ParsedDataOne),
  datasets: [
    {
      label: `Data from block ${props.data[props.index1].block.block_number} (CO2 per kWh)`,
      data: Object.values(ParsedDataOne),
      backgroundColor: 'rgba(53, 162, 235, 0.5)'
    },
    {
        label: `Data from block ${props.data[props.index2].block.block_number} (CO2 per kWh)`,
        data: Object.values(ParsedDataTwo),
        backgroundColor: '#6cddc5'
    }
  ],
};

  return (
      <section>
          <h1>Data from the current block</h1>
          <Bar options={options} data={data} />
      </section>
  )
}
