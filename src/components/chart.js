import React from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";

// Register Chart.js components
ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const RadarChart = ({ parameters }) => {
  // Prepare data for the radar chart
  const labels = parameters.map((param) => param.parameter);
  const scores = parameters.map((param) => param.marksAwarded);

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Parameter-Wise Performance",
        data: scores,
        backgroundColor: "rgba(255, 102, 0, 0.3)", // Semi-transparent orange
        borderColor: "#ff6600", // Orange border
        borderWidth: 2,
        pointBackgroundColor: "#ff6600",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
    scales: {
      r: {
        angleLines: {
          color: "#ffcc99", // Lines between each axis
        },
        suggestedMin: 0, // Minimum value
        suggestedMax: 10, // Maximum value
        grid: {
          color: "#ffcc99", // Grid line color
        },
        ticks: {
          backdropColor: "#fff5e6", // Background behind tick labels
          color: "#333", // Tick labels color
        },
        pointLabels: {
          color: "#333", // Axis labels color
          font: {
            size: 14,
          },
        },
      },
    },
  };

  return <Radar data={data} options={options} />;
};

export default RadarChart;
