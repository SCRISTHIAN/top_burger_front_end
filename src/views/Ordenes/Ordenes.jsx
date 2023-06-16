
import OrdenesGeneralesContainer from "./components/OrdenesGeneralesContainer";
import TableItems from "../../components/TableItems/TableItems";
import './style/index.css';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getOrdenesItems } from "../../services/get.ordenes.services";
import { HeaderOrdenes } from "./components/HeaderPlatos";

const Ordenes = () => {
    const dispatch=useDispatch();
    const ordenes=useSelector((state)=>state.ordenes);
    useEffect(
      ()=>{
        if(ordenes.ordenesItems.length===0){
          dispatch(getOrdenesItems());
        }
      },[]
    );
    const data=ordenes.ordenesItems;

    return (
      <div className="ordenes-container">
        <OrdenesGeneralesContainer/>
        <HeaderOrdenes/>
        <TableItems
          title="Ordenes"
          data={data}
          columns={[
            { header: "NombreCliente", accessor: "NombreCliente" },
            { header: "Precio Total Pedido", accessor: "PrecioTotalPedido" },
            { header: "# ORDEN", accessor: "ID_Pedido_Cliente" },
            { header: "Entrega Esperada", accessor: "EntregaEsperada" },
            { header: "Estado", accessor: "Estado" },
          ]}
          height={"500px"}
          width={"1000px"}
        />
      </div>
    );
  };
  
  export default Ordenes;
