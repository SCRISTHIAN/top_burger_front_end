import '../../Platos/components/HeaderPlatos.css';
import {AiOutlineFunnelPlot,AiOutlinePrinter} from 'react-icons/ai'
export function HeaderProveedor(){
    return(
        <div className='ufaufa'>
            <div className='spacer'></div>
            <div className='coni'>
                <h2>PROVEEDORES</h2>
                <button className='ufaufita'><AiOutlinePrinter/>Agregar</button>
                <button ><AiOutlineFunnelPlot/>Filtros</button>
                <button><AiOutlinePrinter/>Descargar</button>
            </div>
        </div>
    )
}