
import { createSlice } from '@reduxjs/toolkit';
import {getEmpleadosItems} from "../../services/get.employees.services";
const empleados = [];
const initialState = {
  empleados
};

export const empleadosSlice = createSlice({
  name: 'empleados',
  initialState,
  reducers: {
    agregarEmpleado: (state, action) => {
      state.push(action.payload);
    },
    eliminarEmpleado: (state, action) => {
      return state.filter(empleado => empleado.id !== action.payload);
    },
    actualizarEmpleado: (state, action) => {
      const { id, nombre, usuario, contrasenia, rol } = action.payload;
      const empleadoActualizado = state.find(empleado => empleado.id === id);
      if (empleadoActualizado) {
        empleadoActualizado.nombre = nombre;
        empleadoActualizado.usuario = usuario;
        empleadoActualizado.contrasenia = contrasenia;
        empleadoActualizado.rol = rol;
      }
    },
    // otros reducers específicos para el modelo EmpleadoInfo
  },
  extraReducers:(builder)=>{
    builder.addCase(getEmpleadosItems.fulfilled,(state,action)=>{
      state.empleados=action.payload
    })
  }
});

export const {
  agregarEmpleado,
  eliminarEmpleado,
  actualizarEmpleado,
  // otros actions específicos para el modelo EmpleadoInfo
} = empleadosSlice.actions;

export default empleadosSlice.reducer;