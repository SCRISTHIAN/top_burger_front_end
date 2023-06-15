
import {  useEffect } from 'react';
import './style/index.css';
import { useDispatch, useSelector } from 'react-redux';
import TableItems from '../../components/TableItems/TableItems';
import {getProveedoresItems} from '../../services/get.proveedores.servicies';
import {AiFillPhone,AiOutlineCopy,AiOutlineFunnelPlot,AiOutlinePrinter} from 'react-icons/ai'
import { ProveedorInfo } from './components/ProveedorInfo';
import { Buttons } from './components/Buttons';
import { HeaderProveedor } from './components/HeaderProveedor';
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
        <HeaderProveedor/>
        <TableItems
          title="Proveedores"
          data={proveedores.proveedores}
          columns={[
            { header: "Id", accessor: "id_proveedor" },
            { header: "Nombres", accessor: "nombre" },
            
            { header: "Telefono", accessor: "telefono" },
            { header: "Direccion", accessor: "direccion" },
            { header: "Provee", accessor: "ingredientes" },
          ]}
          height={"700px"}
          width={"1130px"}
        />
        


      </div>
    );
};

export default Proveedores
