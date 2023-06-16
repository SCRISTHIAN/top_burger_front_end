
import { useDispatch,useSelector } from 'react-redux';
import { BarraGraph } from '../../components/Graphs/BarraGraph';
import { useEffect } from 'react';
import {  getIoItems } from '../../services/get.io.services';
import './style/index.css';
import TableItems from '../../components/TableItems/TableItems'

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
    //const dispatch = useDispatch();
    // const io = useSelector((state) => state.io);
    //  useEffect(() => {
    //   if(io.ioItems.length===0){
    //     dispatch(getIoItems());
    //   }
    // }, []);
    // const data=io.ioItems;
    // const key=Object.keys(data);
    console.log(data);
    return (
        <>
            <div className='tables'>
                <BarraGraph data={io.ioItems}/>
            </div>
            {/* <div className='tables1'>
                <LineGraph/>
            </div> */}

            <div className='predictions'>
                <div className='tables'>
                    <div className='header'>
                        <h3>SE REQUERE</h3>
                        <button>Actualizar</button>
                    </div>
                   {/* <TableItems
                              data={data}
                              columns={[
                                { header: "Semana 1", accessor: "semana1" },
                                { header: "Semana 2", accessor: "semana2" },
                                { header: "Semana 3", accessor: "semana3" },
                                { header: "Semana 4", accessor: "semana4"},
                              ]}
                              height={"400px"}
                              width={"1130px"}
                    />  */}
                    {/* <TableItems
                              data={io.ioItems.mayonesa}
                              columns={[
                                { header: "Semana 1", accessor: 0 },
                                { header: "Semana 2", accessor: 1 },
                                { header: "Semana 3", accessor: 2 },
                                { header: "Semana 4", accessor: 3 },
                              ]}
                              height={"400px"}
                              width={"1130px"}
                    />                  */}
                    {/* /**en aca ta tabla   */}
                </div>




                {/* <div className='tables3'>
                    <div className='header'>
                        <h3>INFERENCIAS</h3>
                        <button className='uwu'>Actualizar</button>
                    </div>
                    <div className='body'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem facilis ad veritatis quod deserunt suscipit debitis placeat? Ea illo quidem repellendus aliquid excepturi dicta ipsam quae facere quasi, eius rerum!</p>
                    </div>
                </div> */}
            </div>
        </>
    );
};

export default Modelos
