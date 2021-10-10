import React, { useState } from "react";

import Button from "../button";
import Result from "../result";

import "./style.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleAdd = () => {
    setCount(count + 5);
  };

  const handleSubtract = () => {
    setCount(count - 2);
  };

  return (
    <div className="counter">
      <Button label="Add" handleCount={handleAdd} />
      <Result count={count} />
      <Button label="Subtract" handleCount={handleSubtract} />
    </div>
  );
};

export default Counter;
