import React from "react";
import "./index.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Login from "./views/Login/Login.jsx";
import Platos from "./views/Platos/Platos.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import {Reportes} from "./views/Reportes/index.js";
import {SearchBarContainer} from "./components/SearchBarContainer/index.js";
import {NotFound} from "./views/NotFound/index.js";
import Ingredientes from "./views/Ingredientes/Ingredientes";
import Ordenes from "./views/Ordenes/Ordenes";
import MenuDelDia from "./views/MenuDelDia/MenuDelDia";
import { Provider } from "react-redux";
import { Proveedores } from "./views/Proveedores";
import { store } from "./redux/index.js";
import Dashboard from "./views/Dashboard/Dashboard";
import Modelos from "./views/Modelos/Modelos";
function App() {
  const location = useLocation();
  const notLoginPage = location.pathname !== "/login";
  return (
    <>
      <div className="app-container">
      {notLoginPage && <NavBar />}
        <div className="app-content">
          {notLoginPage && <SearchBarContainer />}
          <Provider store={store}>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard/>}/>
            {/* <Route path="/menudeldia" element={<MenuDelDia/>} />  */}
            <Route path="/platos" element={<Platos />} />
            <Route path="/ingredientes" element= {<Ingredientes />} /> 
            <Route path="/reportes" element={<Reportes />} />
            <Route path="/proveedores" element={<Proveedores/>} />
            {/* <Route path="/ordenes" element={<Ordenes/>} /> */}
            <Route path="/modelos" element={<Modelos/>} /> 
            <Route path="*" element={<NotFound />} />
          </Routes>
          </Provider>
        </div>
      </div>
    </>
  );
}

export default App;
