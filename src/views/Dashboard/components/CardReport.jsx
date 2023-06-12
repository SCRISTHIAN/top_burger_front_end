

import '../style/index.css';

export function CardReport(props){
 
    return(
        <div className='name2' style={{border: ` 2px solid ${props.color}`}}>
            {props.icon && <props.icon size={40} className="one" style={{color: `${props.color}`}} />}
            <span className='two'>
                <h3 className='txt1'>{props.percentaje}</h3>
                <h3 className='txt2'>{props.name}</h3>
             </span>
        </div>
    )

}