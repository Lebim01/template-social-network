import CardActions from "../common/CardActions";
import CardHeader from "../common/CardHeader";
import SharedLink from "./sharedLink";

const SharedCardLink = ({
  owner_photo,
  owner_name,
  time_ago,
  body_text,
  likes_count,
  comments_count,
  link,
}) => {
  return (
    <div className="feed-card-no-p">
      <div className="px-3 pt-3">
        <CardHeader
          owner_name={owner_name}
          owner_photo={owner_photo}
          time_ago={time_ago}
          customText={
            <span>
              <span className="font-bold">{owner_name}</span>{" "}
              <span className="text-gray-500">shared</span>{" "}
              <span className="">link</span>
            </span>
          }
        />
      </div>
      <div className="px-3 text-lg">{body_text}</div>
      <SharedLink link={link} />
      <div className="px-3 pb-3">
        <CardActions
          likes_count={likes_count}
          comments_count={comments_count}
        />
      </div>
    </div>
  );
};

export default SharedCardLink;
