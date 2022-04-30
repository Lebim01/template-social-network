import Header from "components/common/layout/Header";
import BackButton from "components/common/BackButton";
import { FiShare } from "react-icons/fi";
import ProfileImage from "components/common/ProfileImage";
import { FaAngleRight } from "react-icons/fa";
import { BiImageAlt } from "react-icons/bi";
import { BsBell, BsStar, BsSearch, BsPlus } from "react-icons/bs";

const MenuItem = ({ children, icon }) => {
  return (
    <div className="flex items-center gap-3 border-b border-gray-300 px-4 py-3 hover:cursor-pointer hover:bg-gray-100 active:bg-gray-100">
      <div>{icon}</div>
      <div className="flex-1">{children}</div>
    </div>
  );
};

const Icon1 = ({ children }) => {
  return (
    <div className="rounded-md bg-gray-200 p-1 text-white">{children}</div>
  );
};

const Button1 = ({ children }) => {
  return (
    <div className="flex items-center justify-between">
      <span>{children}</span>
      <span>
        <FaAngleRight />
      </span>
    </div>
  );
};

const Icon2 = ({ children }) => {
  return (
    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-transparent p-1 text-primary">
      {children}
    </div>
  );
};

const Button2 = ({ children, subtext }) => {
  return (
    <div className="flex flex-col">
      {children}
      {subtext}
    </div>
  );
};

const ChatInfo = () => {
  return (
    <div className=" h-full bg-gray-200 pb-3">
      <Header
        left={<BackButton />}
        right={
          <button className=" text-primary">
            <FiShare />
          </button>
        }
        center={<span className="font-bold">Info</span>}
        className="bg-white"
      />
      <div className="border-b border-gray-300 bg-white">
        <div className="flex items-center gap-3 px-3 py-5">
          <div>
            <ProfileImage
              className="h-20 w-20"
              src="https://picsum.photos/id/3/300/300"
            />
          </div>
          <div className="flex flex-1 flex-col">
            <span className="text-xl font-bold">Product Design</span>
            <span className="text-gray-400">3 members</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col border-b border-gray-300 bg-white p-3">
        <span className="text-gray-400">About</span>
        <span className="max-lines-4">
          As soon as Computerized Tomography or CT scans became accessible in
          the 1970s, they reformed the practice of neurology. They did the scans
          by transmitting x-ray streams all the way
        </span>
      </div>
      <div className="mt-3 flex flex-col bg-white">
        <MenuItem
          icon={
            <Icon1>
              <BiImageAlt className="h-6 w-6" />
            </Icon1>
          }
        >
          <Button1>Media</Button1>
        </MenuItem>
        <MenuItem
          icon={
            <Icon1>
              <BsBell className="h-6 w-6" />
            </Icon1>
          }
        >
          <Button1>Notifications</Button1>
        </MenuItem>
        <MenuItem
          icon={
            <Icon1>
              <BsStar className="h-6 w-6" />
            </Icon1>
          }
        >
          <Button1>Favorite messages</Button1>
        </MenuItem>
        <MenuItem
          icon={
            <Icon1>
              <BsSearch className="h-6 w-6" />
            </Icon1>
          }
        >
          <Button1>Search in chat</Button1>
        </MenuItem>
      </div>
      <div className="mt-3 flex flex-col bg-white">
        <MenuItem
          icon={
            <Icon2>
              <BsPlus className="h-8 w-8" />
            </Icon2>
          }
        >
          <Button2>
            <span className="text-primary">Add members</span>
          </Button2>
        </MenuItem>
        <MenuItem
          icon={
            <ProfileImage
              className="h-10 w-10"
              src="https://picsum.photos/id/3/300/300"
            />
          }
        >
          <Button2
            subtext={<span className="text-sm text-primary">Online</span>}
          >
            <span className="font-bold">Sam Keller</span>
          </Button2>
        </MenuItem>
        <MenuItem
          icon={
            <ProfileImage
              className="h-10 w-10"
              src="https://picsum.photos/id/4/300/300"
            />
          }
        >
          <Button2
            subtext={
              <span className="text-sm text-gray-400">last seen just now</span>
            }
          >
            <span className="font-bold">Jesus Alvarado</span>
          </Button2>
        </MenuItem>
        <MenuItem icon={<ProfileImage className="h-10 w-10" />}>
          <Button2
            subtext={
              <span className="text-sm text-gray-400">last seen just now</span>
            }
          >
            <span className="font-bold">Hester Freeman</span>
          </Button2>
        </MenuItem>
      </div>
      <div className="my-3 bg-white py-3 px-5">
        <button className="text-red-400">Leave chat</button>
      </div>
    </div>
  );
};

export default ChatInfo;
