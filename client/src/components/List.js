import React, { useContext } from "react";
import axios from "axios";
import ListItem from "./ListItem";
import { DataContext } from "./DataProvider";

function List() {
  const [todos, setTodos] = useContext(DataContext);

  const updateTodo = async (todo) => {
    await axios.put(`http://localhost:5000/${todo.todo_id}`, {
      description: todo.description,
      name: todo.name,
      state: todo.state,
    });
  };

  const switchComplate = (id) => {
    const newTodos = [...todos];
    newTodos.forEach((todo, i) => {
      if (i === id) {
        todo.state = !todo.state;
        updateTodo(todo);
      }
    });
    setTodos(newTodos);
  };

  const handleEditTodos = (editDescription, editName, id) => {
    const newTodos = [...todos];
    newTodos.forEach((todo, i) => {
      if (i === id) {
        todo.description = editDescription;
        todo.name = editName;
        updateTodo(todo);
      }
    });
    setTodos(newTodos);
  };

  return (
    <>
      <ul>
        {" "}
        <li>
          <a style={{ paddingLeft: "30px" }}>Description</a>
          <a>Name</a>
          <a>Create</a>
          <a>Update</a>
          <a>Edit</a>
        </li>
      </ul>
      <ul>
        {todos.map((todo, i) => (
          <ListItem
            todo={todo}
            key={i}
            id={i}
            checkComplate={switchComplate}
            handleEditTodos={handleEditTodos}
          />
        ))}
      </ul>
    </>
  );
}

export default List;
