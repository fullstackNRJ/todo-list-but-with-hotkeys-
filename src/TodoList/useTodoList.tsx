import React, { useContext, useState } from "react";
// import { UseFormReturn, FieldValues } from 'react-hook-form';

type TodoContextType = {
  todoList: string[];
  setTodoList: React.Dispatch<React.SetStateAction<string[]>>;
};

const TodoContext: React.Context<TodoContextType> = React.createContext<TodoContextType>({} as any);

export const TodoProvider = (props: any) => {
  const [todoList, setTodoList] = useState<string[]>([]);
  return (
    <TodoContext.Provider value={{ todoList, setTodoList }}>{props.children}</TodoContext.Provider>
  );
};

export function useTodoProvider() {
  const context = useContext(TodoContext);
  //   console.log(">>>>>>", context);

  if (!context) {
    throw new Error("useTodoListProvider must be used within an TodoProvider");
  }
  return context;
}

export default useTodoProvider;
