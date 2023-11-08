import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);
import CustomToolTip from "./CustomToolTip"

const AreaChart = ({ gradientHeight }) => {
    // Create a linear gradient for the fill
    const ctx = document.createElement('canvas').getContext('2d');
    const gradient = ctx.createLinearGradient(0, 0, 0, gradientHeight || 350);
    gradient.addColorStop(0.3, 'rgba(1, 50, 32, 0.4)');
    gradient.addColorStop(1, 'rgba(255, 255, 255, 0.5)'); // Change this color as needed
  
  
  const data = {
    labels: ['June', 'July', 'August', 'September', 'October', 'November', 'December', 'January', 'February'],
    datasets: [
      {
        label: 'Price History',
        fill: true,
        // stepped: 'after', // Use stepped interpolation
        backgroundColor: gradient,
        borderColor: 'rgba(1, 50, 32, 1)',
        borderCapStyle: 'round',
        borderJoinStyle: 'miter',
        // pointBorderColor: 'rgba(75, 192, 192, 1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 0,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(1, 50, 32, 1)',
        pointHoverBorderColor: 'rgba(1, 50, 32, 1)',
        pointHoverBorderWidth: 2,
        pointRadius: 0,
        pointHitRadius: 5,
        data: [60, 65, 59, 80, 81, 66, 65, 60, 65],
      },
    ],
  };


  const options = {
    scales: {
      x: {
        display: true,
        title: {
          display: true,
          text: '',
        },
      },
      y: {
        display: true,
        title: {
          display: true,
          text: 'Price',
        },
      },
    },
    responsive: true,
    plugins: {
      legend: {
        display: true ,
        text: 'Custom Chart Subtitle'
      },
      tooltip: {
        // borderColor: "red"
      }
    }
  };

  return (
    <div>
      <Line data={data} options={options} />
    </div>
  );
};

export default AreaChart