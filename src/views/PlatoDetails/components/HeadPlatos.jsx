

import { NavLink } from 'react-router-dom';
import './HeadPlatosDetails.css';
import {AiOutlineFunnelPlot,AiOutlineArrowLeft} from 'react-icons/ai';
import { handlePrint } from '../../../utils/print';
// import { useHistory } from 'react-router-dom';


export function HeaderPlatoDetails(){
    
    // const history = useHistory();
    // const handleClick = () => {
    //     history.push('/platos');
    // };
   
    return(
        <div className='ufaufa2'>
            <div className='spacer2'></div>
            <div className='coni2'>
                <h2>INGREDIENTES</h2>
                <NavLink to="/platos" className="ufaufita2">
                    <AiOutlineArrowLeft /> Atrás
                </NavLink>
                {/* <button className='ufaufita2'><AiOutlineArrowLeft/>Atras</button> */}
                <button onClick={handlePrint}><AiOutlineFunnelPlot/>Editar</button>

            </div>
        </div>
    )
}