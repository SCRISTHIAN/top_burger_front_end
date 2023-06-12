import React from 'react'
import { Button } from '@mui/material';
import './BotonFoot.css'

const BotonFoot=()=> {
  return (
    <div className='boton-foot'>
        <Button className='start' variant="outlined" color="primary" sx={{color: '#667085', borderColor: '#F79009', fontSize: '10px'}}>
          Anterior    
        </Button>
        <Button variant="outlined" color="primary" sx={{color: '#667085', borderColor: '#F79009', fontSize: '10px'}}>
          Siguiente
        </Button>
    </div>
  )
}

export default BotonFoot