
import {  createSlice } from '@reduxjs/toolkit';
import {getPlatosItems} from '../../services/get.platos.services';
const platos = [];
const initialState = {
  platos
};

export const platosSlice = createSlice({
  name: 'platos',
  initialState,
  reducers: {
    agregarPlato: (state, action) => {
      state.push(action.payload);
    },
    eliminarPlato: (state, action) => {
      return state.filter(plato => plato.id !== action.payload);
    },
    actualizarPlato: (state, action) => {
      const { id, nombre, precio, tiempo, url } = action.payload;
      const platoActualizado = state.find(plato => plato.id === id);
      if (platoActualizado) {
        platoActualizado.nombre = nombre;
        platoActualizado.precio = precio;
        platoActualizado.tiempo = tiempo;
        platoActualizado.url = url;
      }
    },

  },
  extraReducers:(builder)=>{
    builder.addCase(getPlatosItems.fulfilled,(state,action)=>{
      state.platos=action.payload
    })
  }
});

export const {agregarPlato,eliminarPlato,actualizarPlato}=platosSlice.actions;

export default platosSlice.reducer;