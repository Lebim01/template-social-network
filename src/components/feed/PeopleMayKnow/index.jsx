import { FaTimes } from "react-icons/fa";
import { BsPersonCheck, BsPersonPlus } from "react-icons/bs";
import ProfileImage from "../../common/ProfileImage";

const PersonMayKnow = ({ person_name, person_image, following }) => {
  return (
    <div className="flex-0-auto flex w-1/6 flex-col items-center justify-between gap-2">
      <ProfileImage className={"aspect-square w-full"} src={person_image} />
      <span className="max-lines-2 break-words text-center text-semitiny font-bold">
        {person_name}
      </span>
      {following ? (
        <button className="rounded-full border border-primary px-3 py-1 text-lg text-primary">
          <BsPersonCheck />
        </button>
      ) : (
        <button className="rounded-full bg-primary px-3 py-1 text-lg text-primary-text">
          <BsPersonPlus />
        </button>
      )}
    </div>
  );
};

const PeopleMayKnow = () => {
  return (
    <div className="feed-card-no-p py-3">
      <div className="flex items-center justify-between px-3">
        <span className="text-md font-bold text-gray-400">
          People you may know
        </span>
        <span>
          <FaTimes className="text-gray-400" />
        </span>
      </div>
      <div className="flex gap-6 overflow-x-auto px-3 pb-2">
        <PersonMayKnow person_name={"Denis"} />
        <PersonMayKnow person_name={"Marcos"} following />
        <PersonMayKnow person_name={"Vanessa"} following />
        <PersonMayKnow person_name={"Jose"} />
        <PersonMayKnow person_name={"Juan Pedro Gonzalez Suñiga"} />
        <PersonMayKnow person_name={"Juan Pedro Gonzalez Suñiga"} />
        <PersonMayKnow person_name={"Juan Pedro Gonzalez Suñiga"} />
        <PersonMayKnow person_name={"Juan Pedro Gonzalez Suñiga"} />
        <PersonMayKnow person_name={"Juan Pedro Gonzalez Suñiga"} />
        <PersonMayKnow person_name={"Juan Pedro Gonzalez Suñiga"} />
      </div>
    </div>
  );
};

export default PeopleMayKnow;
