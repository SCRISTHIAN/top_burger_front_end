import '../../Platos/components/HeaderPlatos.css';
import {AiOutlineFunnelPlot,AiOutlinePrinter} from 'react-icons/ai'
export function HeaderMenu(){
    return(
        <div className='ufaufa'>
            <div className='spacer'></div>
            <div className='coni'>
                <h2>Disponibilidad de Platos</h2>
                <button><AiOutlineFunnelPlot/>Disponibilidad</button>
                <button><AiOutlinePrinter/>Descargar</button>
            </div>
        </div>
    )
}