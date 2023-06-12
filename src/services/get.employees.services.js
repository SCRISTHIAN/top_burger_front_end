import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "./services"

export const getEmpleadosItems= createAsyncThunk(
    'empleados/getEmpleadosItems',
    async()=>{
        try{
           const res= await fetch(baseUrl + '/empleados').then(res => res.json());
           return res;
    
        }catch(error){
            throw new Error('Error al obtener los ingredientes: ' + error.message);
        }
    }
)

