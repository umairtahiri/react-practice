import React from "react";

import "./style.css";

const Button = (props) => {
  return <button className="counter-button">{props?.label}</button>;
};

export default Button;
