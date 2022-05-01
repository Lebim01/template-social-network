import FooterNavigationBar from "components/common/layout/FooterNavigationBar";
import Header from "components/common/layout/Header";
import ProfileImage from "components/common/ProfileImage";
import { FaArrowUp, FaComment, FaPlus, FaHeart, FaCheck } from "react-icons/fa";

const NotiItem = ({ action_icon, children, owner = {} }) => {
  const { className: classNameProfile = "", ...profile } = owner;
  return (
    <div className="border-b border-gray-200">
      <div className="flex gap-3 py-3 px-3 hover:cursor-pointer hover:bg-gray-100">
        <div className="relative h-min p-1">
          <ProfileImage
            {...profile}
            className={`h-12 w-12 ${classNameProfile}`}
          />
          {action_icon && (
            <div className="absolute bottom-0 right-0 rounded-full border-2 border-white">
              {action_icon}
            </div>
          )}
        </div>
        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
};

const Notifications = () => {
  return (
    <div>
      <Header
        left={<span className="text-3xl font-bold">Notifications</span>}
      />
      <div className="py-3 pb-12">
        <div>
          <span className="px-3 text-xl font-bold">New notification</span>
          <div className="mt-3 flex flex-col">
            <NotiItem
              action_icon={
                <FaArrowUp className="rounded-full bg-teal-300 p-1 text-xl text-white" />
              }
            >
              <div className="flex flex-col">
                <span>
                  <b>{'Club of travellers "Unknown world"'}</b>{" "}
                  <span className="text-gray-500">published a new post</span>{" "}
                  <span className="font-semibold">
                    New trip! Dates: 8-11 March
                  </span>
                  ..
                </span>
                <span className="text-sm font-semibold text-primary">
                  yesterday at 11:44 pm
                </span>
              </div>
            </NotiItem>
            <NotiItem
              owner={{
                letters: "HG",
                className: "bg-pink-200 font-bold text-pink-900",
              }}
              action_icon={
                <FaComment className="rounded-full bg-cyan-500 p-1 text-xl text-white" />
              }
            >
              <div className="flex">
                <span className="flex-1">
                  <b>Herbert Guzman</b>{" "}
                  <span className="text-gray-500">comment your post</span>
                </span>
                <img className="flex- h-12 w-12 rounded-lg bg-gray-100" />
              </div>
              <span className="max-lines-2 border-l-2 border-gray-300 pl-3 text-gray-400">
                Learn how to improve your playing quality and even overall
                understanding of online ..
              </span>
              <span className="text-sm font-semibold text-primary">
                yesterday at 10:06 pm
              </span>
            </NotiItem>
          </div>
        </div>

        <div className="mt-5">
          <span className="px-3 text-xl font-bold">Viewed</span>
          <div className="mt-3 flex flex-col">
            <NotiItem
              owner={{
                letters: "JL",
                className: "bg-cyan-200 font-bold text-cyan-900",
              }}
              action_icon={
                <FaPlus className="rounded-full bg-yellow-500 p-1 text-xl text-white" />
              }
            >
              <div className="flex flex-col">
                <span>
                  <b>Jack Lee</b>{" "}
                  <span className="text-gray-500">
                    send you a friend request
                  </span>
                </span>
                <span className="text-sm font-semibold text-zinc-400">
                  15 Jan at 8:03 pm
                </span>
                <div className="mt-3 flex gap-3">
                  <button className="rounded-full bg-primary py-1 px-5 font-semibold text-primary-text">
                    Add
                  </button>
                  <button className="rounded-full bg-primary-transparent py-1 px-5 font-semibold text-primary">
                    Hide
                  </button>
                </div>
              </div>
            </NotiItem>
            <NotiItem
              owner={{
                letters: "HG",
                className: "bg-pink-200 font-bold text-pink-900",
              }}
              action_icon={
                <FaHeart className="rounded-full bg-red-500 p-1 text-xl text-white" />
              }
            >
              <div className="flex">
                <div className="flex flex-1 flex-col">
                  <span>
                    <b>Herbert Guzman</b>{" "}
                    <span className="text-gray-500">liked your photo</span>
                  </span>
                  <span className="text-sm font-semibold text-zinc-400">
                    15 Jan at 8:01 pm
                  </span>
                </div>
                <img className="flex- h-12 w-12 rounded-lg bg-gray-100" />
              </div>
            </NotiItem>
            <NotiItem
              action_icon={
                <FaCheck className="rounded-full bg-yellow-500 p-1 text-xl text-white" />
              }
            >
              <div className="flex flex-col">
                <span>
                  <b>Jack Lee</b>{" "}
                  <span className="text-gray-500">
                    accepted your friend request
                  </span>
                </span>
                <span className="text-sm font-semibold text-zinc-400">
                  14 Jan at 23:42 am
                </span>
                <div className="mt-3 flex gap-3">
                  <button className="rounded-full bg-primary py-1 px-5 font-semibold text-primary-text">
                    Message
                  </button>
                </div>
              </div>
            </NotiItem>
          </div>
        </div>
      </div>
      <FooterNavigationBar />
    </div>
  );
};

export default Notifications;
