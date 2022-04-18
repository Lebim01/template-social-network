import CardHeader from "../common/CardHeader";
import SharedEvent from "./sharedEvent";
import { FaRegComment, FaRegThumbsUp } from "react-icons/fa";
import { BsArrow90DegRight } from "react-icons/bs";

const PostSharedEvent = ({
  owner_name,
  owner_photo,
  time_ago,
  event,
  comments_count,
  likes_count,
}) => {
  return (
    <div className="feed-card-no-p">
      <div className="px-3 pt-3">
        <CardHeader
          owner_name={owner_name}
          owner_photo={owner_photo}
          time_ago={time_ago}
          customText={
            <span>
              <span className="font-bold">{owner_name}</span>{" "}
              <span className="text-gray-500">shared</span>{" "}
              <span className="">event</span>
            </span>
          }
        />
      </div>
      <SharedEvent {...event} />
      <div className="px-3">
        <div className="separator"></div>
      </div>
      <div className="mb-3 flex justify-between px-3">
        <div className="flex gap-10">
          <div className="flex items-center gap-2 text-gray-500">
            <button className="rounded-full bg-gray-200 p-3 ">
              <FaRegThumbsUp className="h-5 w-5" />
            </button>
            <span>{likes_count}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-500">
            <button className="rounded-full bg-gray-200 p-3">
              <FaRegComment className="h-5 w-5" />
            </button>
            {comments_count}
          </div>
        </div>
        <div>
          <button className="rounded-full bg-gray-200 p-3 text-gray-500">
            <BsArrow90DegRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostSharedEvent;
