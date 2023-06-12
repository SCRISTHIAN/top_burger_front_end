import { useDispatch, useSelector } from 'react-redux';
import './style/index.css';
import TableItems from "../../components/TableItems/TableItems";
import { useEffect } from 'react';
import { getIngredientesItems } from '../../services/get.ingredientes.services';
//import { getIngredientesItems } from '../../redux/states/thuks';
// import { fetchIngredientes } from '../../redux/states/ingrediente';


const Ingredientes = () => {
    // const [ingredientes, setIngredientes] = useState([]);
    // // useEffect(() => {
    //   getJson("/ingredientes").then((data) => {
    //     setIngredientes(data);
    //   });
    // }, []);
  const dispatch = useDispatch();
  const ingredientes = useSelector((state) => state.ingredientes);
  

  useEffect(() => {
    if(ingredientes.ingredientes.length===0){
      dispatch(getIngredientesItems());
    }
   
  }, []);


    return (
       
        <div className="ingredientes-container">
        <TableItems
          title="Ingredientes"
          data={ingredientes.ingredientes}
          columns={[
            { header: "Id", accessor: 'id_ingrediente' },
            { header: "Ingredientes", accessor: 'nombre' },
            { header: "Stock", accessor: 'stock' },
            { header: "Unidad de medida", accessor: 'unidad_medida' },
          ]}
          height={"700px"}
        /> 
      </div>
   
      
    );
  };
  
  export default Ingredientes;