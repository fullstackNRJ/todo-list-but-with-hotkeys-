import React, { useState } from "react";
import ToDoItem from "./TodoItem";
import "./index.css";
import { useTodoProvider } from "./useTodoList";
import { useHotkeys } from "react-hotkeys-hook";

type TodoListProps = {};

const TodoList: React.FC<TodoListProps> = () => {
  const { todoList, setTodoList } = useTodoProvider();
  const [bool, setBool] = useState(false);

  const addATodo = () => {
    setTodoList([...todoList, ""]);
  };

  const deleteLastTodo = () => {
    const newList = [...todoList];
    newList.pop();
    setTodoList(newList);
  };

  useHotkeys(bool ? "del" : "backspace", deleteLastTodo);
  useHotkeys("enter", addATodo);

  return (
    <div>
      <div className="controlsbar">
        <button onClick={addATodo}>ADD</button>
        <button
          onClick={() => {
            setBool(!bool);
          }}
        >
          FLIP
        </button>
      </div>
      {todoList.map((item, index) => {
        return <ToDoItem content={item} index={index} key={index} />;
      })}
    </div>
  );
};

export default TodoList;
