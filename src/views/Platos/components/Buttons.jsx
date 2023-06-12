import React from 'react'
import DehazeIcon from '@mui/icons-material/Dehaze';
import { Button } from '@mui/material';
import './Buttons.css'

const Buttons=()=> {
  return (
    <div className='boton-head'>
        <Button variant="outlined" color="primary" sx={{color: '#667085', borderColor: '#F79009', fontSize: '10px'}}>
          <DehazeIcon/>
          Filter
        </Button>
        <Button variant="outlined" color="primary" sx={{color: '#667085', borderColor: '#F79009', fontSize: '10px'}}>
          descargar todo
        </Button> 
        
    </div>
  )
}

export default Buttons