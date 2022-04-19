import MenuItem from "components/common/MenuItem";
import ProfileImage from "components/common/ProfileImage";
import {
  FaAngleRight,
  FaTimes,
  FaAt,
  FaToggleOn,
  FaRegComment,
} from "react-icons/fa";
import { BsBell, BsPerson, BsInfoCircle } from "react-icons/bs";

const Settings = () => {
  return (
    <div className="flex h-full flex-col gap-3 bg-gray-300">
      <div className="flex justify-between bg-white px-3 pt-5 pb-3">
        <span className="text-primary">
          <FaTimes />
        </span>
        <span className="text-lg font-bold">Settings</span>
        <span></span>
      </div>
      <div className="flex flex-col bg-white">
        <div className="flex items-center gap-3 p-3">
          <div>
            <ProfileImage className="h-20 w-20" />
          </div>
          <div className="flex flex-1 flex-col">
            <span className="text-lg font-bold">Estella Alvarez</span>
            <span className="text-sm text-gray-400">Edit my profile</span>
          </div>
          <div>
            <span className="text-gray-300">
              <FaAngleRight />
            </span>
          </div>
        </div>
        <div className="border-y border-gray-300">
          <div>
            <MenuItem icon={<FaAt />}>Nickname</MenuItem>
          </div>
        </div>
      </div>
      <div className="flex flex-col bg-white">
        <MenuItem icon={<BsBell />}>Notifications</MenuItem>
        <MenuItem icon={<BsPerson />}>Account</MenuItem>
        <MenuItem icon={<FaToggleOn />}>General</MenuItem>
      </div>
      <div className="flex flex-col bg-white">
        <MenuItem icon={<FaRegComment />}>Write a developer</MenuItem>
        <MenuItem icon={<BsInfoCircle />}>About</MenuItem>
      </div>
    </div>
  );
};

export default Settings;
