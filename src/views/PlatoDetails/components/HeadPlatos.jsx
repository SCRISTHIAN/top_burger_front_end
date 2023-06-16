

import './HeadPlatosDetails.css';
import {AiOutlineFunnelPlot,AiOutlinePrinter} from 'react-icons/ai'
export function HeaderPlatoDetails(){
    return(
        <div className='ufaufa2'>
            <div className='spacer2'></div>
            <div className='coni2'>
                <h2>INGREDIENTES</h2>
                <button className='ufaufita2'><AiOutlinePrinter/>Atras</button>
                <button ><AiOutlineFunnelPlot/>Editar</button>

            </div>
        </div>
    )
}