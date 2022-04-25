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


export default function ChartTwo(props) {

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

const labels = Object.keys(ParsedData);

const data = {
  labels,
  datasets: [
    {
      label: `Data from block ${props.data[props.index].block.block_number}`,
      data: Object.values(ParsedData),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
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
