const moment = require("moment");
const pool = require("../loaders/db");

const insert = async (todoDate) => {
  const { description, name, state } = todoDate;
  const newTodo = await pool.query(
    "INSERT INTO todo (description,name,state) VALUES($1,$2,$3) RETURNING *",
    [description, name, state]
  );
  return newTodo.rows;
};

const list = async () => {
  const allTodos = await pool.query("SELECT * FROM todo ");
  return allTodos.rows;
};

const updatedT = async (todoDate, id) => {
  const {description, name, state } = todoDate;
  const updated = moment().format();
  const updatedTodo = await pool.query(
    "UPDATE todo SET description = $1, name=$2,state=$3, updated=$4 WHERE todo_id = $5",
    [description, name, state, updated, id]
  );
  return updatedTodo;
};

module.exports = {
  insert,
  list,
  updatedT,
};
