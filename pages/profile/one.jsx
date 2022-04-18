import BackButton from "components/common/BackButton";
import { FiShare } from "react-icons/fi";
import {
  FaRegThumbsDown,
  FaRegThumbsUp,
  FaRegComment,
  FaAngleDown,
} from "react-icons/fa";
import TransparentHeader from "components/common/layout/Header/transparent";
import ProfileImage from "components/common/ProfileImage";

const Post = ({ owner_name, owner_photo, body_text, time_ago }) => {
  return (
    <div className="flex gap-3">
      <div>
        <ProfileImage src={owner_photo} className="h-10 w-10" />
      </div>
      <div className="flex-1">
        <div className="flex justify-between">
          <span className="max-lines-1 text-lg font-bold">{owner_name}</span>
          <span className="text-gray-400">{time_ago}</span>
        </div>
        <span className="max-lines-3 text-lg">{body_text}</span>
        <div className="mt-2 flex justify-between text-gray-400">
          <div className="flex gap-5 ">
            <FaRegThumbsUp className="h-6 w-6" />
            <FaRegThumbsDown className="h-6 w-6" />
            <FaRegComment className="h-6 w-6" />
          </div>
          <div>
            <FaAngleDown className="h-6 w-6" />
          </div>
        </div>
      </div>
    </div>
  );
};

const ProfileOne = () => {
  return (
    <div className="relative">
      <div className="relative h-60 w-full bg-gradient-to-b from-gray-300 via-gray-200 to-gray-300">
        <TransparentHeader
          left={<BackButton className="text-white" />}
          right={
            <button className=" text-white">
              <FiShare />
            </button>
          }
        />
        <div className="absolute bottom-5 left-5 flex flex-col text-white">
          <span className="text-3xl font-bold">John Doe</span>
          <span>last seen just now</span>
        </div>
      </div>
      <div className="flex flex-col gap-4 py-4">
        <div className="px-4">
          <button className="w-full rounded-full border border-gray-300 p-1 text-lg font-bold text-gray-500 active:bg-primary-light active:text-primary-text">
            Edit Profile
          </button>
        </div>
        <div className="flex px-4">
          <div className="flex flex-1 flex-col">
            <span className="text-2xl font-bold">1573</span>
            <span className="text-gray-400">Posts</span>
          </div>
          <div className="flex flex-1 flex-col">
            <span className="text-2xl font-bold">2,9K</span>
            <span className="text-gray-400">Followers</span>
          </div>
          <div className="flex flex-1 flex-col">
            <span className="text-2xl font-bold">123</span>
            <span className="text-gray-400">Following</span>
          </div>
          <div className="flex flex-1 flex-col">
            <span className="text-2xl font-bold">284</span>
            <span className="text-gray-400">Likes</span>
          </div>
        </div>
        <div className="separator px-4" />
        <div className="flex flex-col gap-3">
          <span className="px-4 text-2xl font-bold">Posts</span>
          <div className="flex flex-col gap-3">
            <div className="px-4">
              <Post
                owner_name={"Matthew Scott"}
                body_text="Motorhome or Trailer that is the"
                time_ago={"14 min"}
              />
            </div>
            <div className="separator mt-3" />
            <div className="px-4">
              <Post
                owner_name={"Matthew Scott"}
                body_text="Motorhome or Trailer that is the"
                time_ago={"14 min"}
              />
            </div>
            <div className="separator mt-3" />
            <div className="px-4">
              <Post
                owner_name={"Matthew Scott"}
                body_text="Motorhome or Trailer that is the"
                time_ago={"14 min"}
              />
            </div>
            <div className="separator mt-3" />
            <div className="px-4">
              <Post
                owner_name={"Matthew Scott"}
                body_text="Motorhome or Trailer that is the"
                time_ago={"14 min"}
              />
            </div>
            <div className="separator mt-3" />
            <div className="px-4">
              <Post
                owner_name={"Matthew Scott"}
                body_text="Motorhome or Trailer that is the"
                time_ago={"14 min"}
              />
            </div>
            <div className="separator mt-3" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileOne;
