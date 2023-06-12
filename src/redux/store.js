import { configureStore } from '@reduxjs/toolkit';
import proveedoresReducer from './states/proveedor';
import clientesReducer from './states/cliente';
import empleadosReducer from './states/empleado';
import ingredientesReducer from './states/ingrediente';
import platosReducer from './states/plato';



const store = configureStore({
    reducer: {
      proveedores: proveedoresReducer,
      clientes: clientesReducer,
      empleados: empleadosReducer,
      ingredientes: ingredientesReducer,
      platos: platosReducer,
    },
  }
);
  
export default store;