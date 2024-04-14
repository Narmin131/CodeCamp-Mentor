import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
const Home = () => {
  const [todos, setTodos] = useState([]);

  //crud - create, read, update, delete

  const [todo, setTodo] = useState({
    id: uuidv4(),
    title: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(todo);
    setTodos([...todos, todo]);
    setTodo({
      title: "",
    });
    console.log(todos);
  };

  const handleChange = (e) => {
    setTodo({ ...todo, [e.target.name]: e.target.value });
  };

  return (
    <>
      {todos.map((item) => {
        return (
          <div>
            <input value={item.id} disabled className="form-control" />
            <h1>{item.title}</h1>
          </div>
        );
      })}
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Title
            </label>
            <input
              type="password"
              className="form-control"
              name="title"
              onChange={handleChange}
              value={todo.title}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Home;
