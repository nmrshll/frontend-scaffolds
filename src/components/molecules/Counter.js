import React, { useState } from "react";
import { createContainer } from "unstated-next";

function useCounter(initialState = 0) {
  const [count, setCount] = useState(initialState);
  const decrement = () => setCount(count - 1);
  const increment = () => setCount(count + 1);
  return { count, decrement, increment };
}

const CounterState = createContainer(useCounter);

function CounterDisplay() {
  const counter = CounterState.useContainer();
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
