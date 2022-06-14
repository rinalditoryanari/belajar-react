import React, { useState} from "react";

const Input = ({value="", ...props}) => {
  return (
    <input 
        type="text" 
        placeholder='Input Task Here..'
        value={value}
        {...props}
    />
  );
}

export default Input;
