import React, { createContext, ReactNode, useState } from "react";

interface TodoContextProps {
  children: ReactNode;
}

interface TodoContextValue {
  todos: string[];
  setTodos: React.Dispatch<React.SetStateAction<string[]>>;
  todoInput: string;
  setTodoInput: React.Dispatch<React.SetStateAction<string>>;
  isEditing: boolean;
  setEditing: React.Dispatch<React.SetStateAction<boolean>>;
  index: number | undefined;
  setTodoIndex: React.Dispatch<React.SetStateAction<number | undefined>>;
}

export const TodoContext = createContext<TodoContextValue | undefined>(
  undefined
);

export const TodoProvider: React.FC<TodoContextProps> = ({ children }) => {
  const [todos, setTodos] = useState<string[]>([]);
  const [todoInput, setTodoInput] = useState<string>("");
  const [isEditing, setEditing] = useState<boolean>(false);
  const [index, setTodoIndex] = useState<number | undefined>(undefined);

  return (
    <TodoContext.Provider
      value={{
        todos,
        setTodos,
        todoInput,
        setTodoInput,
        isEditing,
        setEditing,
        index,
        setTodoIndex,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
