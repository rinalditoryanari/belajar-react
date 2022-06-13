import React, { useState} from "react";

const Button = ({text="Button", background="green", ...props}) => {
  return (
    <button
        style={{
            background: (background),
            border: 0,
            color: 'white',
            borderRadius: 5,
        }}
        {...props}
    >
        {text}
    </button>
  );
}

export default Button;
