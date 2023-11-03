import React from "react";
import Add from "./Add.js";
import ClickEvent from "./ClickEvent.js";
import PassingDataOnEvent from "./PassingDataOnEvent.js";
import PassingFunctions from "./PassingFunctions.js";
import EventObject from "./EventObject.js";
import Counter from "./Counter.js";
import BooleanStateVariables from "./BooleanStateVariables.js";
import StringStateVariables from "./StringStateVariables.js";
import DateStateVariable from "./DateStateVariable.js";
import ObjectStateVariable from "./ObjectStateVariable.js";
import ArrayStateVariable from "./ArrayStateVariable.js";
import ParentStateComponent from "./ParentStateComponent.js";
import ReduxExamples from "./ReduxExamples/index.js";
function Assignment4() {
  const sayHello = () => {
    alert("Hello");
  };
  return (
    <div>
      <h2 className="container">Assignment 4</h2>
      <Add a={5} b={10} />
      <ClickEvent />
      <PassingDataOnEvent />
      <PassingFunctions theFunction={() => sayHello()} />
      <EventObject />
      <Counter />
      <BooleanStateVariables />
      <StringStateVariables />
      <DateStateVariable />
      <ObjectStateVariable />
      <ArrayStateVariable />
      <ParentStateComponent />
      <ReduxExamples />
    </div>
  );
}

export default Assignment4;
