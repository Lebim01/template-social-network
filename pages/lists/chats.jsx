import { HiSearch } from "react-icons/hi";
import { BsPencilSquare } from "react-icons/bs";
import Chats from "components/chats";

const ChatList = () => {
  return (
    <div>
      <div className="sticky flex flex-col justify-between gap-2 border-b border-gray-200 p-3 text-xl">
        <div className="flex w-full justify-between">
          <span className="text-3xl font-bold">Chats</span>
          <button className=" text-primary">
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
    </div>
  );
};

export default ChatList;
