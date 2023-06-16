import { handlePrint } from '../../../utils/print';
import './HeaderPlatos.css';
import {AiOutlineFunnelPlot,AiOutlinePrinter} from 'react-icons/ai'
export function HeaderPlatos(){
    return(
        <div className='ufaufa'>
            <div className='spacer'></div>
            <div className='coni'>
                <h2>PLATOS</h2>
                <button><AiOutlineFunnelPlot/>Filtros</button>
                <button onClick={handlePrint}><AiOutlinePrinter/>Descargar</button>
            </div>
        </div>
    )
}