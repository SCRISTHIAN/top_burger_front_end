
import '../style/index.css';

const ReviewItems = (props) => {
    return(
    
            <div className='container_2'>
                   <h4 className='txt_1'>{props.txt_1}</h4>
                    {props.icon && <props.icon size={40} className="icon_2" style={{color: `${props.color}`}} />}
                    <h4 className='txt_2'>{props.txt_2}</h4>
                    <h4 className='txt_3'>{props.txt_3}</h4>
                </div>
       
    );
};

export default ReviewItems;