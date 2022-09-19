import React from "react";
import ToDoItem from "./TodoItem";
import "./index.css";
import { useTodoProvider } from "./useTodoList";
import { HotKeys } from "react-hotkeys";

type TodoListProps = {};

const keyMap = {
  ADD_A_TODO: "enter",
  DELETE_A_TODO: "del",
};
const TodoList: React.FC<TodoListProps> = () => {
  const addATodo = () => {
    setTodoList([...todoList, ""]);
  };
  const deleteLastTodo = () => {
    const newList = [...todoList];
    newList.pop();
    setTodoList(newList);
  };
  const handlers = {
    ADD_A_TODO: addATodo,
    DELETE_A_TODO: deleteLastTodo,
  };
  const { todoList, setTodoList } = useTodoProvider();

  return (
    <HotKeys keyMap={keyMap}>
      <div>
        <div className="controlsbar">
          <button onClick={addATodo}>ADD</button>
        </div>
        {todoList.map((item, index) => {
          return (
            <HotKeys handlers={handlers} key={`${index}+${item}`}>
              <ToDoItem content={item} index={index} key={`${index}+${item}`} />
            </HotKeys>
          );
        })}
      </div>
    </HotKeys>
  );
};

export default TodoList;
