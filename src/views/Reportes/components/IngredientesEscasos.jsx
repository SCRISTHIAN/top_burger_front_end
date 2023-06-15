import React from "react";
import "./IngredientesEscasos.css";
import TableItems from "../../../components/TableItems/TableItems";

const IngredientesEscasos = () => {
  const users = [
    { id: 1, name: "John Doe", email: "john@example.com", age: 27 },
    { id: 2, name: "Jane Doe", email: "jane@example.com", age: 25 },
    // Más usuarios aquí...
  ];
  return (
    <div className="ingredientesescasos-container">
      <TableItems
        title="Ingredientes Escasos"
        data={users}
        columns={[
          { header: "Name", accessor: "name" },
          { header: "Email", accessor: "email" },
          { header: "Age", accessor: "age" },
        ]}
        height={"200px"}
        width={"1130px"}
      />
    </div>
  );
};

export default IngredientesEscasos;
