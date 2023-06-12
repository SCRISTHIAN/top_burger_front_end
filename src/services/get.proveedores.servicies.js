import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "./services"

export const getProveedoresItems= createAsyncThunk(
    'proveedores/getProveedoresItems',
    async()=>{
        try{
           const res= await fetch(baseUrl + '/proveedores').then(res => res.json());
            // dispatch(agregarProveedor({...res}));
            return res;
        }catch(error){
            print(error)
        }
    }
) 

