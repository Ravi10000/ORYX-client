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
        pointHoverRadius: 10,
        pointHoverBackgroundColor: 'rgba(75, 192, 192, 1)',
        pointHoverBorderColor: 'rgba(220, 220, 220, 1)',
        pointHoverBorderWidth: 2,
        pointRadius: 0,
        pointHitRadius: 10,
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
      // plugins: {
      //   title: {
      //     display: true,
      //     text: 'Chart.js Line Chart - External Tooltips'
      //   },
      //   tooltip: {
      //     enabled: false,
      //     position: 'nearest',
      //     external: CustomToolTip
      //   }
      // }
    },
  };

  return (
    <div>
      <Line data={data} options={options} />
    </div>
  );
};

export default AreaChart