import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "./services"



export const getEscasosItems = createAsyncThunk(
    'escasos/getEscasosItems',
    async()=>{
      try{
        const res = await fetch(baseUrl + '/ingredientesescasos');
  const data = await res.json();
 
  return data;
  
      }catch(error){
          throw new Error('Error al obtener los escasos: ' + error.message);
      }
  }
  
  )

