import { useDispatch, useSelector } from 'react-redux';
import './style/index.css';
import TableItems from "../../components/TableItems/TableItems";
import { useEffect } from 'react';
import { getIngredientesItems } from '../../services/get.ingredientes.services';
import { HeaderIngredientes } from './components/HeaderIngredientes';
//import { getIngredientesItems } from '../../redux/states/thuks';
// import { fetchIngredientes } from '../../redux/states/ingrediente';


const Ingredientes = () => {

  const dispatch = useDispatch();
  const ingredientes = useSelector((state) => state.ingredientes);
   useEffect(() => {
    if(ingredientes.ingredientes.length===0){
      dispatch(getIngredientesItems());
    }
  }, []);
    return (
        <div className="ingredientes-container">
          <HeaderIngredientes/>
        <TableItems
          title="Ingredientes"
          data={ingredientes.ingredientes}
          columns={[
            { header: "ID", accessor: 'ID_Ingrediente' },
            { header: "Nombre", accessor: 'Nombre Ingrediente' },
            { header: "Stock Restante", accessor: 'Stock Restante' },
            { header: "Unidad de medida", accessor: 'Unidad_Medida' },
            { header: "Fecha Caducidad", accessor: 'Fecha_Caducidad' },
            { header: "Disponibilidad", accessor: 'Disponibilidad' },
          ]}
          height={"700px"}
          width={"1130px"}
        /> 
      </div>
   
      
    );
  };
  
  export default Ingredientes;