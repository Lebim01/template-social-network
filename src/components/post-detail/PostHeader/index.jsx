import ProfileImage from "components/common/ProfileImage";
import Link from "next/link";

const PostHeader = ({ owner_name, time_ago, customText }) => {
  return (
    <div className="flex items-center gap-3">
      <ProfileImage className={"h-14 w-14"} />
      <div className="flex flex-col">
        <span className="flex-1 text-xl">
          {customText ? (
            customText
          ) : (
            <span className="font-bold">{owner_name}</span>
          )}
        </span>
        <span className="text-sm text-gray-400">{time_ago}</span>
      </div>
    </div>
  );
};

export default PostHeader;
