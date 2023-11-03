import React, { useState } from "react";
import { setMessage } from "./helloReducer";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

function HelloRedux() {
  // const [message] = useState("Hello World")
  const { message } = useSelector((state) => state.helloReducer);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Hello Redux</h1>
      <button onClick={() => dispatch(setMessage("Hello Redux"))}>
        Set Message
      </button>
      <h2>{message}</h2>
    </div>
  );
}

export default HelloRedux;
