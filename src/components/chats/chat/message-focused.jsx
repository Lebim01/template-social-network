import { useChat } from "./chat-context";
import { FaReply, FaCopy, FaStar, FaEllipsisH } from "react-icons/fa";
import { BsEmojiSmile } from "react-icons/bs";

const Button = ({ icon, text }) => {
  return (
    <button className="flex flex-1 flex-col items-center justify-center gap-1 text-primary">
      {icon}
      <span className="font-semibold">{text}</span>
    </button>
  );
};

const MessageFocused = () => {
  const { messageFocused, setMessageFocused } = useChat();

  return (
    <>
      {messageFocused && (
        <>
          <div
            className="fixed top-0 left-0 z-10 h-full w-full bg-gray-400 bg-opacity-30"
            onClick={() => setMessageFocused(null)}
          ></div>
          <div className="fixed bottom-0 left-0 z-20 flex w-full justify-between bg-white py-3">
            <Button text="Reply" icon={<FaReply className="text-xl" />} />
            <Button
              text="Reaction"
              icon={<BsEmojiSmile className="text-xl" />}
            />
            <Button text="Copy" icon={<FaCopy className="text-xl" />} />
            <Button text="Star" icon={<FaStar className="text-xl" />} />
            <Button text="More" icon={<FaEllipsisH className="text-xl" />} />
          </div>
        </>
      )}
    </>
  );
};

export default MessageFocused;
