import React, { useState, useEffect } from "react";
import axios from "axios";
function WorkingWithArrays() {
  const [errorMessage, setErrorMessage] = useState(null);
  const [id, setId] = useState(1);
  const [title, setTitle] = useState("Go to work");
  const [todo, setTodo] = useState({
    id: 1,
    title: "Learn NodeJS",
    due: "2021-09-09",
    description:
      "Create a NodeJS server with ExpressJS and various RESTful APIs",
    completed: false,
  });
  const [todos, setTodos] = useState([]);
  <input
    className="form-control"
    value={id}
    onChange={(e) => setTodo({ ...todo, id: e.target.value })}
  />;

  const API = "https://kanbas-node-server-app-qcek.onrender.com/a5/todos";

  // const fetchTodosPromise = () => {
  //   const promise = axios.get(API);
  //   promise.then((response) => {
  //     setTodos(response.data);
  //   });
  // };

  const postTodo = async () => {
    const response = await axios.post(API, todo);
    setTodos([...todos, response.data]);
  };

  const fetchTodos = async () => {
    const response = await axios.get(
      "https://kanbas-node-server-app-qcek.onrender.com/a5/todos"
    );
    setTodos(response.data);
  };

  // const fetchTodoById = async (id) => {
  //   const response = await axios.get(`${API}/${id}`);
  //   setTodo({
  //     id: response.data.id,
  //     title: response.data.title,
  //     description: response.data.description,
  //     due: response.data.due,
  //     completed: response.data.completed,
  //   });
  // };

  const fetchTodoById = async (id) => {
    const response = await axios.get(`${API}/${id}`);
    setTodo(response.data);
  };

  const deleteTodo = async (todo) => {
    try {
      const response = await axios.delete(`${API}/${todo.id}`);
      setTodos(todos.filter((t) => t.id !== todo.id));
    } catch (error) {
      console.log(error);
      setErrorMessage(error.response.data.message);
    }
  };
  const updateTodo = async () => {
    try {
      const response = await axios.put(`${API}/${todo.id}`, todo);
      setTodos(todos.map((t) => (t.id === todo.id ? todo : t)));
      setTodo({});
    } catch (error) {
      console.log(error);
      setErrorMessage(error.response.data.message);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div>
      <hr />
      <h1>Working with Arrays</h1>
      <h2>Todos from server</h2>
      <input className="form-control mb-2" value={todo.id} readOnly />
      <input
        className="form-control mb-2"
        onChange={(e) =>
          setTodo({
            ...todo,
            title: e.target.value,
          })
        }
        value={todo.title}
        type="text"
      />
      <textarea
        className="form-control mb-2"
        onChange={(e) => setTodo({ ...todo, description: e.target.value })}
        value={todo.description}
        type="text"
      />
      <input
        className="form-control mb-2"
        onChange={(e) =>
          setTodo({
            ...todo,
            due: e.target.value,
          })
        }
        value={todo.due}
        type="date"
      />
      <label>
        <input
          onChange={(e) =>
            setTodo({
              ...todo,
              completed: e.target.checked,
            })
          }
          value={todo.completed}
          type="checkbox"
        />
        Completed
      </label>{" "}
      <br /> <br />
      <button className="btn btn-success " onClick={postTodo}>
        Post Todo
      </button>
      <button className="btn btn-warning " onClick={updateTodo}>
        Update Todo
      </button>
      <br /> <br />
      {errorMessage && (
        <div className="alert alert-danger mb-2 mt-2">{errorMessage}</div>
      )}
      <ul className="list-group">
        {todos.map((todo) => (
          <li key={todo.id} className="list-group-item">
            <button
              className="btn btn-warning float-end"
              style={{ marginRight: "10px" }}
              onClick={() => fetchTodoById(todo.id)}>
              Edit
            </button>
            <button
              className="btn btn-danger float-end"
              onClick={() => deleteTodo(todo)}>
              Remove
            </button>
            <input
              checked={todo.completed}
              type="checkbox"
              style={{ marginRight: "10px" }}
              readOnly
            />
            {todo.title}
            <p>{todo.description}</p>
            <p>{todo.due}</p>
          </li>
        ))}
      </ul>
      <br />
      <h3>Updating description of a ToDo</h3>
      <input
        value={todo.id}
        onChange={(e) =>
          setTodo({
            ...todo,
            id: e.target.value,
          })
        }
        className="form-control mb-2"
        type="number"
      />
      <input
        value={todo.description}
        onChange={(e) =>
          setTodo({
            ...todo,
            description: e.target.value,
          })
        }
        className="form-control mb-2"
        type="text"
      />
      <a
        href={`${API}/${todo.id}/description/${todo.description}`}
        className="btn btn-primary me-2">
        Update description to {todo.description}
      </a>
      <br />
      <h3>Updating completed status of a ToDo</h3>
      <input
        value={todo.id}
        onChange={(e) =>
          setTodo({
            ...todo,
            id: e.target.value,
          })
        }
        className="form-control mb-2"
        type="number"
      />
      <a
        href={`${API}/${todo.id}/completed/${todo.completed}`}
        className="btn btn-primary me-2">
        Update completed
      </a>
      <h3>Updating an Item in an Array</h3>
      <input
        value={todo.id}
        onChange={(e) =>
          setTodo({
            ...todo,
            id: e.target.value,
          })
        }
        className="form-control mb-2"
        type="number"
      />
      <input
        value={todo.title}
        onChange={(e) =>
          setTodo({
            ...todo,
            title: e.target.value,
          })
        }
        className="form-control mb-2"
        type="text"
      />
      <a
        href={`${API}/${todo.id}/title/${todo.title}`}
        className="btn btn-primary me-2">
        Update Title to {todo.title}
      </a>
      {/* <h2>Update item title</h2>
      <input
        className="form-control"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      /> */}
      <a
        href={`https://kanbas-node-server-app-qcek.onrender.com/a5/todos/${id}/title/${title}`}
        className="btn btn-primary">
        Update Todo Title
      </a>
      <h3>Retrieving Arrays</h3>
      <a href={API} className="btn btn-primary me-2">
        Get All Todos
      </a>
      <h3>Retrieving an Item from an Array by ID</h3>
      <a href={`${API}/${todo.id}`} className="btn btn-primary me-2">
        Get Todo by ID
      </a>
      <h3>Filtering Array Items</h3>
      <a href={`${API}?completed=true`} className="btn btn-primary me-2">
        Get Completed Todos
      </a>
      <h2>Fetch item by id</h2>
      {/* <input
        className="form-control"
        value={id}
        onChange={(e) => setTodo({ ...todo, id: e.target.value })}
      /> */}
      <input
        className="form-control"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <a
        href={`https://kanbas-node-server-app-qcek.onrender.com/a5/todos/${id}`}
        className="btn btn-primary">
        Fetch Todo {id}
      </a>
      <h2>Fetch Array</h2>
      <a
        href="https://kanbas-node-server-app-qcek.onrender.com/a5/todos"
        className="btn btn-primary">
        Fetch Todos
      </a>
    </div>
  );
}

export default WorkingWithArrays;
