import React from "react";
import "./OrdenesGeneralesCard.css";

const OrdenesGeneralesCard = ({ title, quantity, cash }) => {
  return (
    <div className="ordenesgenerales-card">
      <h4>{title}</h4>
      <div className="quancash-container">
        <div className="quan-container">
          <span>{quantity}</span>
          <span>Ultimas 3h</span>
        </div>
        <div className="cash-container">
          <span>{cash}</span>
          <span>Ganancia Total</span>
        </div>
      </div>
    </div>
  );
};

export default OrdenesGeneralesCard;
