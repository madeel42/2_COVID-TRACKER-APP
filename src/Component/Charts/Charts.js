import React from 'react';
import { Bar } from 'react-chartjs-2';
import classes from './Charts.module.css'

const data = {
  labels: ['Infected', 'Recover', 'Death'],
  datasets: [
    {
      label: 'Infected',
      data: [12, 10, 3],
      backgroundColor: [
        'rgb(142, 119, 25, 0.3)'
        // 'rgba(54, 162, 235, 0.2)',
        // 'rgba(255, 206, 86, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',


      ],
      borderWidth: 1,
      responsive: true,
    },
    {
      label: 'Recover',
      data: [66, 13, 56],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        // 'rgba(54, 162, 235, 0.2)',
        // 'rgba(255, 206, 86, 0.2)',

      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',


      ],
      borderWidth: 1,
      responsive: true,
    },
    {
      label: 'Death',
      data: [52, 96, 55],
      backgroundColor: [
        'rgb(39, 189, 149, 0.1)',

      ],
      borderColor: [
        'rgb(39, 189, 149, 0.1)',
      ],
      borderWidth: 1,
      responsive: true,
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

const VerticalBar = () => {
  return <>
   
    <div className={classes.CHARTSVIEW}>
      <Bar data={data} width={150} height={70} options={options} />
    </div>
  </>
}

export default VerticalBar;