import React, { useState, useRef } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./form.module.css";

export default function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState({ name: "", done: false });
  const inputRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    if (todo.name.trim() !== "") {
      setTodos([...todos, todo]);
      setTodo({ name: "", done: false });
      toast.success("Todo added successfully!");
      inputRef.current.value = ""; // Clear the input field directly using ref
    } else {
      toast.error("Please enter a todo item!");
    }
  }

  return (
    <form className={styles.todoform} onSubmit={handleSubmit}>
      <div className={styles.inputContainer}>
        <input
          ref={inputRef}
          className={styles.modernInput}
          value={todo.name}
          onChange={(e) => setTodo({ ...todo, name: e.target.value })}
          type="text"
          placeholder="Enter todo item..."
        />
        <button className={styles.modernButton} type="submit">
          Add
        </button>
      </div>
    </form>
  );
}
