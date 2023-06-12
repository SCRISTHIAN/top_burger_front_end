
import {  useEffect } from 'react';
import './style/index.css';
import { useDispatch, useSelector } from 'react-redux';
import TableItems from '../../components/TableItems/TableItems';
import {getProveedoresItems} from '../../services/get.proveedores.servicies';
import {AiFillPhone,AiOutlineCopy,AiOutlineFunnelPlot,AiOutlinePrinter} from 'react-icons/ai'
import { ProveedorInfo } from './components/ProveedorInfo';
import { Buttons } from './components/Buttons';
const Proveedores = () => {
    const dispatch = useDispatch();
    const proveedores = useSelector((state) => state.proveedores);
    useEffect(() => {
      if(proveedores.proveedores.length===0){
        dispatch(getProveedoresItems());
      }
    }, []);
    return (
      <div className="platos-container">
        <TableItems
          title="Proveedores"
          data={proveedores.proveedores}
          columns={[
            { header: "Id", accessor: "id_proveedor" },
            { header: "Nombres", accessor: "nombre" },
            { header: "Telefono", accessor: "telefono" },
            { header: "Direccion", accessor: "direccion" },
          ]}
          height={"750px"}
          width={"700px"}
        />
        <div className='body'>
          <ProveedorInfo/>
          <Buttons/>
        
        <ProveedorInfo/>
        

        </div>

      </div>
    );
};

export default Proveedores
