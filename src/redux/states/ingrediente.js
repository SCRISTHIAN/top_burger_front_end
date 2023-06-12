
import { createSlice } from '@reduxjs/toolkit';
import { getIngredientesItems } from '../../services/get.ingredientes.services';




const ingredientes=[]
const initialState={
  ingredientes
}; 

export const ingredientesSlice = createSlice({
  name: 'ingredientes',
  initialState,

  reducers: {

    agregarIngrediente: (state, action) => {
      state.concat(action.payload); 
    },
    eliminarIngrediente: (state, action) => {
      return state.filter(ingrediente => ingrediente.id !== action.payload);
    },
    actualizarIngrediente: (state, action) => {
      const { id, nombre, stock, unidad_medida } = action.payload;
      const ingredienteActualizado = state.find(ingrediente => ingrediente.id === id);
      if (ingredienteActualizado) {
        ingredienteActualizado.nombre = nombre;
        ingredienteActualizado.stock = stock;
        ingredienteActualizado.unidad_medida = unidad_medida;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getIngredientesItems.fulfilled, (state, action) => {
      state.ingredientes=action.payload;
      
    });
    // builder.addCase(getIngredientesItems.rejected, (state, action) => {
    //   console.log(state);
    //   console.log('haosdjsao22');
    //   state.ingredientes.push(action.payload);
      
    // });
    // builder.addCase(getIngredientesItems.pending, (state, action) => {
    //   console.log(state);
    //   console.log('haosdjsao212');
    //   state.ingredientes.push(action.payload);
      
    // })
  },
  // extraReducers: (builder) => {
  //   builder.addCase(fetchIngredientes.fulfilled, (state, action) => {
  //     console.log(builder)
  //     state.loading = false;
  //     state.error = null;
  //     return action.payload; // Establecer el estado 'data' con los datos obtenidos
  //   });
  // },
  
  
});

export const {
    agregarIngrediente,
    eliminarIngrediente,
    actualizarIngrediente,
  } = ingredientesSlice.actions;
  
  export default ingredientesSlice.reducer;