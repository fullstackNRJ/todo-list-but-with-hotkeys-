import React from "react";
import ToDoItem from "./TodoItem";
import { useTodoProvider } from "./useTodoList";

type TodoListProps = {};

const TodoList: React.FC<TodoListProps> = () => {
  const { todoList, setTodoList } = useTodoProvider();

  const addATodo = () => {
    setTodoList([...todoList, ""]);
  };

  return (
    <div>
      <button onClick={addATodo}>ADD</button>
      {todoList.map((item, index) => {
        return <ToDoItem content={item} index={index} />;
      })}
    </div>
  );
};

export default TodoList;
