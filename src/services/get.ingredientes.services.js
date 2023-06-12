import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "./services"



export const getIngredientesItems = createAsyncThunk(
    'ingredientes/getIngredientesItems',
    async()=>{
      try{
        const res = await fetch(baseUrl + '/ingredientes');
  const data = await res.json();
 
  return data;
  
      }catch(error){
          throw new Error('Error al obtener los ingredientes: ' + error.message);
      }
  }
  
  )

