import ProfileImage from "components/common/ProfileImage";

const CardHeader = ({ owner_name, time_ago, customText }) => {
  return (
    <div className="flex gap-3 items-center">
      <ProfileImage className={"h-8 w-8"} />
      <div className="flex flex-col">
        <span className="text-sm flex-1">
          {customText ? (
            customText
          ) : (
            <span className="font-bold">{owner_name}</span>
          )}
        </span>
        <span className="text-tiny text-gray-400">{time_ago}</span>
      </div>
    </div>
  );
};

export default CardHeader;
