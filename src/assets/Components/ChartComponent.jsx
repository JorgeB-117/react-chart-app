// Task 1: Create the Reusable ChartComponent

import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Chart from 'chart.js/auto';

const ChartComponent = ({ type, data, options, width = '100%', height = '400px' }) => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const ctx = chartRef.current.getContext('2d');

    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    try {
      chartInstanceRef.current = new Chart(ctx, {
        type,
        data,
        options: {
          responsive: true,
          maintainAspectRatio: true,
          ...options,
        },
      });
    } catch (error) {
      console.error('Error creating chart:', error);
    }

    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
        chartInstanceRef.current = null;
      }
    };
  }, [type, data, options]);

  return (
    <canvas 
      ref={chartRef}
      style={{ width, height }}
    />
  );
};

ChartComponent.propTypes = {
  type: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
  options: PropTypes.object,
  width: PropTypes.string,
  height: PropTypes.string,
};

export default ChartComponent;