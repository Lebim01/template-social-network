import { FiCamera } from "react-icons/fi";

const EditProfile = () => {
  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center justify-center border-b border-gray-300 bg-white px-3 pt-5 pb-3">
        <span className="text-primary">Cancel</span>
        <span className="text-bold flex-1 text-center text-lg">
          Edit Profile
        </span>
        <span className="text-bold text-primary">Done</span>
      </div>
      <div className="flex flex-1 flex-col gap-3 bg-gray-200">
        <div className="bg-white">
          <div className="flex h-40 w-full items-center justify-center border-b border-gray-300 bg-gray-200">
            <FiCamera className="h-10 w-10 text-gray-400" />
          </div>
          <div>
            <div className="flex gap-3 border-b border-gray-300 p-3">
              <span className="text-md text-gray-400">First Name</span>
              <input className="flex-1" placeholder="..." />
            </div>
            <div className="flex gap-3 border-b border-gray-300 p-3">
              <span className="text-md text-gray-400">Last Name</span>
              <input className="flex-1" placeholder="..." />
            </div>
          </div>
        </div>

        <div className="flex flex-col border-b border-gray-200 bg-white p-3">
          <span className="text-gray-400">Bio</span>
          <span className="text-gray-300">
            A brief description of who you are
          </span>
        </div>

        <div className="flex flex-col justify-center bg-white">
          <div className="flex items-center border-b border-gray-200 p-3">
            <span className="text-md w-1/5 text-gray-400">Birthday</span>
            <input
              className="text-sm"
              placeholder="Birhday is always private"
            />
          </div>

          <div className="flex items-center border-b border-gray-200 p-3">
            <span className="text-md w-1/5 text-gray-400">Gender</span>
            <div className="flex flex-1 gap-3">
              <div className="rounded-full bg-primary-transparent px-3 py-1 text-primary">
                <span>Female</span>
              </div>
              <div className="rounded-full bg-gray-100 py-1 px-3 text-gray-500">
                Male
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
