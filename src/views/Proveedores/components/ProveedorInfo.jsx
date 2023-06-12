import '../style/index.css';
import {AiFillPhone,AiOutlineCopy,AiOutlineFunnelPlot,AiOutlinePrinter} from 'react-icons/ai'


export function ProveedorInfo(){
    return(
        <div className='card'>
            <h2 className='t1'>Proveedor </h2>
            <img className='img2' src='https://cdn2.iconfinder.com/data/icons/food-drink-37/64/hamberger-food-fast_food-junk_food-512.png'></img>
            <h2 className='t2'>Marco Aurelio</h2>
            <div className='uwuwuw'>
              <button className='b1'>69123514<AiFillPhone /></button>
              <button className='b2'>v. balazos<AiOutlineCopy/></button>
            </div>
          </div>
    )
}