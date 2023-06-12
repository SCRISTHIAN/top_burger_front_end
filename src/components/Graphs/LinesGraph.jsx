import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};

// X1: cantidad de ingrediente restante
// X2: demanda del ingrediente 
// X3: limite de almacenamiento
// X4: caducidad
// Y: pedido a realizar al proveedor

const labels = [5,9,12,21,32,35,39,41,46,48,55,68,78,79,89,92,55, 46, 78, 89, 26, 14, 72, 89, 22];
const data0 = [15, 98, 65, 51, 87, 64, 5, 55, 46, 78, 89, 26, 14, 72, 89, 22,55, 46, 78, 89, 26, 14, 72, 89, 22];
const data1 = Array.from({ length: data0.length }, () => Math.floor(Math.random() * 100) + 1);
const data2 = Array.from({ length: data0.length }, () => Math.floor(Math.random() * 100) + 1);
const data3 = Array.from({ length: data0.length }, () => Math.floor(Math.random() * 100) + 1);
export const data = {
  labels,
  datasets: [
    {
      label: 'X1 vs Y',
      data: data1,
      borderColor:  "#FF8000",
      backgroundColor: "#FF8000",
    },
    {
      label:  'X2 vs Y',
      data: data2,
      borderColor:  '#00ff40',
      backgroundColor: '#00ff40',
    },
    {
        label:  'X3 vs Y',
        data: data3,
        borderColor: "#00ffff",
        backgroundColor: "#00ffff",
      },
  ],
};

export function LineGraph() {
  return <Line options={options} data={data} />;
}
