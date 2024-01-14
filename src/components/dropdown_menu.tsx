import { FiEdit } from "react-icons/fi";
import { MdOutlineDeleteForever } from "react-icons/md";

interface DropdownProps {
  isDropdownOpen: boolean;
  editTodo: () => void;
  deleteTodo: () => void;
}

const DropDownMenu: React.FC<DropdownProps> = ({
  isDropdownOpen,
  editTodo,
  deleteTodo,
}) => {
  return (
    <div
      className={`${
        isDropdownOpen ? null : "hidden"
      }  z-50 absolute right-0 top-1  my-4 text-base  list-none bg-white divide-y divide-gray-100 rounded-lg shadow`}
      id="more-dropdown-menu"
    >
      <ul className="p-4 font-medium" role="none">
        <li>
          <div
            onClick={editTodo}
            className="inline-flex space-x-2 items-center cursor-pointer text-blue-500"
          >
            <p className="text-xs">Edit</p>
            <FiEdit />
          </div>
        </li>
        <li>
          <div
            onClick={deleteTodo}
            className="inline-flex space-x-2 mt-3 cursor-pointer text-sm items-center text-red-500"
          >
            <p className="text-xs">Delete</p>
            <MdOutlineDeleteForever size={18} />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default DropDownMenu;
