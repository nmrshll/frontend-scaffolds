import React, { useState } from "react";
import { createContainer } from "unstated-next";

function useCounter(initialState = 0) {
  let [count, setCount] = useState(initialState);
  let decrement = () => setCount(count - 1);
  let increment = () => setCount(count + 1);
  return { count, decrement, increment };
}

let CounterState = createContainer(useCounter);

function CounterDisplay() {
  let counter = CounterState.useContainer();
  return (
    <div className="p-6 bg-purple-800">
      <button onClick={counter.decrement}>-</button>
      <span>{counter.count}</span>
      <button onClick={counter.increment}>+</button>
    </div>
  );
}

export const Counters = () => (
  <CounterState.Provider>
    <CounterDisplay />
    <CounterState.Provider initialState={2}>
      <div>
        <div>
          <CounterDisplay />
        </div>
      </div>
    </CounterState.Provider>
  </CounterState.Provider>
);

export default Counters;
