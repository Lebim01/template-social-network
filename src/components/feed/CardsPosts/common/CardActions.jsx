import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { FaRegComment, FaRegThumbsUp } from "react-icons/fa";
import { BsArrow90DegRight } from "react-icons/bs";

const CardActions = ({ likes_count, comments_count, shared_count, liked }) => {
  return (
    <div className="flex">
      <div className="flex flex-1 gap-5">
        <button
          className={`flex items-center gap-1 ${
            liked ? "font-bold text-primary" : "text-gray-400"
          }`}
        >
          <FaRegThumbsUp className="h-5 w-5" />
          <span className="text-sm">{likes_count || null}</span>
        </button>
        <button className="flex items-center gap-1 text-gray-400">
          <FaRegComment className="h-5 w-5" />
          <span className="text-sm">{comments_count || null}</span>
        </button>
        <button className="flex items-center gap-1 text-gray-400">
          <BsArrow90DegRight className="h-5 w-5" />
          <span className="text-sm">{shared_count || null}</span>
        </button>
      </div>
      <div>
        <button>
          <HiOutlineDotsHorizontal className="h-5 w-5 text-gray-400" />
        </button>
      </div>
    </div>
  );
};

export default CardActions;
