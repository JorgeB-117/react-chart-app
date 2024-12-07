// Task 3: Implement Specific Chart Components

import React from 'react';
import ChartComponent from './ChartComponent';

const BarChart = ({ data }) => {
  if (!data || !data.months || !data.sales) {
    return <div>No data available</div>;
  }

  const barChartData = {
    labels: data.months,
    datasets: [
      {
        label: 'Monthly Sales',
        data: data.sales,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const barChartOptions = {
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Sales'
        }
      },
      x: {
        title: {
          display: true,
          text: 'Month'
        }
      }
    },
    plugins: {
      title: {
        display: true,
        text: 'Monthly Sales Data'
      }
    }
  };

  return (
    <ChartComponent 
      type="bar" 
      data={barChartData} 
      options={barChartOptions} 
    />
  );
};

export default BarChart;