import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
export const DataContext = createContext();

export const DataProvider = (props) => {
  const [todos, setTodos] = useState([]);

  const getTodo = async () => {
    await axios.get("http://localhost:5000/").then(function (response) {
      setTodos(response.data);
    });
  };
  
  useEffect(() => {
    getTodo();
  }, []);

  return (
    <DataContext.Provider value={[todos, setTodos]}>
      {props.children}
    </DataContext.Provider>
  );
};
