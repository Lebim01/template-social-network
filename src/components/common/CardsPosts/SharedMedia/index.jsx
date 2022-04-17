import CardActions from "../common/CardActions";
import CardHeader from "../common/CardHeader";
import SharedMedia from "./sharedMedia";

const SharedCardMedia = ({
  owner_photo,
  owner_name,
  time_ago,
  likes_count,
  comments_count,
  shared_count,
  liked,
  files,
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
              <span className="">{files.length} photos</span>
            </span>
          }
        />
      </div>
      <SharedMedia files={files} />
      <div className="px-3 pb-3">
        <CardActions
          likes_count={likes_count}
          comments_count={comments_count}
          shared_count={shared_count}
          liked={liked}
        />
      </div>
    </div>
  );
};

export default SharedCardMedia;
