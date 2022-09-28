import React, { ChangeEvent, useRef } from "react";
import { Input } from "./../TextInput";
import useTodoProvider from "./useTodoList";

type ToDoItemProps = {
  content: string;
  index: number;
};

const ToDoItem: React.FC<ToDoItemProps> = ({ content, index }) => {
  const { setTodoList, todoList } = useTodoProvider();

  const ref: React.MutableRefObject<null | HTMLInputElement> = useRef(null);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newTodoList = [...todoList];
    newTodoList[index] = event.target.value;
    setTodoList(newTodoList);
  };

  return (
    <div style={{ margin: "2rem" }}>
      <Input ref={ref} value={content} onChange={onChange} id={JSON.stringify(index)} label={""} />
    </div>
  );
};

export default ToDoItem;
