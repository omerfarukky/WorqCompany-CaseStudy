import React, { useState } from "react";

function ListItem(props) {
  const { todo, id, checkComplate, handleEditTodos } = props;
  const [onEdit, setOnEdit] = useState(false);
  const [editDescription, setEditDescription] = useState(todo.description);
  const [editName, setEditName] = useState(todo.name);

  const handleOnEdit = () => {
    setOnEdit(true);
  };

  const handleSave = (id) => {
    setOnEdit(false);
    if (editDescription && editName) {
      handleEditTodos(editDescription, editName, id);
    } else {
      setEditDescription(todo.description);
      setEditName(todo.name);
    }
  };

  if (onEdit) {
    return (
      <li className="edit">
        Description :
        <input
          type="text"
          id="editDescription"
          name="editDescription"
          value={editDescription}
          onChange={(e) => setEditDescription(e.target.value)}
        />
        Name
        <input
          type="text"
          id="editName"
          name="editName"
          value={editName}
          onChange={(e) => setEditName(e.target.value)}
        />
        <button onClick={() => handleSave(id)}>Save</button>
      </li>
    );
  } else {
    return (
      <li>
        <label htmlFor={id} className={todo.state ? "active" : ""}>
          <input
            type="checkbox"
            id={id}
            checked={todo.state}
            onChange={() => checkComplate(id)}
          />
          {todo.description}
          {todo.name}
          {todo.crated}
          {todo.updated}
        </label>
        <button disabled={todo.state} onClick={handleOnEdit}>
          Edit
        </button>
      </li>
    );
  }
}

export default ListItem;
