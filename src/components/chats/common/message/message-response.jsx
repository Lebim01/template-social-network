import ProfileImage from "components/common/ProfileImage";

const MessageResponse = ({ owner, text }) => {
  return (
    <div className="flex flex-col border-l-2 border-primary px-2 text-xs">
      <span className="flex gap-1 text-primary">
        <ProfileImage
          className="h-4 w-4 text-semitiny"
          letters={owner.slice(0, 1)}
        />
        <span className="font-bold">{owner}</span>
      </span>
      <span className="max-lines-1 text-gray-400">{text}</span>
    </div>
  );
};

export default MessageResponse;
