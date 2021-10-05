import React from "react";
import "./style.css";

const Card = (props) => {
  return (
    <section className="card">
      <div>Name: {props.name}</div>
      <div>Age: {props.age}</div>
    </section>
  );
};

export default Card;
