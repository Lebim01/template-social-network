import CardHeader from "../common/CardHeader";

const SharedPost = ({ owner_name, owner_photo, time_ago, body_text }) => {
  return (
    <div className="border-l border-gray-300 pl-3 my-2">
      <CardHeader
        owner_name={owner_name}
        owner_photo={owner_photo}
        time_ago={time_ago}
      />
      <span className="text-xs text-gray-500">{body_text}</span>
    </div>
  );
};

export default SharedPost;
