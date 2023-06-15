import React, { useEffect, useState } from "react";
import "./PlatosMasVendidos.css";

import TableItems from "../../../components/TableItems/TableItems";

const PlatosMasVendidos = () => {
  const empleados = [
    {
      id: 1,
      nombre: "John Doe",
      usuario: "john@example.com",
      rol: 'ADMIN',
      contrasena: 'secreta123',
    },
    {
      id: 2,
      nombre: "Jane Smith",
      usuario: "jane@example.com",
      rol: 'USER',
      contrasena: 'password123',
    },
    {
      id: 3,
      nombre: "Alice Johnson",
      usuario: "alice@example.com",
      rol: 'USER',
      contrasena: 'qwerty123',
    },
    {
      id: 4,
      nombre: "Bob Anderson",
      usuario: "bob@example.com",
      rol: 'USER',
      contrasena: 'abcdefg123',
    },
    {
      id: 5,
      nombre: "Emily Williams",
      usuario: "emily@example.com",
      rol: 'USER',
      contrasena: '123456789',
    },
  ]
  return (
    <div className="platosmasvendidos-container">
      <TableItems
        title="Platos mas vendidos"
        data={empleados}
        columns={[
          { header: "Contrasena", accessor: "contrasena" },
          { header: "Id", accessor: "id_empleado" },
          { header: "Nombre", accessor: "nombre" },
          { header: "Rol", accessor: "rol" },
          { header: "Usuario", accessor: "usuario" },
        ]}
        height={"200px"}
        width={"1130px"}
      />
    </div>
  );
};

export default PlatosMasVendidos;
