import './HeaderPlatos.css';
import {LineGraph} from '../../../components/Graphs/LinesGraph'
import {AiOutlineFunnelPlot,AiOutlinePrinter} from 'react-icons/ai'
export function HeaderPlatos(){
    return(
        <div className='ufaufa'>
            <div className='coni'>
                <h2>PLATOS</h2>
                <button><AiOutlineFunnelPlot/>Filtros</button>
                <button><AiOutlinePrinter/>Descargar</button>
            </div>
            <div className='ufaufa1'>
                <LineGraph/>
            </div>
            <div className='ufaufa1'>
                <LineGraph/>
            </div>
        </div>
    )
}