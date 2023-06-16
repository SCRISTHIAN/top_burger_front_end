


import './style/index.css';
import TableItems from "../../components/TableItemsUfa/TableItems";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getMenuItems } from '../../services/get.menudeldia';
import { HeaderMenu } from './components/HeaderMenu';


const MenuDelDia = () => {
  const dispatch = useDispatch();
  const menu = useSelector((state) => state.menu);
  useEffect(() => {
    if(menu.menu.length===0){
      dispatch(getMenuItems());
    }
   
  }, []);
  return (
    <div className="platos-container">
      <HeaderMenu/>
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
  
  export default MenuDelDia;