import React, { useCallback, useState } from "react";
import ToDoItem from "./TodoItem";
import "./index.css";
import { useTodoProvider } from "./useTodoList";
import useKeyboardShortcut from "./../hooks/useKeyboardShortcut";

type TodoListProps = {};

const TodoList: React.FC<TodoListProps> = () => {
  // const [todoList, setTodoList] = useState<string[]>([]);

  const { todoList, setTodoList } = useTodoProvider();
  // const [bool, setBool] = useState(false);

  const keys = ["Shift", "E"];
  const keysAlternate = ["Meta", "C"];

  // const addATodo = () => {
  //   console.log("LENGTH", todoList.length);
  //   setTodoList((prv) => [...prv, ""]);
  // };
  const addATodo = useCallback(
    (keys: any) => {
      setTodoList((prev) => [...prev, ""]);
    },
    [setTodoList]
  );

  useKeyboardShortcut(["P"], addATodo);
  useKeyboardShortcut(keys, addATodo, { overrideSystem: true });
  useKeyboardShortcut(keysAlternate, addATodo, { overrideSystem: true });
  // useKeyboardShortcut(["Alt"], showDelIcons, { overrideSystem: true });

  const deleteLastTodo = () => {
    setTodoList((prv) => {
      const newState = [...prv];
      newState.pop();
      return newState;
    });
  };

  // const addRef = useHotkeys("enter", addATodo);
  // const delRef = useHotkeys("backspace", deleteLastTodo);

  return (
    <div tabIndex={-1}>
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
