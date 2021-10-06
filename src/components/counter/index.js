import React, { useState } from "react";

import Button from "../button";
import Input from "../input";

import "./style.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="counter">
      <Button label="Add" />
      <Input count={count} />
      <Button label="Subtract" />
    </div>
  );
};

export default Counter;
