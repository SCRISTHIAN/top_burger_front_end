
import ReviewItems from './ReviewItems';
import '../style/index.css';
import {AiOutlineFolderOpen,AiOutlineTeam} from "react-icons/ai";

const Review = () => {
    return(
        <div className='ufaufa2'>
                <ReviewItems
                    color="#00ffff"
                    txt_1='Resumen de Inventario'
                    txt_2='100'
                    txt_3='Cantidad de Platos'
                    icon={AiOutlineFolderOpen}
                />
                 <ReviewItems
                    color="#ff8000"
                    txt_1='Resumen de Proveedores'
                    txt_2='11'
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