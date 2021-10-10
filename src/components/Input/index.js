import React from "react";

import "./style.css";

const Input = (props) => {
  return (
    <input
      className="custom-input"
      value={props.value}
      onChange={(event) => props.handeValue(event.target.value)}
    />
  );
};

export default Input;
