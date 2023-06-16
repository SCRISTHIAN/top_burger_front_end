import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "./services"



export const getOrdenesItems = createAsyncThunk(
    'items/getOrdenesItems',
    async()=>{
      try{
        const res = await fetch(baseUrl + '/ordenes');
  const data = await res.json();
 
  return data;
  
      }catch(error){
          throw new Error('Error al obtener el menu: ' + error.message);
      }
  }
  
  )

