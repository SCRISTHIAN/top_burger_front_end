
import { Reports } from './components/Reports';
import './style/index.css';
import Review from './components/Review';

const Dashboard = () => {
    return(
        <div style={{display:'flex', marginTop:'-10px',  height:'90%'}}>
            <Reports className='ufaufa1'/>
            <Review/>
        </div>
    );
};

export default Dashboard;

{/* <AiFillCarryOut size={40} className='one'/> */}