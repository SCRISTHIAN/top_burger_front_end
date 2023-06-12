
import React from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Bar } from 'react-chartjs-2';
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' ,
      },
      title: {
        display: true,
        text: 'INGREDIENTES',
      },
    },
  };

  const labels = ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4'];
  const data1 =  Array.from({ length: labels.length }, () => Math.floor(Math.random() * 60) + 1);
  const data2 = Array.from({ length: labels.length }, () => Math.floor(Math.random() * 60) + 1);
  const data3 = Array.from({ length: labels.length }, () => Math.floor(Math.random() * 60) + 1);
  export const data = {
    labels,
    datasets: [
        {
          label: 'PAPA',
          data: data1,
          backgroundColor: '#00ff40',
        },
        {
          label: 'CARNE',
          data: data2,
          backgroundColor: "#FF8000",
        },
        {
            label: 'MAYONESA',
            data: data3,
            backgroundColor: "#00ffff",
          },
      ],
  };
  
export function BarraGraph() {
    return <Bar options={options} data={data} />;
}
  
  