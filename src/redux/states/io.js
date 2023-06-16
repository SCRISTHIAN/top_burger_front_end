import { createSlice } from '@reduxjs/toolkit';

import {getIoItems} from '../../services/get.io.services';
const ioItems = [];
const papa=[];
const initialState = {
  ioItems,
  papa
};
//
export const ioSlice=createSlice({
    name: 'io',
    initialState,
    reducers: {
    },
    extraReducers:(builder)=>{
      builder.addCase(getIoItems.fulfilled,(state,action)=>{
        state.ioItems=action.payload;
      })
      // .addMatcher(getDicIoItems.fulfilled, (state, action) => {
      //   state.papa = action.payload;
      // });
    }
    
}
)

  export default ioSlice.reducer;