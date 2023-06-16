


import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "./services"

export const getIoItems= createAsyncThunk(
    'io/ioItems',
    async()=>{
        try{
           const res= await fetch(baseUrl + '/adquisicion').then(res => res.json());
            return res;
        }catch(error){
            print(error)
        }
    }
) 
// export const getDicIoItems= createAsyncThunk(
//     'io/ioItems',
//     async()=>{
//         try{
//            const res= await fetch(baseUrl + '/adquisiciontablepapa').then(res => res.json());
//             return res;
//         }catch(error){
//             print(error)
//         }
//     }
// ) 


