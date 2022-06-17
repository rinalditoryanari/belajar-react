import React, { useState} from "react";

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
        style={styles.container}
        {...props}>
        {text}
    </button>
  );
}

export default Button;
