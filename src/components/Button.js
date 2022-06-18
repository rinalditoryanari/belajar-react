import React, { useState} from "react";
import { globalstyles } from "../theme/globalStyles";

const Button = ({text="Button", backgroundColor="green", ...props}) => {
  return (
    <button
        style={globalstyles.container(backgroundColor)}
        {...props}>
        {text}
    </button>
  );
}

export default Button;
