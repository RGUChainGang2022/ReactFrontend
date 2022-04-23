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


var ParsedData = props.data[props.index].block.transactions[0].data.data.CarbonIntensityData
ParsedData = Object.values(ParsedData);

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

const labels = Object.keys(props.data[props.index].block.transactions[0].data.data.CarbonIntensityData)

const data = {
  labels,
  datasets: [
    {
      label: `Data from block ${props.data[props.index].block.block_number}`,
      data: ParsedData,
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
