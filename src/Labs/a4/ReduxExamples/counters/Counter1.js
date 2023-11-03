import { useState } from "react";
import { increment, decrement } from "./counter1Reducer";
import { useDispatch, useSelector } from "react-redux";

function Counter1() {
  const { count } = useSelector((state) => state.counter1Reducer);
  const { count2 } = useSelector((state) => state.counter2Reducer);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Counter 1: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <h3>{count}</h3>
      <h3>{count2}</h3>
    </div>
  );
}
export default Counter1;
