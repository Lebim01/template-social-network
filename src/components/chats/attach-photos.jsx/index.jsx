import { FaAngleDown, FaAngleUp, FaCheck } from "react-icons/fa";
import { useState } from "react";
import ProfileImage from "components/common/ProfileImage";

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

const Album = ({ title, count, icon }) => {
  return (
    <div className="flex gap-3 border-b border-gray-300 py-3">
      <div>
        <ProfileImage className="h-12 w-12 rounded-md " src={icon} />
      </div>
      <div className="flex flex-1 flex-col">
        <span>{title}</span>
        <span className="text-sm text-gray-300">{count}</span>
      </div>
    </div>
  );
};

const AttachPhotos = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="h-full">
      <div className="sticky top-0 z-10 flex w-full justify-center border-b border-gray-300 bg-white pt-5 pb-3">
        <button
          className="flex items-center gap-1 font-bold text-primary"
          onClick={() => setOpenMenu((b) => !b)}
        >
          All Photos {openMenu ? <FaAngleUp /> : <FaAngleDown />}
        </button>
      </div>

      {openMenu && (
        <div className="absolute top-14 z-20 flex h-full w-full flex-col border-y border-gray-300 bg-gray-500 bg-opacity-50 ">
          <div className="bg-white px-3">
            <Album title="All photos" count={13564} />
            <Album title="Favorites" count={141} />
            <Album title="People" count={1231} />
          </div>
        </div>
      )}

      <div className="grid grid-cols-3 gap-1 overflow-y-auto">
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

      <div className="sticky bottom-0 items-center gap-2 bg-white py-3 px-5">
        <button className="flex w-full flex-col items-center justify-center rounded-full bg-primary py-1 text-primary-text">
          <span className="text-sm font-bold">Attachment </span>
          <span className="text-sm font-semibold">3 photo</span>
        </button>
        <button
          className="w-full py-2 font-semibold text-primary"
          onClick={() => window.history.back()}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default AttachPhotos;
