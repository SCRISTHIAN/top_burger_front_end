import '../../Platos/components/HeaderPlatos';
import {LineGraph} from '../../../components/Graphs/LinesGraph'
import {AiOutlineFunnelPlot,AiOutlinePrinter} from 'react-icons/ai'
export function HeaderIngredientes(){
    return(
        <div className='ufaufa'>
            <div className='spacer'></div>
            <div className='coni'>
                <h2>INGREDIENTES</h2>
                <button className='ufaufita'><AiOutlinePrinter/>Agregar</button>
                <button ><AiOutlineFunnelPlot/>Filtros</button>
                <button><AiOutlinePrinter/>Descargar</button>
            </div>
        </div>
    )
}