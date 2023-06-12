import React, { useState } from "react";
import { Icon } from "@iconify/react";
import "./OptionsCard.css";

const OptionsCard = ({ description, iconName, className ,isActive, onClick }) => {

  return (
    <div className={`options-card${className}`} onClick={onClick}>
      <Icon className="icons" icon={iconName} />
      <span className={isActive ? 'active' : ''}>{description}</span>
    </div>
  );
};

export default OptionsCard;
