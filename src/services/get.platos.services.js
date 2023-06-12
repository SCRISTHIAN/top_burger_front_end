import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "./services"

export const getPlatosItems=createAsyncThunk(
    'platos/getPlatosItems',
    async()=>{
        try{
           const res= await fetch(baseUrl + '/platos').then(res => res.json());
        return res;
    
        }catch(error){
            throw new Error('Error al obtener los ingredientes: ' + error.message);
        }
    }
) 

