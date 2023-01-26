import React from "react";
// import { useState } from 'react';
import HigherOrderFunction from "./HOC";

const ClickCounter = (props) => {
  const { counter, Increment } = props;
  return (
    <div className="container">
      This will increase counter on button Click
      <br />
      Number : {counter}
      <br/>
      <br />
      <button onClick={Increment}>Click</button>
    </div>
  );
};

export default HigherOrderFunction(ClickCounter);
