import { FaAngleRight } from "react-icons/fa";

const MenuItem = ({ children, icon }) => {
  return (
    <div className="flex items-center gap-3">
      <span>
        <div className="h-10 w-10 rounded-md bg-gray-300">{icon}</div>
      </span>
      <span className="text-semibold flex-1">{children}</span>
      <span className="text-gray-300">
        <FaAngleRight />
      </span>
    </div>
  );
};

export default MenuItem;
