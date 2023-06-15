import { createSlice } from '@reduxjs/toolkit';

import {getIoItems} from '../../services/get.io.services';
const ioItems = [];
const initialState = {
  ioItems
};

export const ioSlice=createSlice({
    name: 'io',
    initialState,
    reducers: {
    },
    extraReducers:(builder)=>{
      builder.addCase(getIoItems.fulfilled,(state,action)=>{
        state.ioItems=action.payload
      })
    }
    
}
)

  export default ioSlice.reducer;