import ProfileImage from "components/common/ProfileImage";

const MessageBubble = ({ owner, text, time, reactions, align = "left" }) => {
  return (
    <div
      className={`flex gap-3 ${
        align === "right" ? "flex-row-reverse self-end" : "flex-row self-start"
      }`}
    >
      <div className="h-10 w-10">
        <ProfileImage className="h-10 w-10" />
      </div>
      <div className="flex rounded-xl border border-gray-100 bg-white px-4 py-1">
        <div className="flex flex-col">
          {owner && (
            <span className="text-sm font-semibold text-primary">{owner}</span>
          )}
          <span>{text}</span>
        </div>
        <div className="self-end">
          <span className="text-semitiny text-gray-400">{time}</span>
        </div>
      </div>
    </div>
  );
};

export default MessageBubble;
