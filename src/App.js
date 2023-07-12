import { useState } from "react";
import "./App.css";
import Todo from "./Componentss/Todo";
import TodoForm from "./Componentss/TodoForm";
import TodoList from "./Componentss/TodoList";

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState(null);
  return (
    <>
      <Todo />
      <TodoForm
        input={input}
        setInput={setInput}
        todos={todos}
        setTodos={setTodos}
        editTodo={editTodo}
        setEditTodo={setEditTodo}
      />

      <TodoList todos={todos} setTodos={setTodos} setEditTodo={setEditTodo} />
    </>
  );
}

export default App;
