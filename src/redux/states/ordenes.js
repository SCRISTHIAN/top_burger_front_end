import { createSlice } from '@reduxjs/toolkit';

import {getOrdenesItems} from '../../services/get.ordenes.services';
const ordenesItems = [];
const initialState = {
    ordenesItems
};

export const ordenesSlice=createSlice({
    name: 'ordenes',
    initialState,
    reducers: {
    },
    extraReducers:(builder)=>{
      builder.addCase(getOrdenesItems.fulfilled,(state,action)=>{
        state.ordenesItems=action.payload
      })
    }
    
}
)

  export default ordenesSlice.reducer;