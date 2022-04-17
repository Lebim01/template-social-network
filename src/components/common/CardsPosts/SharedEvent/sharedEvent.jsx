import OverloapProfiles from "components/common/OverloapProfiles";
import { BiStar } from "react-icons/bi";

const SharedEvent = ({ name, place, date, people = [] }) => {
  return (
    <div className="flex flex-col">
      <div className="relative h-32 w-full bg-gray-200">
        <div className="absolute left-5 bottom-[-15px] flex flex-col items-center justify-center rounded-md bg-gray-100 px-4 py-1">
          <span className="text-red-500">JAN</span>
          <span className="text-2xl font-bold">17</span>
        </div>
      </div>
      <div className="mt-[15px] flex flex-col p-3">
        <span className="max-lines-1 text-lg font-bold">{name}</span>
        <span className="flex items-center gap-2 text-gray-500">
          <span>{place}</span> <span>∙</span>
          <span>Going {people.length} people</span>
        </span>
        <div className="mt-4 flex">
          <div className="flex-1">
            <OverloapProfiles profiles={people} />
          </div>
          <button>
            <BiStar className="h-7 w-7 text-gray-500" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SharedEvent;
