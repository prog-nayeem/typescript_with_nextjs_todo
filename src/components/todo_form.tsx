import { useTodoContext } from "@/hooks/use_todo_context";
import React, { ChangeEvent, KeyboardEvent } from "react";

const TodoForm: React.FC = () => {
  const {
    todoInput,
    setTodoInput,
    todos,
    setTodos,
    isEditing,
    index,
    setEditing,
  } = useTodoContext();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTodoInput(e.target.value);
  };

  const handleTodoSave = () => {
    if (todoInput.trim() !== "") {
      if (isEditing === true) {
        if (index !== undefined) {
          const updatedTodos = [...todos];
          updatedTodos[index] = todoInput;
          setTodos(updatedTodos);
          localStorage.setItem("todos", JSON.stringify(updatedTodos));
        }
        setEditing(false);
      } else {
        const newTodosArray = [...todos, todoInput.trim()];
        setTodos(newTodosArray);
        localStorage.setItem("todos", JSON.stringify(newTodosArray));
      }
      setTodoInput("");
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleTodoSave();
    }
  };

  return (
    <div className="flex mt-6 px-2  items-center justify-center ">
      <input
        value={todoInput}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        className="outline-none w-[21.2rem] focus:ring-4 focus:ring-gray-50 focus:transition-all focus:duration-200 px-4 py-3 bg-transparent border-t  border-b border-l shadow-sm rounded-tl-md rounded-bl-md placeholder:text-gray-500 border-gray-300"
        placeholder="Add a todo"
      />
      <button
        onClick={handleTodoSave}
        className="rounded-tr-md rounded-br-md shadow-sm bg-purple-600  text-white font-semibold py-3 px-4"
      >
        Add Todo
      </button>
    </div>
  );
};

export default TodoForm;
