import axios from "axios";
import React, { useState, useContext } from "react";
import { DataContext } from "./DataProvider";

function FormInput() {
  const [todos, setTodos] = useContext(DataContext);
  const [todoDescription, setTodoDescription] = useState("");
  const [todoName, setTodoName] = useState("");

  const postTodo = async () => {
    await axios.post("http://localhost:5000/", {
      description: todoDescription,
      name: todoName,
      state: false,
    });
  };

  const addTodo = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { description: todoDescription, name: todoName, state: false },
    ]);
    postTodo();
    setTodoDescription("");
    setTodoName("");
  };

  return (
    <form autoComplete="off" onSubmit={addTodo}>
      <input
        type="text"
        name="description"
        value={todoDescription}
        id="description"
        required
        placeholder="Description"
        onChange={(e) => setTodoDescription(e.target.value)}
      />
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Name"
        value={todoName}
        required
        onChange={(e) => setTodoName(e.target.value)}
      />
      <button type="submit">Create</button>
    </form>
  );
}

export default FormInput;
