
import React, { useState } from 'react';
import './style/index.css';
import { HeaderPlatoDetails } from './components/HeadPlatos';
import { Details } from './components/Details';
import { useParams } from "react-router-dom";
import { useEffect } from 'react';
import { getPlato } from '../../services/get.platos.details.services';

const PlatoDetails = () => {
    const [plato,setPlato]=useState([
        {
          "ID_Plato": 1,
          "Imagen_URL": "https://res.cloudinary.com/dehbkeazc/image/upload/v1686783081/hamburguesa_byxaod.png",
          "Ingredientes": "Sal, Papa, Pan, Lechuga, Platanos, Jamon, Maiz, Huevo, Queso, Tomate, Cebolla, Mayonesa, Ketchup, Mostaza, Carne molida",
          "MaxDishes": 11,
          "PlatoNombre": "Hamburgesa TOP"
        }
      ]);
    // useEffect(()=>{
    //     const fetchData=async()=>{
    //         try{
    //                 const data =await getPlato(slug);
    //                 setPlato(data);
    //         }catch(e){
    //             console.log(e)
    //         }
    //     }
    //     fetchData();
    // },[]);
    useEffect(()=>{
        getPlato(slug).then((data)=>{
            setPlato(data);
        });
    },[]);
    const {slug}=useParams();
    return (
        <div className='details'>
            <div className='details_body'>
                <HeaderPlatoDetails />
                <h3 className='ufa69'>Detalles Principales</h3>
                <div className='tails' > 
                    <Details />
                    <Details ufa={true} body={plato[0]} />
                    <img src={plato[0]["Imagen_URL"]} className='imagen_detalle'></img>  
                </div>  
            </div>
        </div>
    );
};

export default PlatoDetails
