import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "./services"



export const getMenuItems = createAsyncThunk(
    'menu/getMenuItems',
    async()=>{
      try{
        const res = await fetch(baseUrl + '/menudeldia');
  const data = await res.json();
 
  return data;
  
      }catch(error){
          throw new Error('Error al obtener el menu: ' + error.message);
      }
  }
  
  )

