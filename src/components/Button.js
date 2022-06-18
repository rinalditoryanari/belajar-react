import React from "react";
import globalStyles from "../theme/globalStyles"

const Button = ({text="Button", backgroundColor="green", ...props}) => {
  const styles = {
    container: {
      background: (background),
      border: 0,
      color: 'white',
      borderRadius: 5,
  
  }}
  return (
    <button
        style={globalStyles}
        {...props}>
        {text}
    </button>
  );
}

export default Button;
