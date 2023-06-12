import '../style/index.css';
import {AiFillPhone,AiOutlineCopy,AiOutlineFunnelPlot,AiOutlinePrinter} from 'react-icons/ai'

export function Buttons(){
    return(
        <div className='coni'>
            <h2>PROVEEDORES</h2>
            <button><AiOutlineFunnelPlot/>AÑADIR</button>
            <button><AiOutlinePrinter/>DESCARGAR</button>
        </div>
    )
}