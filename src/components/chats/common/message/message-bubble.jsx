import ProfileImage from "components/common/ProfileImage";
import MessageResponse from "./message-response";
import MyMessageBubble from "./my-message-bubble";
import { useState } from "react";
import { FaReply, FaCopy, FaStar, FaEllipsisH } from "react-icons/fa";
import { BsEmojiSmile } from "react-icons/bs";
import useLongPress from "hooks/useLongPress";

const MessageBubble = (props) => {
  const [focused, setFocused] = useState(false);

  const onLongPress = () => {
    setFocused(true);
  };

  const bind = useLongPress(onLongPress, () => {});
  const { owner, text, time, is_my = false, response, bubble } = props;

  if (is_my) return <MyMessageBubble {...props} />;

  return (
    <>
      <div className={`flex w-5/6 flex-row gap-3 self-start`} {...bind}>
        <div className="h-10 w-10">
          <ProfileImage className="h-10 w-10" letters={owner.slice(0, 1)} />
        </div>

        <div className={`w-full ${focused ? "z-20" : ""}`}>
          {bubble ? (
            bubble
          ) : (
            <div
              className={`flex rounded-xl border border-gray-100 bg-white px-4 py-1 active:bg-opacity-70`}
            >
              <div className="flex flex-col gap-1">
                {owner && (
                  <span className="text-sm font-semibold text-primary">
                    {owner}
                  </span>
                )}
                {response && <MessageResponse {...response} />}
                <span className="text-black">{text}</span>
              </div>
              <div className="ml-1 self-end">
                <span className="text-semitiny text-gray-400">{time}</span>
              </div>
            </div>
          )}
        </div>
      </div>
      {focused && (
        <>
          <div
            className="absolute top-0 left-0 z-10 h-full w-full bg-gray-400 bg-opacity-30"
            onClick={() => setFocused(false)}
          ></div>
          <div className="absolute bottom-0 left-0 z-20 flex w-full justify-between bg-white py-3">
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

const Button = ({ icon, text }) => {
  return (
    <button className="flex flex-1 flex-col items-center justify-center gap-1 text-primary">
      {icon}
      <span className="font-semibold">{text}</span>
    </button>
  );
};

export default MessageBubble;
