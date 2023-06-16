import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "./services"



export const getVendidosItems = createAsyncThunk(
    'vendidos/getVendidosItems',
    async()=>{
      try{
        const res = await fetch(baseUrl + '/platosmasvendidos');
  const data = await res.json();
 
  return data;
  
      }catch(error){
          throw new Error('Error al obtener los vendidos: ' + error.message);
      }
  }
  
  )

