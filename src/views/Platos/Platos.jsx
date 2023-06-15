



import React, { useEffect } from 'react';
import './style/index.css';
import TableItems from "../../components/TableItems/TableItems";
import { useDispatch, useSelector } from 'react-redux';
import { getMenuItems } from '../../services/get.menudeldia';
import { HeaderPlatos } from './components/HeaderPlatos';

const Platos = () => {
  // const dispatch = useDispatch();
  // const platos = useSelector((state) => state.platos);
  // useEffect(() => {
  //   if(platos.platos.length===0){
  //     dispatch(getPlatosItems());
  //   }
   
  // }, []);
  const dispatch = useDispatch();
  const menu = useSelector((state) => state.menu);
  useEffect(() => {
    if(menu.menu.length===0){
      dispatch(getMenuItems());
    }
   
  }, []);
  return (
    <div className="platos-container">
      <HeaderPlatos/>
      <div className='table-platos'>
      <TableItems
             data={menu.menu}
             columns={[
               { header: "Nombre", accessor: "Nombre" },
               { header: "Precio", accessor: "Precio" },
               { header: "MaxDishes", accessor: "MaxDishes" },
               { header: "Disponibilidad", accessor: "Disponibilidad" },
             ]}
             height={"690px"}
             width={"1130px"}
      /> 
      </div>
    </div>
  );
};

export default Platos;