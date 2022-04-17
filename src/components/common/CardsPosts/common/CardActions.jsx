import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { BiLike } from "react-icons/bi";
import { FaRegComment } from "react-icons/fa";
import { BsArrow90DegRight } from "react-icons/bs";

const CardActions = ({ likes_count, comments_count }) => {
  return (
    <div className="flex">
      <div className="flex flex-1 gap-5">
        <div className="flex items-center text-gray-400 gap-1">
          <BiLike className="h-5 w-5" />
          <span className="text-sm">{likes_count || null}</span>
        </div>
        <div className="flex items-center text-gray-400 gap-1">
          <FaRegComment className="h-5 w-5" />
          <span className="text-sm">{comments_count || null}</span>
        </div>
        <BsArrow90DegRight className="h-5 w-5 text-gray-400" />
      </div>
      <div>
        <HiOutlineDotsHorizontal className="h-5 w-5 text-gray-400" />
      </div>
    </div>
  );
};

export default CardActions;
