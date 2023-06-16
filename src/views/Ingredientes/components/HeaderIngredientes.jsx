import '../../Platos/components/HeaderPlatos';
import {LineGraph} from '../../../components/Graphs/LinesGraph'
import {AiOutlineFunnelPlot,AiOutlinePrinter} from 'react-icons/ai'
import { handlePrint } from '../../../utils/print';
export function HeaderIngredientes(){
    return(
        <div className='ufaufa'>
            <div className='spacer'></div>
            <div className='coni'>
                <h2>INGREDIENTES</h2>
                <button className='ufaufita'><AiOutlinePrinter/>Agregar</button>
                <button ><AiOutlineFunnelPlot/>Filtros</button>
                <button onClick={handlePrint}><AiOutlinePrinter/>Descargar</button>
            </div>
        </div>
    )
}