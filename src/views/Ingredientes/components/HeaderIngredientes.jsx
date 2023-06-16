import '../../Platos/components/HeaderPlatos';
import './Modal.css';
import {LineGraph} from '../../../components/Graphs/LinesGraph'
import {AiOutlineFunnelPlot,AiOutlinePrinter} from 'react-icons/ai'
import { handlePrint } from '../../../utils/print';
import React, { useState } from "react";
export function HeaderIngredientes(){
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
      setModal(!modal);
    };
  
    if(modal) {
      document.body.classList.add('active-modal')
    } else {
      document.body.classList.remove('active-modal')
    }

    return(
        
        <div className='ufaufa'>
            {modal && (
            <div className="modal">
              <div onClick={toggleModal} className="overlay"></div>
              <div className="modal-content">
                <h2>Hello Modal</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
                  perferendis suscipit officia recusandae, eveniet quaerat assumenda
                  id fugit, dignissimos maxime non natus placeat illo iusto!
                  Sapiente dolorum id maiores dolores? Illum pariatur possimus
                  quaerat ipsum quos molestiae rem aspernatur dicta tenetur. Sunt
                  placeat tempora vitae enim incidunt porro fuga ea.
                </p>
                <button className="close-modal" onClick={toggleModal}>
                  CLOSE
                </button>
              </div>
            </div>
        )}
            <div className='spacer'></div>
            <div className='coni'>
                <h2>INGREDIENTES</h2>
                <button className='ufaufita' onClick={toggleModal}><AiOutlinePrinter/>Agregar</button>

                <button ><AiOutlineFunnelPlot/>Filtros</button>
                <button onClick={handlePrint}><AiOutlinePrinter/>Descargar</button>
            </div>
        </div>
    )
}