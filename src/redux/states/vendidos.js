import { createSlice } from '@reduxjs/toolkit';

import {getVendidosItems} from '../../services/get.vendidos';
const vendidosItems = [];
const initialState = {
  vendidosItems
};

export const vendidosSlice=createSlice({
    name: 'vendidos',
    initialState,
    reducers: {
    },
    extraReducers:(builder)=>{
      builder.addCase(getVendidosItems.fulfilled,(state,action)=>{
        state.vendidosItems=action.payload
      })
    }
    
}
)

  export default vendidosSlice.reducer;