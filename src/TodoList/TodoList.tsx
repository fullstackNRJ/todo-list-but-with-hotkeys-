import React, { useState } from "react";
import ToDoItem from "./TodoItem";
import "./index.css";
import { useTodoProvider } from "./useTodoList";
import { useHotkeys } from "react-hotkeys-hook";

type TodoListProps = {};

const TodoList: React.FC<TodoListProps> = () => {
  // const [todoList, setTodoList] = useState<string[]>([]);

  const { todoList, setTodoList } = useTodoProvider();
  // const [bool, setBool] = useState(false);

  const addATodo = () => {
    console.log("LENGTH", todoList.length);

    setTodoList((prv) => [...prv, ""]);
  };

  const deleteLastTodo = () => {
    // let newList = [...todoList];
    // newList.pop();
    setTodoList((prv) => {
      const newState = [...prv];
      newState.pop();

      return newState;
    });
  };

  useHotkeys("enter", addATodo);
  useHotkeys("backspace", deleteLastTodo);

  return (
    <div>
      <div className="controlsbar">
        <button onClick={addATodo}>ADD</button>
        <button
          onClick={() => {
            // setBool(!bool);
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
