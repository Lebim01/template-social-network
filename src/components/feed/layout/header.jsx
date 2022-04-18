import {
  HiSearch,
  HiOutlineVideoCamera,
  HiOutlinePhotograph,
  HiOutlineDotsHorizontal,
} from "react-icons/hi";

const Header = () => {
  return (
    <div className="flex w-full flex-col gap-1 bg-primary">
      <div className="flex items-center justify-between py-3 px-3">
        <span className="border border-dashed px-3 text-2xl font-bold text-gray-300">
          Logo Here
        </span>
        <div>
          <HiSearch className="h-6 w-6 text-white" />
        </div>
      </div>
      <div className="flex items-center rounded-t-lg border-b border-b-gray-300 bg-white px-2">
        <input placeholder="What's new" className="flex-1 p-2 text-lg" />
        <div className="flex gap-5 px-3 text-gray-400">
          <HiOutlineVideoCamera className="h-6 w-6" />
          <HiOutlinePhotograph className="h-6 w-6" />
          <HiOutlineDotsHorizontal className="h-6 w-6" />
        </div>
      </div>
    </div>
  );
};

export default Header;
