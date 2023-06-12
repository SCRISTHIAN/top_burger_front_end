import React from "react";
import { Button } from '@mui/material';
const ButtonReports = () => {
  return (
    <Button
      variant="text"
      sx={{
        color: "#F79009",
        fontSize: "14px",
        height: "17px",
        left: "850px",
        top: "26px",
        backgroundColor: "transparent",
        boxShadow: "none",
        // focus y active son como selectores el focus cuando se hace un acercamiento hacia el boton
        //y el active se "activa" cuando se hace click
        "&:focus, &:active": {
          outline: "none", //sin contorno
          border: "none", //sin bordes
          boxShadow: "none", //without sombritas
        },
      }}
    >
      Ver todos
    </Button>
  );
};

export default ButtonReports;
