// Task 4: Fetch Data for Charts

import React, { useState, useEffect } from 'react';
import './App.css'; 
import BarChart from './assets/Components/BarChart';
import LineChart from './assets/Components/LineChart';
import ScatterChart from './assets/Components/ScatterChart';
import BubbleChart from './assets/Components/BubbleChart';

const App = () => {
  const [chartData, setChartData] = useState(null);
  const [dateRange, setDateRange] = useState('all'); // all dates
  const [filteredData, setFilteredData] = useState(null);

  useEffect(() => {
    fetch('/financial_data.json')
      .then((response) => response.json())
      .then((data) => {
        setChartData(data);
        setFilteredData(data);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

// Task 5: Render Charts in the App

  const filterData = (range) => {
    if (!chartData) return;
    
    const now = new Date();
    let filteredMonths;
    
    switch(range) {
      case '1m':
        filteredMonths = chartData.months.slice(-1);
        break;
      case '6m':
        filteredMonths = chartData.months.slice(-6);
        break;
      case '1y':
        filteredMonths = chartData.months.slice(-12);
        break;
      default:
        filteredMonths = chartData.months;
    }

    const startIndex = chartData.months.indexOf(filteredMonths[0]);
    
    setFilteredData({
      months: chartData.months.slice(startIndex),
      sales: chartData.sales.slice(startIndex),
      profits: chartData.profits.slice(startIndex),
      expenses: chartData.expenses.slice(startIndex)
    });
    setDateRange(range);
  };

// loading message

  if (!filteredData) {
    return (
      <div className="container">
        <div className="loading">
          <h2>Loading...</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <h1 className="header">Financial Analytics Dashboard</h1>
      
      <div className="filters">
        <button 
          className={`filter-btn ${dateRange === 'all' ? 'active' : ''}`}
          onClick={() => filterData('all')}
        >
          All Time
        </button>
        <button 
          className={`filter-btn ${dateRange === '1y' ? 'active' : ''}`}
          onClick={() => filterData('1y')}
        >
          1 Year
        </button>
        <button 
          className={`filter-btn ${dateRange === '6m' ? 'active' : ''}`}
          onClick={() => filterData('6m')}
        >
          6 Months
        </button>
        <button 
          className={`filter-btn ${dateRange === '1m' ? 'active' : ''}`}
          onClick={() => filterData('1m')}
        >
          1 Month
        </button>
      </div>

      <div className="grid">
        <div className="chart-container">
          <BarChart data={filteredData} />
        </div>
        <div className="chart-container">
          <LineChart data={filteredData} />
        </div>
        <div className="chart-container">
          <ScatterChart data={filteredData} />
        </div>
        <div className="chart-container">
          <BubbleChart data={filteredData} />
        </div>
      </div>
    </div>
  );
};

export default App;