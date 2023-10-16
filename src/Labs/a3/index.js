import { Link } from "react-router-dom";
import Classes from "./Classes";
import ConditionalOutput from "./ConditionalOutput";
import JavaScript from "./JavaScript";
import PathParameters from "./PathParameters";
import Styles from "./Styles";
import TodoItem from "./todos/ToDoItem";
import TodoList from "./todos/ToDoList";

function Assignment3() {
  return (
    <div className="container">
      <h2>Assignment 3</h2>
      <ul className="list-group">
        <TodoItem title="Buy Milk" />
      </ul>
      <TodoList />
      <ConditionalOutput />
      <Styles />
      <Classes />
      <JavaScript />
      <PathParameters />
    </div>
  );
}

export default Assignment3;
