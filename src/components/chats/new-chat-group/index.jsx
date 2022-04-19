import ProfileImage from "components/common/ProfileImage";
import { FaCheck } from "react-icons/fa";
import { FiCamera } from "react-icons/fi";

const ContactSelected = ({ children }) => (
  <button className="rounded-md bg-primary-transparent px-4 py-2 text-sm text-primary">
    {children}
  </button>
);

const ContactRow = ({ name, active, hashtag, photo }) => {
  return (
    <div className="flex items-center gap-2 pl-4 pt-3 active:bg-gray-100">
      <div>
        <ProfileImage className="h-14 w-14" src={photo} />
      </div>
      <div className="flex flex-1 items-center border-b border-gray-300 pb-3 pr-4">
        <div className="flex flex-1 flex-col">
          <span className="max-lines-1 text-lg font-bold">{name}</span>
          <span className="text-gray-400">{hashtag}</span>
        </div>
        <div>
          <button
            className={`rounded-full p-1 ${
              active
                ? "bg-primary text-primary-text"
                : "border-2 border-gray-300 text-gray-300"
            }`}
          >
            <FaCheck />
          </button>
        </div>
      </div>
    </div>
  );
};

const NewChatGroup = () => {
  return (
    <div className="h-full bg-gray-200">
      <div className="flex items-end justify-between border-b border-gray-300 bg-white px-3 pt-5 pb-3">
        <div>
          <button className="text-primary">Cancel</button>
        </div>
        <div>
          <span className="text-lg font-bold">New Chat Group</span>
        </div>
        <div>
          <button className="text-primary">Next</button>
        </div>
      </div>
      <div className="flex items-center gap-3 border-b border-gray-300 bg-white p-3">
        <div>
          <button className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-200 text-gray-400">
            <FiCamera className="h-8 w-8" />
          </button>
        </div>
        <div className="flex-1">
          <input
            className="h-8 w-full text-xl text-gray-500 placeholder-gray-300"
            placeholder="Chat name"
          />
        </div>
      </div>

      <div className="mt-3 h-full overflow-y-auto bg-white">
        <div className="flex items-center gap-3 border-b border-gray-300 p-3">
          <span className="text-gray-400">To: </span>
          <div className="flex gap-3">
            <ContactSelected>Erick Hall</ContactSelected>
            <ContactSelected>Erick Hall</ContactSelected>
          </div>
        </div>
        <div className="flex flex-col">
          <ContactRow
            name="Ivor Krueger"
            hashtag={"@ivorkrueger"}
            active
            photo="https://picsum.photos/id/3/300/300"
          />
          <ContactRow
            name="Izabel Davidson"
            hashtag={"@izabeldavidson"}
            photo="https://picsum.photos/id/111/300/300"
          />
          <ContactRow
            name="Marshall Little"
            hashtag={"@marshalllittle"}
            photo="https://picsum.photos/id/232/300/300"
          />
          <ContactRow
            name="Kabir Whittington"
            hashtag={"@kabirwhittington"}
            photo="https://picsum.photos/id/211/300/300"
          />
          <ContactRow
            name="Shanaya Sheppard"
            hashtag={"@shanayasheppard"}
            photo="https://picsum.photos/id/123/300/300"
            active
          />
          <ContactRow
            name="Kaydee Kirkland"
            hashtag={"@kaydeekirkland"}
            photo="https://picsum.photos/id/100/300/300"
          />
        </div>
      </div>
    </div>
  );
};

export default NewChatGroup;
