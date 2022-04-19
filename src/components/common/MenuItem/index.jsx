import { FaAngleRight } from "react-icons/fa";

const MenuItem = ({ children, icon }) => {
  return (
    <div className="flex items-center gap-3 border-b border-gray-300 px-3 py-2">
      <span>
        <div className="flex h-10 w-10 items-center justify-center rounded-md bg-gray-300 text-2xl text-white">
          {icon}
        </div>
      </span>
      <span className="text-semibold flex-1">{children}</span>
      <span className="text-gray-300">
        <FaAngleRight />
      </span>
    </div>
  );
};

export default MenuItem;
