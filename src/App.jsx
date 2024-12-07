// Task 4: Fetch Data for Charts

import React, { useState, useEffect } from 'react';
import './App.css'; 
import BarChart from './components/BarChart';
import LineChart from './components/LineChart';
import ScatterChart from './components/ScatterChart';
import BubbleChart from './components/BubbleChart';

const App = () => {
  const [chartData, setChartData] = useState(null);
  const [dateRange, setDateRange] = useState('all'); 
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