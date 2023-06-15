import { configureStore } from '@reduxjs/toolkit';
import proveedoresReducer from './states/proveedor';
import clientesReducer from './states/cliente';
import empleadosReducer from './states/empleado';
import ingredientesReducer from './states/ingrediente';
import platosReducer from './states/plato';
import  ioReducer  from './states/io';
import  menuReducer  from './states/menu';



const store = configureStore({
    reducer: {
      proveedores: proveedoresReducer,
      clientes: clientesReducer,
      empleados: empleadosReducer,
      ingredientes: ingredientesReducer,
      platos: platosReducer,
      io: ioReducer,
      menu: menuReducer,
    },
  }
);
  
export default store;