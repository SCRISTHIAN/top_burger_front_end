



import React, { useEffect } from 'react';
import './style/index.css';
import TableItems from "../../components/TableItems/TableItems";
import { useDispatch, useSelector } from 'react-redux';
import { getPlatosItems } from '../../services/get.platos.services';
import { HeaderPlatos } from './components/HeaderPlatos';
const Platos = () => {
  const dispatch = useDispatch();
  const platos = useSelector((state) => state.platos);
  useEffect(() => {
    if(platos.platos.length===0){
      dispatch(getPlatosItems());
    }
   
  }, []);
console.log(platos)
  return (
    <div className="platos-container">
      <HeaderPlatos/>
      <div className='table-platos'>
      <TableItems
        title="Platos"
        data={platos.platos}
        columns={[
          { header: "Id", accessor: "id_plato" },
          { header: "Platos", accessor: "nombre" },
          { header: "Precio", accessor: "precio" },
          { header: "Tiempo de preparacion", accessor: "tiempo_preparacion" },
        ]}
        height={"690px"}
        width={"1130px"}
      /> 
      </div>
    </div>
  );
};

export default Platos;