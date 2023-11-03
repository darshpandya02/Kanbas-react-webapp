import React, { useState } from "react";
function Counter() {
  let [count, setCount] = useState(0);
  console.log(count);
  return (
    <div>
      <h2>Counter: {count}</h2>
      <button
        onClick={() => {
          //   count++;
          setCount(count + 1);
          console.log(count);
        }}>
        Up
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
          console.log(count);
        }}>
        Down
      </button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}
export default Counter;
