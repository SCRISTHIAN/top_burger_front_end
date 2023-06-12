import React from "react";
import OrdenesGeneralesCard from "./OrdenesGeneralesCard";
import "./OrdenesGeneralesContainer.css"

const OrdenesGeneralesContainer = () => {
  return (
    <div className="ordenesgenerales-container">
      <h3>Ordenes Generales</h3>
      <OrdenesGeneralesCard title={"Total de recibidos"} quantity={"32"} cash={"Bs. 25000"}/>
    </div>
  );
};

export default OrdenesGeneralesContainer;
