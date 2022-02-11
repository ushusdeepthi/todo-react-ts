import React, { useState } from "react";
import CreateTodo from "./components/CreateTodo";
import TodoList from "./components/TodoList";
import { Todo } from "./todo.model";

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const todoHandler = (text: string) => {
    const id = Math.random();
    setTodos([...todos, { id, text }]);
  };
  const deleteTodo = (todoId: number) => {
    setTodos(todos.filter((todo) => todo.id !== todoId));
  };
  return (
    <div className="container">
      <TodoList items={todos} deleteTodo={deleteTodo} />
      <CreateTodo onAddTodo={todoHandler} />
    </div>
  );
};

export default App;
