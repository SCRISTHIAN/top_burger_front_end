
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
    
    const ufa=[
        {
            sem:"Semana 1",
            mayo:data["mayonesa"][0],
            papa:data["papa"][0]
        },
        {
            sem:"Semana 2",
            mayo:data["mayonesa"][1],
            papa:data["papa"][1]
        },
        {
            sem:"Semana 3",
            mayo:data["mayonesa"][2],
            papa:data["papa"][2]
        },
        {
            sem:"Semana 4",
            mayo:data["mayonesa"][3],
            papa:data["papa"][3]
        },
    ]
    console.log(ufa);
    return (
        <>
            <div className='tables'>
                <BarraGraph data={io.ioItems}/>
            </div>
            {/* <div className='tables1'>
                <LineGraph/>
            </div> */}
            
            <div className='predictions4'>
                <div className='tables4'>
                    <div className='header4'>
                        <h3>SE REQUERE</h3>
                        <button>Actualizar</button>
                    </div>
                    <div className='body4'>
                    <TableItems
                              data={ufa}
                              columns={[
                                { header: "Semana", accessor: "sem" },
                                { header: "Mayonesa", accessor: "mayo" },
                                { header: "Papa", accessor: "papa" },
                              ]}
                              height={"250px"}
                              width={"568px"}
                    /> 
                    </div> 
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
