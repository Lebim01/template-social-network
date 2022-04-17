import {
  HiOutlineAnnotation,
  HiOutlineVideoCamera,
  HiOutlinePhotograph,
  HiOutlineDotsHorizontal,
} from "react-icons/hi";
import IconBadgeCount from "components/common/IconBadge/count";

const Header = () => {
  return (
    <div className="flex w-full flex-col gap-1 bg-primary">
      <div className="mt-4 flex justify-between px-3">
        <div className="h-5 w-5 rounded-full border border-black shadow-md shadow-stone-600"></div>
        <div>
          <IconBadgeCount count={5}>
            <HiOutlineAnnotation className="h-6 w-6 text-white" />
          </IconBadgeCount>
        </div>
      </div>
      <div className="mb-2 px-3">
        <span className="text-2xl font-bold text-white">Feed</span>
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
