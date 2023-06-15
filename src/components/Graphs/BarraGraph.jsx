
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
  
  
export function BarraGraph(props) {
  const labels = ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4'];
  const data2 = props.data["mayonesa"];
  const data3 = props.data["papa"];
  const key=Object.keys(props.data);
  const data = {
    labels,
    datasets: [
        {
          // label: Object.keys(props.data[0]),
          //label:'Mayonesa',
          label:key[0].toUpperCase(),
          data: data2,
          backgroundColor: "#FF8000",
        },
        {
            //label: Object.keys(props.data[1]),
            //lablel:'Papas',
          label:key[1].toUpperCase(),
            data: data3,
            backgroundColor: "#00ffff",
        },
      ],
  };
  console.log(props.data)
    return <
      Bar 
      options={options} 
      data={data} 
    
      />;
}
  
  