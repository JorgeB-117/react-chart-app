// Task 3: Implement Specific Chart Components

import React from 'react';
import ChartComponent from './ChartComponent';

const ScatterChart = ({ data }) => {
  if (!data || !data.expenses || !data.profits) {
    return <div>No data available</div>;
  }

  const scatterChartData = {
    datasets: [{
      label: 'Expenses vs Profits',
      data: data.expenses.map((expense, index) => ({
        x: expense,
        y: data.profits[index]
      })),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1,
      pointRadius: 6,
      pointHoverRadius: 8
    }]
  };

  const scatterChartOptions = {
    responsive: true,
    scales: {
      x: {
        type: 'linear',
        position: 'bottom',
        title: {
          display: true,
          text: 'Expenses ($)',
          font: {
            size: 14,
            weight: 'bold'
          }
        }
      },
      y: {
        title: {
          display: true,
          text: 'Profits ($)',
          font: {
            size: 14,
            weight: 'bold'
          }
        }
      }
    },
    plugins: {
      title: {
        display: true,
        text: 'Expenses vs Profits Analysis',
        font: {
          size: 16,
          weight: 'bold'
        }
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            return `Expenses: $${context.parsed.x}, Profits: $${context.parsed.y}`;
          }
        }
      }
    }
  };

  return (
    <ChartComponent 
      type="scatter" 
      data={scatterChartData} 
      options={scatterChartOptions} 
    />
  );
};

export default ScatterChart;