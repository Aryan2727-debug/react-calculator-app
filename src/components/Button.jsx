import "./Button.css";
import React from "react";

function Button({symbol , color , handleClick}){
    return(
      <div onClick={() => handleClick(symbol)} className="button-wrapper" style={{backgroundColor:color}}>{symbol}</div>
    );
};

export default Button;