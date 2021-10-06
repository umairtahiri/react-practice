import React from "react";

import "./style.css";

const Input = (props) => {
  return <input className="counter-input" value={props.count} />;
};

export default Input;
