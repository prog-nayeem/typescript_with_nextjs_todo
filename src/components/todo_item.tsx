import { ChangeEvent, useEffect, useRef, useState } from "react";
import DropDownMenu from "./dropdown_menu";
import { useTodoContext } from "@/hooks/use_todo_context";

interface TodoItemProps {
  todoText: string;
  index: number;
}

const TodoItem: React.FC<TodoItemProps> = ({ todoText, index }) => {
  const [isChecked, setChecked] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const { todos, setTodos, setTodoInput, setTodoIndex, setEditing } =
    useTodoContext();

  const deleteTodo = () => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
    setDropdownOpen(false);
  };

  const editTodo = () => {
    setEditing(true);
    setTodoInput(todoText);
    setTodoIndex(index);
  };

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
  };

  const handleDropdownChange = () => {
    setDropdownOpen(() => !isDropdownOpen);
  };

  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleCloseDropdown = (e: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(e.target as Node)
    ) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleCloseDropdown);
    return () => {
      document.removeEventListener("mousedown", handleCloseDropdown);
    };
  }, []);

  return (
    <>
      <div
        key={index}
        className="my-4 w-full text-sm items-center flex justify-between"
      >
        <div className="flex space-x-2 items-center">
          <input
            onChange={handleCheckboxChange}
            checked={isChecked}
            className="w-[14px] h-[14px] text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
            type="checkbox"
          />
          <p className={`${isChecked ? "line-through" : null}`}>{todoText}</p>
        </div>
        <div ref={dropdownRef} className="relative">
          <button
            onClick={handleDropdownChange}
            type="button"
            data-dropdown-toggle="more-dropdown-menu"
            className="pb-1"
          >
            ...
          </button>
          <DropDownMenu
            isDropdownOpen={isDropdownOpen}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        </div>
      </div>
      <hr />
    </>
  );
};

export default TodoItem;
