import ProfileImage from "components/common/ProfileImage";
import { FaRegThumbsUp, FaRegComment } from "react-icons/fa";

const PostComment = ({
  owner_name,
  owner_profile,
  time_ago,
  body_text,
  likes_count,
  comments_count,
  files = [],
}) => {
  return (
    <div className="flex gap-3">
      <div>
        <ProfileImage src={owner_profile} className="h-12 w-12" />
      </div>
      <div className="text-md flex flex-1 flex-col gap-2">
        <div className="flex items-center">
          <span className="flex-1 text-lg font-bold">{owner_name}</span>
          <span className="text-gray-400">{time_ago}</span>
        </div>
        {body_text && <span>{body_text}</span>}
        {files.length > 0 && (
          <div className="h-36 w-full rounded-md bg-gray-200"></div>
        )}
        <div className="flex gap-5 text-gray-400">
          <button className="flex items-center gap-1">
            <FaRegThumbsUp className="text-2xl" />
            <span className="text-md">{likes_count || null}</span>
          </button>
          <button className="flex items-center gap-1">
            <FaRegComment className="text-2xl" />
            <span className="text-md">{comments_count || null}</span>
          </button>
        </div>
        <div className="separator my-1" />
      </div>
    </div>
  );
};

export default PostComment;
