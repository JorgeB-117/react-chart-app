// Task 3: Implement Specific Chart Components

import React from 'react';
import ChartComponent from './ChartComponent';

const LineChart = ({ data }) => {
    const lineChartData = {
      labels: data.months,
      datasets: [{
        label: 'Monthly Profits',
        data: data.profits,
        borderColor: 'rgba(54, 162, 235, 1)',
        fill: false,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      }]
    };
       
  const lineChartOptions = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return <ChartComponent type="line" data={lineChartData} options={lineChartOptions} />;
};

export default LineChart;