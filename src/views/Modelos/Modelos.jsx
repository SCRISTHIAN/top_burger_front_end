
import { BarraGraph } from '../../components/Graphs/BarraGraph';
import { LineGraph } from '../../components/Graphs/LinesGraph';
import './style/index.css';

const Modelos = () => {
    return (
        <>
  
            <div className='tables'>
                <BarraGraph/>
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
