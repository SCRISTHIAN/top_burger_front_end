import './Details.css'

export function Details(props){
    return(
        <div className='Details_ufita'>
            <div>

            <h4>{props.ufa==true? props.body["PlatoNombre"]:"Nombre"}</h4>
            <h4>{props.ufa==true? props.body["ID_Plato"]:"Id Plato"}</h4>
            <h4>{props.ufa==true? props.body["MaxDishes"]:"Cantidad Restante"}</h4>
            <h4>{props.ufa==true? props.body["Ingredientes"]:"Ingredientes"}</h4>
                    {/* <h4>{props.ufa==true? props.body.PlatoNombre:"Nombre"}</h4>
                    
                    <h4>{props.ufa==true? props.body.ID_Plato:"Id Plato"}</h4>
                    
                    <h4>{props.ufa==true? props.body.MaxDishes:"Cantidad Restante"}</h4>
                 
                    <h4>{props.ufa==true? props.body.Ingredientes:"Ingredientes"}</h4> */}
       
            </div>
    </div>
    );
}