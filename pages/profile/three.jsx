import BackButton from "components/common/BackButton";
import { FiShare } from "react-icons/fi";
import { FaRegComment } from "react-icons/fa";
import { MdOutlineNotificationsNone } from "react-icons/md";
import { GoLocation } from "react-icons/go";
import { BsLink45Deg } from "react-icons/bs";
import TransparentHeader from "components/common/layout/Header/transparent";
import ProfileImage from "components/common/ProfileImage";
import Link from "next/link";
import Post from "components/feed/CardsPosts/Post";

const ProfileTab = ({ active, children }) => {
  return (
    <button
      className={`flex-1 items-center p-2 text-center font-bold ${
        active ? "border-b-2 border-primary text-primary" : "text-gray-500"
      }`}
    >
      {children}
    </button>
  );
};

const ProfileOne = () => {
  return (
    <div className="flex flex-col">
      <div className="relative h-52 w-full bg-gradient-to-b from-gray-300 to-gray-100">
        <TransparentHeader
          left={<BackButton className="text-white" />}
          right={
            <button className=" text-white">
              <FiShare />
            </button>
          }
        />
        <ProfileImage className={"absolute bottom-[-25%] left-5 h-24 w-24"} />
      </div>
      <div className="relative flex flex-col gap-2 p-3">
        <div className="flex justify-end gap-3">
          <button className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-400 p-3 text-3xl text-gray-400">
            <MdOutlineNotificationsNone />
          </button>
          <button className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-400 p-3 text-xl text-gray-400">
            <FaRegComment />
          </button>
          <button className="rounded-full bg-primary py-3 px-8 text-primary-text">
            Follow
          </button>
        </div>
        <div className="flex flex-col">
          <span className="text-3xl font-bold">Tony Casey</span>
          <span className="text-gray-400">@tonycasey</span>
        </div>
      </div>
      <div className="px-4">
        Living in today’s metropolitan world of cellular phones, mobile
        computers and other high-tech gadgets is not just hectic but very
        impersonal.
      </div>
      <div className="mt-2 flex flex-col gap-1 px-4">
        <div className="flex items-center gap-5 text-gray-500">
          <span className="flex items-center gap-1">
            <GoLocation />
            San Francisco
          </span>
          <Link href="https://google.com" passHref>
            <a className="flex items-center gap-1 text-primary">
              <BsLink45Deg />
              google.com
            </a>
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-bold">123</span> Followers <span>∙</span>{" "}
          <span className="font-bold">2</span> Following
        </div>
      </div>
      <div className="separator mt-2" />
      <div className="flex justify-around border-b border-gray-300 px-4">
        <ProfileTab active>Posts</ProfileTab>
        <ProfileTab>Replies</ProfileTab>
        <ProfileTab>Media</ProfileTab>
      </div>
      <div className="flex flex-col gap-3 bg-gray-100 py-3">
        <Post
          owner_name="Tony Casey"
          body_text={`Living in today’s metropolitan world of cellular phones, mobile computers and other high-tech gadgets is not just hectic but very impersonal.`}
          time_ago="4 hours ago"
        />
        <Post
          owner_name="Tony Casey"
          body_text={`Living in today’s metropolitan world of cellular phones, mobile computers and other high-tech gadgets is not just hectic but very impersonal.`}
          time_ago="4 hours ago"
        />
      </div>
    </div>
  );
};

export default ProfileOne;
