import { useTodoContext } from "@/hooks/use_todo_context";
import { useState } from "react";

const TodosFilter: React.FC = () => {
  const [activeTab, setActiveTab] = useState("All");
  const { setTodos } = useTodoContext();

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const deleteAllTodo = () => {
    setTodos([]);
    localStorage.removeItem("todos");
  };

  return (
    <div className="my-5 w-full px-2 flex justify-between items-center text-sm">
      <div className="flex space-x-6">
        <label
          onClick={() => handleTabClick("All")}
          className={`hover:border-b-2 hover:text-blue-500 transition-all duration-100 cursor-pointer ${
            activeTab === "All"
              ? "border-b-2 border-blue-500 text-blue-500"
              : ""
          }`}
        >
          All
        </label>
        <label
          onClick={() => handleTabClick("Pending")}
          className={`hover:border-b-2 hover:text-blue-500 transition-all duration-100 cursor-pointer ${
            activeTab === "Pending"
              ? "border-b-2 border-blue-500 text-blue-500"
              : ""
          }`}
        >
          Pending
        </label>
        <label
          onClick={() => handleTabClick("Completed")}
          className={`hover:border-b-2 hover:text-blue-500 transition-all duration-100 cursor-pointer ${
            activeTab === "Completed"
              ? "border-b-2 border-blue-500 text-blue-500"
              : ""
          }`}
        >
          Completed
        </label>
      </div>

      <button
        onClick={deleteAllTodo}
        className="bg-blue-500 py-2 px-3 rounded-sm font-medium text-xs text-white"
      >
        Clear All
      </button>
    </div>
  );
};

export default TodosFilter;
