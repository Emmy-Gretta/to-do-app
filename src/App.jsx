import React, { useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import './App.css';

const App = () => {

  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState(null);
  const [filter, setFilter] = useState("all");//Possible values: "all", "completed", "Incomplete"

  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <Header />
        </div>
        <div>
          <Form 
          input={input}
          setInput={setInput}
          todos={todos}
          setTodos={setTodos}
          editTodo={editTodo}
          setEditTodo={setEditTodo}
          filter={filter}
          setFilter={setFilter}
          />
        </div>
        <div>
          <TodoList 
            todos={todos} 
            setTodos={setTodos}
            setEditTodo={setEditTodo}
            filter={filter}
            setFilter={setFilter}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
