import React from "react";
import { useState, useEffect } from "react";
import { ITodo } from "../Interfaces";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";

const TodosPage: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("todos") || "[]") as ITodo[];
    setTodos(saved);
  }, []);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  const addHandler = (title: string) => {
    const newTodo: ITodo = {
      title,
      id: Date.now(),
      completed: false,
    };
    setTodos((prev) => [newTodo, ...prev]);
  };

  const toggleHandler = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  };

  const removeHandler = (id: number) => {
    const shoudRemove = confirm("Вы уверенны что хотите удалить элемент?");
    if (shoudRemove) {
      setTodos((prev) => prev.filter((todo) => todo.id !== id));
    }
  };
  return (
    <>
      <TodoForm onAdd={addHandler} />
      <TodoList
        onToggle={toggleHandler}
        onRemove={removeHandler}
        todos={todos}
      />
    </>
  );
};

export default TodosPage;
