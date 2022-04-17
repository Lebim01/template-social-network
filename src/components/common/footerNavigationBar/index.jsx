import { BsChatLeft, BsWindow } from "react-icons/bs";
import { TiFlashOutline } from "react-icons/ti";
import { FiMenu } from "react-icons/fi";
import IconBadgeCount from "../IconBadge/count";

const FooterNavigationBar = () => {
  return (
    <div className="bg-white flex sticky bottom-0 py-2 justify-around border-t border-gray-500">
      <button className="text-semitiny items-center justify-center flex flex-col gap-1 text-primary font-semibold">
        <BsWindow className="h-4 w-4" />
        Feed
      </button>
      <button className="text-semitiny items-center justify-center flex flex-col gap-1 font-semibold">
        <IconBadgeCount count={5}>
          <BsChatLeft className="h-4 w-4" />
        </IconBadgeCount>
        Chats
      </button>
      <button className="text-semitiny items-center justify-center flex flex-col gap-1 font-semibold">
        <TiFlashOutline className="h-5 w-5" />
        Notifications
      </button>
      <button className="text-semitiny items-center justify-center flex flex-col gap-1 font-semibold">
        <FiMenu className="h-5 w-5" />
        More
      </button>
    </div>
  );
};

export default FooterNavigationBar;
