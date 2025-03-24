import React from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from "chart.js";
  import { Bar } from "react-chartjs-2";
  

  ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
  

const StackedBarChart = ({ submissions }) => {
  const data = {
    labels: submissions.map((sub) => sub.name), // Submission names
    datasets: [
      {
        label: "Clarity",
        data: submissions.map((sub) => sub.parameters.Clarity),
        backgroundColor: "#FFCC99", // Light orange
      },
      {
        label: "Presentation",
        data: submissions.map((sub) => sub.parameters.Presentation),
        backgroundColor: "#FF9999", // Light red
      },
      {
        label: "Research",
        data: submissions.map((sub) => sub.parameters.Research),
        backgroundColor: "#99CCFF", // Light blue
      },
      {
        label: "Originality",
        data: submissions.map((sub) => sub.parameters.Originality),
        backgroundColor: "#99FF99", // Light green
      },
      {
        label: "Relevance",
        data: submissions.map((sub) => sub.parameters.Relevance),
        backgroundColor: "#FFD699", // Light yellow
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: "top",
      },
    },
    scales: {
      x: {
        stacked: true, // Enable stacking
      },
      y: {
        stacked: true, // Enable stacking
        beginAtZero: true,
      },
    },
    responsive: true,
  };

  return <Bar data={data} options={options} />;
};

export default StackedBarChart;
