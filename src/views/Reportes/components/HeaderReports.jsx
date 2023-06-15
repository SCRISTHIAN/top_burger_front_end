import '../../Platos/components/HeaderPlatos.css';
export function HeaderRerpotes(props){
    return(
        <div className='ufaufa'>
            <div className='spacer'></div>
            <div className='coni'>
                <h2>{props.name}</h2>
                <button className='ufaufita'>Ver Todos</button>
            </div>
        </div>
    )
}