import { HiSearch } from "react-icons/hi";
import { BsPencilSquare } from "react-icons/bs";
import Chats from "components/chats";
import FooterNavigationBar from "components/common/layout/FooterNavigationBar";
import { useRouter } from "next/router";

const ChatList = () => {
  const router = useRouter();
  return (
    <div className="relative h-full">
      <div className="sticky top-0 z-20 flex flex-col justify-between gap-2 border-b border-gray-200 bg-white p-3 text-xl">
        <div className="flex w-full justify-between">
          <span className="text-3xl font-bold">Chats</span>
          <button
            className=" text-primary"
            onClick={() => router.push("/chat/new-group")}
          >
            <BsPencilSquare />
          </button>
        </div>
        <div className="flex w-full items-center gap-2 rounded-full bg-gray-100 py-2 px-4 text-gray-400">
          <label htmlFor="search">
            <HiSearch />
          </label>
          <input
            placeholder="Search"
            id="search"
            className="w-full bg-gray-100"
          />
        </div>
      </div>

      <Chats />
      <FooterNavigationBar className="absolute" />
    </div>
  );
};

export default ChatList;
