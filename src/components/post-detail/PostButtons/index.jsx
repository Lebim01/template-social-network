import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { FaRegThumbsUp } from "react-icons/fa";
import { BsArrow90DegRight } from "react-icons/bs";

const PostButtons = ({ liked = false }) => {
  return (
    <div className="flex">
      <div className="flex flex-1 gap-8">
        <div
          className={`flex items-center gap-1 ${
            liked ? "font-bold text-primary" : "text-gray-400"
          }`}
        >
          <FaRegThumbsUp className="h-7 w-7" />
        </div>
        <div className="flex items-center gap-1 text-gray-400">
          <BsArrow90DegRight className="h-7 w-7" />
        </div>
      </div>
      <div>
        <HiOutlineDotsHorizontal className="h-7 w-7 text-gray-400" />
      </div>
    </div>
  );
};

export default PostButtons;
