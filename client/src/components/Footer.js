import React, { useContext, useState } from "react";
import { DataContext } from "./DataProvider";

function Footer() {
  const [checkAll, setCheckAll] = useState(false);
  const [todos, setTodos] = useContext(DataContext);

  const handleCheckAll = () => {
    const newTodos = [...todos];
    newTodos.forEach((todo, i) => {
      todo.state = !checkAll;
    });
    setTodos(newTodos);
    setCheckAll(!checkAll);
  };

  return (
    <div className="row">
      <label htmlFor="all">
        <input type="checkbox" name="all" id="all" onClick={handleCheckAll} />
        All
      </label>
      <p>{todos.length}</p>
    </div>
  );
}

export default Footer;
