import React, { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoForm({
  input,
  setInput,
  todos,
  setTodos,
  editTodo,
  setEditTodo,
}) {
  const updateTodo = (title, id, completed) => {
    const newTodo = todos.map((todo) =>
      todo.id === id ? { title, id, completed } : todo
    );
    setTodos(newTodo);
    setEditTodo("");
  };

  useEffect(() => {
    if (editTodo) {
      setInput(editTodo.title);
    } else {
      setInput("");
    }
  }, [setInput, editTodo]);


  
  const onChange = (e) => {
    setInput(e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (!editTodo) {
      setTodos([...todos, { id: uuidv4(), title: input, completed: false }]);
      setInput("");
    } else {
      updateTodo(input, editTodo.id, editTodo.completed);
    }
  };
  return (
    <>
      <form className="form-box" onSubmit={onFormSubmit}>
        <input
          type="text"
          className="form"
          placeholder="add a to do task"
          value={input}
          required
          onChange={onChange}
        />

        <button className="add-button" type="submit">
          {editTodo ? "OK" : "ADD"}
        </button>
      </form>
    </>
  );
}
