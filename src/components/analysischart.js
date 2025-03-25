import React from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const AnalysisChart = ({ submissions }) => {
  
  const maxMarks = Math.max(...submissions.map((sub) => sub.marks)); 
  const lowThreshold = maxMarks * 0.4;
  const mediumThreshold = maxMarks * 0.8;

  const categories = { Low: 0, Medium: 0, High: 0 };
  submissions.forEach((sub) => {
    if (sub.marks <= lowThreshold) {
      categories.Low++;
    } else if (sub.marks <= mediumThreshold) {
      categories.Medium++;
    } else {
      categories.High++;
    }
  });

  
  const data = {
    labels: ["Rejected", "Hold", "Shortlisted"],
    datasets: [
      {
        label: "Submission Categories",
        data: [categories.Low, categories.Medium, categories.High],
        backgroundColor: ["#ffcccc", "#FFFACD", "#DFF2DF"], 
        borderColor: ["#990000", "#B8860B", "#228B22"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `${tooltipItem.label}: ${tooltipItem.raw} submissions`;
          },
        },
      },
    },
  };

  return <Doughnut data={data} options={options} />;
};

export default AnalysisChart;
