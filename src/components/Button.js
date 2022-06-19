import React, { useState} from "react";
import { globalStyles } from "../theme/globalStyles";

const Button = ({text="Button", backgroundColor="green", ...props}) => {
  return (
    <button
        style={globalStyles.container(backgroundColor)}
        {...props}>
        {text}
    </button>
  );
}

export default Button;
