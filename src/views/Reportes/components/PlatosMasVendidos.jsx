import React, { useEffect, useState } from "react";
import "./PlatosMasVendidos.css";

import TableItems from "../../../components/TableItems/TableItems";
import { useDispatch, useSelector } from "react-redux";
import { getVendidosItems } from "../../../services/get.vendidos";

const PlatosMasVendidos = () => {
  const dispatch=useDispatch();
  const vendidos=useSelector((state)=>state.vendidos);
  useEffect(() => {
    if(vendidos.vendidosItems.length===0){
      dispatch(getVendidosItems());
    }
  }, []);  
  return (
    <div className="platosmasvendidos-container">
      <TableItems
        title="Platos mas vendidos"
        data={vendidos.vendidosItems}
        columns={[
          { header: "Nombre", accessor: "PlatoNombre" },
          { header: "Stock", accessor: "StockActual" },
          { header: "Tiempo de Preparacion", accessor: "Tiempo_Preparacion" },
  
        ]}
        height={"300px"}
        width={"1130px"}
      />
    </div>
  );
};

export default PlatosMasVendidos;
