import React from 'react';
import { Bar } from 'react-chartjs-2';
import classes from './Charts.module.css'
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

const VerticalBar = ({ SingleCountryData }) => {
  const { ActiveCases_text, TotalRecovered_text, TotalDeaths_text } = SingleCountryData
  console.log()
  const data = {
    labels: ['Infected', 'Recover', 'Death'],
    datasets: [
      {
        label: 'Country Statics',
        data: [ActiveCases_text && parseInt(ActiveCases_text && ActiveCases_text?.replace(/,/g, '')), TotalRecovered_text && parseInt(TotalRecovered_text && TotalRecovered_text?.replace(/,/g, '')), TotalDeaths_text && parseInt(TotalDeaths_text && TotalDeaths_text?.replace(/,/g, ''))],
        backgroundColor: [
          'rgba(255, 99, 132, 0.7)',
          'rgba(54, 162, 235, 0.7)',
          'rgba(255, 206, 86, 0.7)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.7)',
        ],
        borderWidth: 1,
        responsive: true,
      },
    ],
  };
  return <>

    <div className={classes.CHARTSVIEW}>
      <Bar data={data} width={150} height={70} options={options} />
    </div>
  </>
}

export default VerticalBar;