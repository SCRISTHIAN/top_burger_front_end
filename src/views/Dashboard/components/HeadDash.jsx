import './HeaderDash.css';
import {AiOutlineFunnelPlot,AiOutlinePrinter} from 'react-icons/ai'
export function HeaderDashboard(){
    return(
        <div className='ufaufa1'>
            <div className='spacer1'></div>
            <div className='coni1'>
                <h2>PLATOS MAS VENDIDOS</h2>
                <button><AiOutlineFunnelPlot/>Filtros</button>
            </div>
        </div>
    )
}