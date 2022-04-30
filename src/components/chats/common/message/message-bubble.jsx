import ProfileImage from "components/common/ProfileImage";
import MessageResponse from "./message-response";
import MyMessageBubble from "./my-message-bubble";

const MessageBubble = (props) => {
  const { owner, text, time, is_my = false, response } = props;

  if (is_my) return <MyMessageBubble {...props} />;

  return (
    <div className={`flex w-5/6 flex-row gap-3 self-start`}>
      <div className="h-10 w-10">
        <ProfileImage className="h-10 w-10" letters={owner.slice(0, 1)} />
      </div>
      <div
        className={`flex rounded-xl border border-gray-100 bg-white px-4 py-1`}
      >
        <div className="flex flex-col gap-1">
          {owner && <span className="text-sm font-semibold">{owner}</span>}
          {response && <MessageResponse {...response} />}
          <span className="text-black">{text}</span>
        </div>
        <div className="ml-1 self-end">
          <span className="text-semitiny text-gray-400">{time}</span>
        </div>
      </div>
    </div>
  );
};

export default MessageBubble;
