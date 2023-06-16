import React from "react";
import "./IngredientesEscasos.css";
import TableItems from "../../../components/TableItems/TableItems";
import { useDispatch,useSelector } from "react-redux";
import { useEffect } from "react";
import { getEscasosItems } from "../../../services/get.escasos";

const IngredientesEscasos = () => {
  const dispatch=useDispatch();
  const escasos=useSelector((state)=>state.escasos);
  useEffect(() => {
    if(escasos.escasosItems.length===0){
      dispatch(getEscasosItems());
    }
  }, []);  
  return (
    <div className="ingredientesescasos-container">
      <TableItems
        title="Ingredientes Escasos"
        data={escasos.escasosItems}
        columns={[
          { header: "Nombre", accessor: "Nombre" },
          { header: "Stock", accessor: "Stock" },
          { header: "Unidad de Medida", accessor: "Unidad_Medida" },
        ]}
        height={"300px"}
        width={"1130px"}
      />
    </div>
  );
};

export default IngredientesEscasos;
