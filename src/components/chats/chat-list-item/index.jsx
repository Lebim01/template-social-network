import ProfileImage from "components/common/ProfileImage";
import { FaPen, FaCheck } from "react-icons/fa";
import { BsPeople } from "react-icons/bs";

const ChatListItem = ({
  name,
  photo,
  time_ago,
  message: { text, owner_name },
  count,
  is_typing,
  is_group,
  is_watched,
  is_own,
}) => {
  return (
    <div className="flex items-center gap-3 p-2">
      <div>
        <ProfileImage className={"h-16 w-16"} src={photo} />
      </div>
      <div className="flex flex-1 flex-col">
        <div className="flex justify-between">
          <span className="flex items-center gap-2 text-xl font-bold">
            {!is_watched && !is_own && (
              <div className="h-2 w-2 rounded-full bg-primary" />
            )}
            {is_group && <BsPeople />} {name}
          </span>
          <span className="text-md flex items-center gap-1 text-gray-500">
            {is_own && (
              <div
                className={`${is_watched ? `text-primary` : ""} flex items-end`}
              >
                <FaCheck className="translate-x-2" />
                <FaCheck className="text-sm" />
              </div>
            )}
            {time_ago}
          </span>
        </div>
        <div className="flex justify-between">
          <div className="flex-1 text-lg text-gray-500">
            {is_typing && (
              <span className="flex items-center gap-2">
                <FaPen className="border-b border-gray-400 text-sm" /> typing...
              </span>
            )}
            {!is_typing && (
              <span
                className={`max-lines-1 flex gap-1 ${
                  !is_watched && !is_own ? "font-bold" : ""
                }`}
              >
                {is_group && <span>{owner_name}:</span>}
                {text}
              </span>
            )}
          </div>
          <div>
            {count && (
              <div className="text-md aspect-auto items-center justify-center rounded-full bg-primary px-2 text-center text-primary-text">
                <span>{count}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatListItem;
