import React from "react";
import { CounterProps } from "./Counter-types";
const Counter = ({
  count,
  incrementCounter,
  decrementCounter,
}: CounterProps) => {
  return (
    <div>
      <h1>Counter comp</h1>
      <p>count: {count}</p>
      {incrementCounter && (
        <button onClick={incrementCounter}>Increment count</button>
      )}
      {decrementCounter && (
        <button onClick={decrementCounter}>Decrement count</button>
      )}
    </div>
  );
};

export default Counter;
