import React, { useState } from "react";

import Button from "../button";
import Input from "../Input";
import Result from "../result";

import "./style.css";

const Sum = () => {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [sum, setSum] = useState(0);

  const handleValue1 = (val) => {
    setValue1(val);
  };

  const handleValue2 = (val) => {
    setValue2(val);
  };

  const calculateSum = () => {
    setSum(Number(value1) + Number(value2));
  };

  return (
    <div className="sum-container">
      <Input value={value1} handeValue={handleValue1} />
      <Input value={value2} handeValue={handleValue2} />
      <Button label="Add" calculateSum={calculateSum} />
      <Result sum={sum} />
    </div>
  );
};

export default Sum;
