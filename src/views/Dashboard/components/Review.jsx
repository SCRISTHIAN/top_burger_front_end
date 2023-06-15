
import ReviewItems from './ReviewItems';
import '../style/index.css';
import {AiOutlineFolderOpen,AiOutlineTeam} from "react-icons/ai";
import { getProveedoresItems } from '../../../services/get.proveedores.servicies';
import { useDispatch,useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getPlatosItems } from '../../../services/get.platos.services';

const Review = () => {
    const dispatch = useDispatch();
    const platos = useSelector((state)=>state.platos);
    const proveedores = useSelector((state) => state.proveedores);
    
    useEffect(() => {
      if(proveedores.proveedores.length===0){
        dispatch(getProveedoresItems());
        dispatch(getPlatosItems());
      }
     
    }, []);

    return(
        <div className='ufaufa2'>
                <ReviewItems
                    color="#00ffff"
                    txt_1='Resumen de Inventario'
                    txt_2={platos.platos.length}
                    txt_3='Cantidad de Platos'
                    icon={AiOutlineFolderOpen}
                />
                 <ReviewItems
                    color="#ff8000"
                    txt_1='Resumen de Proveedores'

                    txt_2={proveedores.proveedores.length}
                    txt_3='Numero de Proveedores'
                    icon={AiOutlineTeam}
                />
            <div className='ufaufa3'>
                    <span className='head'>
                        <h3 className='head_name'>INVENTARIO DE BAJA CANTIDAD</h3>
                        <button className='head_button'>Ver Todos</button>
                    </span>
                    <div className='body'>
                        <img className='body_img' src='https://cdn2.iconfinder.com/data/icons/food-drink-37/64/hamberger-food-fast_food-junk_food-512.png'></img>
                        <span className='info'>
                            <h3 className='info_name'>Hamburguesa</h3>
                            <h3 className='info_cantidad'>Cantidad restante: 15</h3>
                        </span>
                        <h3 className='body_nivel'>Bajo</h3>
               
                </div>
            </div>
        </div>
    );
};

export default Review;