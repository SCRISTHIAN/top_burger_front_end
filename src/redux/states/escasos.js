import { createSlice } from '@reduxjs/toolkit';

import {getEscasosItems} from '../../services/get.escasos';
const escasosItems = [];
const initialState = {
  escasosItems
};

export const escasosSlice=createSlice({
    name: 'escasos',
    initialState,
    reducers: {
    },
    extraReducers:(builder)=>{
      builder.addCase(getEscasosItems.fulfilled,(state,action)=>{
        state.escasosItems=action.payload
      })
    }
}
)

  export default escasosSlice.reducer;