// Task 3: Implement Specific Chart Components

import React from 'react';
import ChartComponent from './ChartComponent';

const BubbleChart = ({ data }) => {
  if (!data || !data.sales || !data.profits || !data.expenses) {
    return <div>No data available</div>;
  }

  const bubbleChartData = {
    datasets: [{
      label: 'Sales, Profits, and Expenses',
      data: data.months.map((_, i) => ({
        x: data.sales[i],
        y: data.profits[i],
        r: data.expenses[i] / 100 
      })),
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
      borderColor: 'rgba(53, 162, 235, 1)',
      borderWidth: 1
    }]
  };

  const bubbleChartOptions = {
    responsive: true,
    scales: {
      x: {
        type: 'linear',
        position: 'bottom',
        title: {
          display: true,
          text: 'Sales ($)',
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
        text: 'Sales, Profits, and Expenses Analysis',
        font: {
          size: 16,
          weight: 'bold'
        }
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            return [
              `Sales: $${context.raw.x}`,
              `Profits: $${context.raw.y}`,
              `Expenses: $${context.raw.r * 100}`
            ].join('\n');
          }
        }
      }
    }
  };

  return (
    <ChartComponent 
      type="bubble" 
      data={bubbleChartData} 
      options={bubbleChartOptions} 
    />
  );
};

export default BubbleChart;