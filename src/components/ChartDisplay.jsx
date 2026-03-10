import React from 'react';
import { Pie, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export function ChartDisplay({ income, expenses, categoryData }) {
  const pieData = {
    labels: ['Income', 'Expenses'],
    datasets: [
      {
        data: [income, expenses],
        backgroundColor: ['#10b981', '#ef4444'],
        borderWidth: 0,
      },
    ],
  };

  const categoryLabels = Object.keys(categoryData);
  const categoryValues = Object.values(categoryData);

  const barData = {
    labels: categoryLabels.length > 0 ? categoryLabels : ['No Data'],
    datasets: [
      {
        label: 'Expenses by Category',
        data: categoryValues.length > 0 ? categoryValues : [0],
        backgroundColor: [
          '#3b82f6',
          '#8b5cf6',
          '#ec4899',
          '#f59e0b',
          '#10b981',
          '#6366f1',
          '#ef4444',
          '#14b8a6',
        ],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
      },
    },
  };

  return (
    <div className="charts-container">
      <div className="chart-wrapper">
        <h3>Income vs Expenses</h3>
        <div className="chart">
          <Pie data={pieData} options={options} />
        </div>
      </div>
      
      <div className="chart-wrapper">
        <h3>Expenses by Category</h3>
        <div className="chart">
          <Bar data={barData} options={options} />
        </div>
      </div>
    </div>
  );
}