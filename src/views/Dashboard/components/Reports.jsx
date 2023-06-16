import { useDispatch,useSelector } from "react-redux";
import { CardReport } from "./CardReport";
import {AiFillCarryOut,AiFillBuild,AiFillRocket,AiOutlineBarChart,AiOutlineBlock,AiOutlineDeploymentUnit} from "react-icons/ai";
import { useEffect } from "react";
import { getPlatosItems } from "../../../services/get.platos.services";
import TableItems from "../../../components/TableItems/TableItems";
import { HeaderDashboard } from "./HeadDash";



export function Reports(){
    const dispatch = useDispatch();
    const platos = useSelector((state) => state.platos);
    
  
    useEffect(() => {
      if(platos.platos.length===0){
        dispatch(getPlatosItems());
      }
     
    }, []);
    return(
        <div style={{display:'block'}}>
        <div className='container'>
            <h2 className='name1'>Reporte de Ventas</h2>
            <div className='container2'>
                <CardReport icon={AiFillCarryOut} percentaje='70%' color="#FFFF00" name='Ventas' />
                <CardReport icon={AiFillBuild} percentaje='50%' color="#00ff40" name='Ganancia' />
                <CardReport icon={AiFillRocket} percentaje='40%' color="#e42293" name='Costo' />
            </div>
        </div>
        <div className='container'>
            <h2 className='name1'>Descripcion General</h2>
            <div className='container2'>
                    <CardReport icon={AiOutlineBarChart} percentaje='82' color="#FF00FF" name='Ventas' />
                 <CardReport icon={AiOutlineBlock} percentaje='600' color="#FF8000" name='Ganancia' />
                 <CardReport icon={AiOutlineDeploymentUnit} percentaje='800' color="#00ffff" name='Costo' />
            </div>
        </div>
        <HeaderDashboard />
        
        <div style={{marginTop:"-110px"}} className="container_3">
            <TableItems
            title="Platos"
            data={platos.platos}
            columns={[
            { header: "Id", accessor: "id_plato" },
            { header: "Platos", accessor: "nombre" },
            { header: "Precio", accessor: "precio" },
            { header: "Tiempo de preparacion", accessor: "tiempo_preparacion" },
            ]}
            width={"770px"}
            height={"235px"}
            />

        </div>
        </div>



    );
}