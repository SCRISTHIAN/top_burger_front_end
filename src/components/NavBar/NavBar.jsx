
import './style/index.css';
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import OptionsCard from "./components/OptionsCard"

const NavBar = () => {
  const [activeOption, setActiveOption] = useState(null);

  
  return (
    <div className="navbar-container">
      <h3>TOP BURGUER</h3>
      <NavLink to={"/dashboard"} onClick={() => setActiveOption("Dashboard")}>
        <OptionsCard
          description={"Dashboard"}
          iconName={"octicon:home-24"}
          className={""}
          isActive={activeOption === "Dashboard"}
        />
      </NavLink>
      <NavLink
        to={"/menudeldia"}
        onClick={() => setActiveOption("Menu del dia")}
      >
        <OptionsCard
          description={"Menu del dia"}
          iconName={"fluent:food-16-filled"}
          className={""}
          isActive={activeOption === "Menu del dia"}
        />
      </NavLink>
      <NavLink to={"/platos"} onClick={() => setActiveOption("Platos")}>
        <OptionsCard
          description={"Platos"}
          iconName={"mdi:food-outline"}
          className={""}
          isActive={activeOption === "Platos"}
        />
      </NavLink>

      <NavLink
        to={"/ingredientes"}
        onClick={() => setActiveOption("Ingredientes")}
      >
        <OptionsCard
          description={"Ingredientes"}
          iconName={"uil:food"}
          className={""}
          isActive={activeOption === "Ingredientes"}
        />
      </NavLink>
      <NavLink to="/reportes" onClick={() => setActiveOption("Reportes")}>
        <OptionsCard
          description={"Reportes"}
          iconName={"iconoir:reports"}
          className={""}
          isActive={activeOption === "Reportes"}
        />
      </NavLink>
      <NavLink
        to={"/proveedores"}
        onClick={() => setActiveOption("Proveedores")}
      >
        <OptionsCard
          description={"Proveedores"}
          iconName={"ant-design:user-outlined"}
          className={""}
          isActive={activeOption === "Proveedores"}
        />
      </NavLink>
      <NavLink to={"/ordenes"} onClick={() => setActiveOption("Ordenes")}>
        <OptionsCard
          description={"Ordenes"}
          iconName={"ph:package-light"}
          className={""}
          isActive={activeOption === "Ordenes"}
        />
        </NavLink>
      <NavLink to={"/modelos"} onClick={() => setActiveOption("Modelos")}>
        <OptionsCard
          description={"Modelos"}
          iconName={"material-symbols:analytics-outline-rounded"}
          className={""}
          isActive={activeOption === "Modelos"}
        />
      </NavLink>
      <NavLink to={"/login"} onClick={() => setActiveOption("")}>
        <OptionsCard
          description={"Cerrar Sesión"}
          iconName={"mdi:logout"}
          className={"-last-option"}
          isActive={activeOption === "Cerrar Sesión"}
        />
      </NavLink>
    </div>
  );
};

export default NavBar;
