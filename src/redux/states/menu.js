
import { createSlice } from '@reduxjs/toolkit';
import { getMenuItems } from '../../services/get.menudeldia';
const menu = [];
const initialState = {
menu
};

export const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: { 
  },
  extraReducers:(builder)=>{
    builder.addCase(getMenuItems.fulfilled,(state,action)=>{
      state.menu=action.payload
    })
  }
});


export default menuSlice.reducer;