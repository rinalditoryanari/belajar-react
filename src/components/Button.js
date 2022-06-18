import React, { useState} from "react";
import { globalstyles } from "../theme/globalstyles";

const Button = ({text="Button", background="green", ...props}) => {
  const styles = {
    container: {
      background: (background),
      border: 0,
      color: 'white',
      borderRadius: 5,
  
  }}
  return (
    <button
        style={globalstyles}
        {...props}>
        {text}
    </button>
  );
}

export default Button;
