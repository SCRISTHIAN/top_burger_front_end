import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const clientesSlice = createSlice({
  name: 'clientes',
  initialState,
  reducers: {
    agregarCliente: (state, action) => {
      state.push(action.payload);
    },
    eliminarCliente: (state, action) => {
      return state.filter(cliente => cliente.id !== action.payload);
    },
    actualizarCliente: (state, action) => {
      const { id, nombre, telefono, direccion } = action.payload;
      const clienteActualizado = state.find(cliente => cliente.id === id);
      if (clienteActualizado) {
        clienteActualizado.nombre = nombre;
        clienteActualizado.telefono = telefono;
        clienteActualizado.direccion = direccion;
      }
    },
  },
});


export const {
    agregarCliente,
    eliminarCliente,
    actualizarCliente,
  } = clientesSlice.actions;
  
  export default clientesSlice.reducer;