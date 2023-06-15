
import { useDispatch,useSelector } from 'react-redux';
import { BarraGraph } from '../../components/Graphs/BarraGraph';
import { LineGraph } from '../../components/Graphs/LinesGraph';
import { useEffect } from 'react';
import { getIoItems } from '../../services/get.io.services';
import './style/index.css';

const Modelos = () => {
    const dispatch = useDispatch();
    const io = useSelector((state) => state.io);
     useEffect(() => {
      if(io.ioItems.length===0){
        dispatch(getIoItems());
      }
    }, []);
    const data=io.ioItems;
    const key=Object.keys(data);
    return (
        <>
  
            <div className='tables'>
                <BarraGraph data={io.ioItems}/>
            </div>
            <div className='tables1'>
                <LineGraph/>
            </div>

            <div className='predictions'>
                <div className='tables'>
                    <div className='header'>
                        <h3>REQUERIMIENTOS</h3>
                        <button>Actualizar</button>
                    </div>
                    {/* /**en aca ta tabla   */}
                </div>




                <div className='tables3'>
                    <div className='header'>
                        <h3>INFERENCIAS</h3>
                        <button className='uwu'>Actualizar</button>
                    </div>
                    <div className='body'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem facilis ad veritatis quod deserunt suscipit debitis placeat? Ea illo quidem repellendus aliquid excepturi dicta ipsam quae facere quasi, eius rerum!</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modelos
