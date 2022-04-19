import { FaAngleDown, FaCheck } from "react-icons/fa";

const Photo = ({ active }) => {
  return (
    <div className="relative aspect-square bg-gray-100">
      {active ? (
        <button className="absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-full border border-gray-300 bg-primary text-white">
          <FaCheck />
        </button>
      ) : (
        <button className="absolute right-2 top-2 h-6 w-6 rounded-full border border-white"></button>
      )}
    </div>
  );
};

const AttachPhotos = () => {
  return (
    <div className="grid h-full grid-rows-layout">
      <div className="flex w-full justify-center border-b border-gray-300 bg-white pt-5 pb-3">
        <button className="flex items-center gap-1 font-bold text-primary">
          All Photos <FaAngleDown />
        </button>
      </div>
      <div className="grid flex-1 grid-cols-3 gap-1 overflow-y-auto">
        <Photo />
        <Photo active />
        <Photo active />
        <Photo />
        <Photo active />
        <Photo />
        <Photo />
        <Photo />
        <Photo />
        <Photo />
        <Photo />
        <Photo />
        <Photo />
        <Photo />
        <Photo />
        <Photo />
        <Photo />
        <Photo />
        <Photo />
        <Photo />
        <Photo />
        <Photo />
        <Photo />
      </div>
      <div className="flex-1 items-center gap-2 py-3 px-5">
        <button className="flex w-full flex-col items-center justify-center rounded-full bg-primary py-1 text-primary-text">
          <span className="text-sm font-bold">Attachment </span>
          <span className="text-sm">3 photo</span>
        </button>
        <button className="w-full py-2 text-primary">Cancel</button>
      </div>
    </div>
  );
};

export default AttachPhotos;
