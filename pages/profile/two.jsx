import BackButton from "components/common/BackButton";
import { FiShare } from "react-icons/fi";
import { BiMessage, BiBookAlt } from "react-icons/bi";
import { BsPeople, BsCheckSquare } from "react-icons/bs";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { FaUserCheck, FaCheck, FaAngleDown, FaImage } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";
import TransparentHeader from "components/common/layout/Header/transparent";
import ProfileImage from "components/common/ProfileImage";

const ProfileButton = ({ active, children }) => {
  return (
    <button
      className={`flex flex-1 flex-col ${
        active ? "text-primary" : "text-gray-400"
      } text-md items-center justify-between gap-1 rounded-md p-1`}
    >
      {children}
    </button>
  );
};

const ProfileOne = () => {
  return (
    <div className="">
      <div className="relative h-52 w-full bg-gradient-to-b from-gray-200 via-gray-100 to-gray-200">
        <TransparentHeader
          left={<BackButton className="text-white" />}
          right={
            <button className=" text-white">
              <FiShare />
            </button>
          }
        />
        <ProfileImage
          className={
            "absolute bottom-[-25%] left-[50%] h-24 w-24 translate-x-[-50%]"
          }
        />
      </div>
      <div className="relative flex flex-col items-center gap-4 p-3 pt-16">
        <div className="flex flex-col items-center">
          <span className="text-3xl font-bold">Tony Casey</span>
          <span className="text-gray-400">@tonycasey</span>
        </div>
      </div>
      <div className="flex flex-col gap-2 px-4">
        <div className="separator" />
        <div className="flex justify-around">
          <ProfileButton active>
            <FaUserCheck className="h-7 w-7" />
            Friend
          </ProfileButton>
          <ProfileButton active>
            <FaCheck className="h-6 w-6" />
            Following
          </ProfileButton>
          <ProfileButton>
            <BiMessage className="h-6 w-6" />
            Message
          </ProfileButton>
          <ProfileButton>
            <HiOutlineDotsHorizontal className="h-6 w-6" />
            More
          </ProfileButton>
        </div>
        <div className="separator" />
        <div className="flex flex-col gap-1 text-lg">
          <div className="flex items-center gap-2">
            <BsPeople />
            <span className="font-bold">1234</span> Friends <span>∙</span>{" "}
            <span className="font-bold">2</span> Manual friends
          </div>
          <div className="flex items-center gap-2">
            <BsCheckSquare />
            <span className="font-bold">2,9K</span> Followers
          </div>
          <div className="flex items-center gap-2">
            <GrLocation />
            Live in <span className="font-bold">San Francisco</span>
          </div>
          <div className="flex items-center gap-2">
            <BiBookAlt />
            Went to <span className="font-bold">Stanford University</span>
          </div>
          <button className="text-md flex items-center gap-2 font-bold text-primary">
            <FaAngleDown />
            <span>More information</span>
          </button>
          <div className="separator" />
        </div>
      </div>
      <div>
        <div className="flex items-center gap-2 p-4">
          <FaImage />
          <span className="font-bold">1,2K</span> Photos
        </div>
        <div className="grid grid-cols-3 gap-1">
          <div className="h-40 bg-gray-200"></div>
          <div className="h-40 bg-gray-200"></div>
          <div className="h-40 bg-gray-200"></div>
          <div className="h-40 bg-gray-200"></div>
          <div className="h-40 bg-gray-200"></div>
          <div className="h-40 bg-gray-200"></div>
          <div className="h-40 bg-gray-200"></div>
        </div>
      </div>
    </div>
  );
};

export default ProfileOne;
