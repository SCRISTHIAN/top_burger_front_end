import { handlePrint } from '../../../utils/print';
import './HeaderPlatos.css';
import {AiOutlineFunnelPlot,AiOutlinePrinter} from 'react-icons/ai'
export function HeaderOrdenes(){
    return(
        <div className='ufaufa3'>
            <div className='spacer3'></div>
            <div className='coni3'>
                <h2>ORDENES</h2>
                <button className='ufaufita'><AiOutlineFunnelPlot/>Agregar</button>
                <button onClick={handlePrint}><AiOutlinePrinter/>Descargar</button>
            </div>
        </div>
    )
}