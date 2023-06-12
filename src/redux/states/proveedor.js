import { createSlice } from '@reduxjs/toolkit';

import {getProveedoresItems} from '../../services/get.proveedores.servicies';
const proveedores = [];
const initialState = {
  proveedores
};

export const proveedoresSlice=createSlice({
    name: 'proveedor',
    initialState,
    reducers: {
      agregarProveedor: (state, action) => {
        state.proveedores.push(action.payload);
      },
      eliminarProveedor: (state, action) => {
        state.proveedores = state.proveedores.filter(proveedor => proveedor.id !== action.payload);
      },
      actualizarProveedor: (state, action) => {
        const { id, nombre, telefono, direccion } = action.payload;
        const proveedorActualizado = state.proveedores.find(proveedor => proveedor.id === id);
        if (proveedorActualizado) {
          proveedorActualizado.nombre = nombre;
          proveedorActualizado.telefono = telefono;
          proveedorActualizado.direccion = direccion;
        }
      },
      setProveedores: (state, action) => {
        state.proveedores = action.payload;
      },
    },
    extraReducers:(builder)=>{
      builder.addCase(getProveedoresItems.fulfilled,(state,action)=>{
        state.proveedores=action.payload
      })
    }
    
}
)

export const {
    agregarProveedor,
    eliminarProveedor,
    actualizarProveedor,
  } = proveedoresSlice.actions;
  
  export default proveedoresSlice.reducer;