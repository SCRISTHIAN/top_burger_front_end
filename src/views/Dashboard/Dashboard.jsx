
import { Reports } from './components/Reports';
import './style/index.css';
import Review from './components/Review';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getIoItems } from '../../services/get.io.services';

const Dashboard = () => {
    const dispatch = useDispatch();
    const io = useSelector((state) => state.io);
     useEffect(() => {
      if(io.ioItems.length===0){
        dispatch(getIoItems());
      }
    }, []);
    console.log(io);
    return(
        <div style={{display:'flex', marginTop:'-10px',  height:'90%'}}>
            <Reports className='ufaufa1'/>
            <Review/>
        </div>
    );
};

export default Dashboard;

{/* <AiFillCarryOut size={40} className='one'/> */}