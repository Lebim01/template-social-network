import BackButton from "components/common/BackButton";
import ProfileImage from "components/common/ProfileImage";
import { BsInfoCircle } from "react-icons/bs";

const ChatHeader = () => {
  return (
    <div className="flex flex-row items-center gap-3 border-b border-gray-300 bg-white p-3">
      <div>
        <BackButton className={"text-2xl"} />
      </div>
      <div className="flex flex-1 flex-row items-center gap-2">
        <div>
          <ProfileImage className={"h-10 w-10"} />
        </div>
        <div className="flex flex-col">
          <span className="font-bold">Group Chat</span>
          <span className="text-sm text-gray-500">2 of 8 online</span>
        </div>
      </div>
      <div>
        <BsInfoCircle className="text-2xl font-bold text-primary" />
      </div>
    </div>
  );
};

export default ChatHeader;
