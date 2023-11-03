import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment2, decrement2 } from "./counter2Reducer";
import Counter1 from "./Counter1";
function Counter2() {
  const { count2 } = useSelector((state) => state.counter2Reducer);
  const dispatch = useDispatch();
  // const [count2, setCount2] = useState(0);
  // const increment2 = () => setCount2(count2 + 1);
  // const decrement2 = () => setCount2(count2 - 1);
  return (
    <div>
      <h1>Counter 2: {count2}</h1>
      <button onClick={() => dispatch(increment2())}>Increment2</button>
      <button onClick={() => dispatch(decrement2())}>Decrement2</button>
      <h3>{count2}</h3>
      <Counter1 />
    </div>
  );
}

export default Counter2;
