import { BsChatLeft, BsWindow } from "react-icons/bs";
import { TiFlashOutline } from "react-icons/ti";
import { FiMenu } from "react-icons/fi";
import IconBadgeCount from "../../IconBadge/count";
import { useRouter } from "next/router";

const FooterNavigationBar = ({ className = "" }) => {
  const router = useRouter();

  return (
    <div
      className={`absolute bottom-0 flex w-full justify-around border-t border-gray-500 bg-white py-2`}
    >
      <button
        className={`flex flex-col items-center justify-center gap-1 text-semitiny font-semibold ${
          router.pathname === "/" ? "text-primary" : ""
        }`}
        onClick={() => router.push("/")}
      >
        <BsWindow className="h-4 w-4" />
        Feed
      </button>
      <button
        className={`flex flex-col items-center justify-center gap-1 text-semitiny font-semibold ${
          router.pathname === "/lists/chats" ? "text-primary" : ""
        }`}
        onClick={() => router.push("/lists/chats")}
      >
        <IconBadgeCount count={5}>
          <BsChatLeft className="h-4 w-4" />
        </IconBadgeCount>
        Chats
      </button>
      <button className="flex flex-col items-center justify-center gap-1 text-semitiny font-semibold">
        <TiFlashOutline className="h-5 w-5" />
        Notifications
      </button>
      <button className="flex flex-col items-center justify-center gap-1 text-semitiny font-semibold">
        <FiMenu className="h-5 w-5" />
        More
      </button>
    </div>
  );
};

export default FooterNavigationBar;
