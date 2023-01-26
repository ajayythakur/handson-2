import React from "react";
import { useState } from "react";

const HigherOrderFunction = (WrappedComponent) => {
  const HOC = (props) => {
    const [counter, setCounter] = useState(0);
    const Increment = () => {
      setCounter(counter + 1);
    };
    return ( 
      <div>
        <WrappedComponent counter={counter} Increment={Increment} />
      </div>
    );
  };
  return HOC; 
};

export default HigherOrderFunction;
