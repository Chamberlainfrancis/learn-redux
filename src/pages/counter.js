import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, incrementByAmount } from "../features/counter/counterSlice";

import { useNavigate } from "react-router-dom";

const Counter = () => {
  const navigate = useNavigate();

  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Counter: {count}</h1>

      <div>
        <button aria-label="Increment value" onClick={() => navigate(-1)}>
          Go Back
        </button>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(incrementByAmount(5))}
        >
          Increment
        </button>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
