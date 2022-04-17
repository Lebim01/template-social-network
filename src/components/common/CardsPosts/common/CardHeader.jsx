import ProfileImage from "components/common/ProfileImage";

const CardHeader = ({ owner_name, time_ago, customText }) => {
  return (
    <div className="flex items-center gap-3">
      <ProfileImage className={"h-10 w-10"} />
      <div className="flex flex-col">
        <span className="text-md flex-1">
          {customText ? (
            customText
          ) : (
            <span className="font-bold">{owner_name}</span>
          )}
        </span>
        <span className="text-sm text-gray-400">{time_ago}</span>
      </div>
    </div>
  );
};

export default CardHeader;
