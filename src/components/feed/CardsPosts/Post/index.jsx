import CardHeader from "../common/CardHeader";
import CardActions from "../common/CardActions";

const Post = ({
  owner_photo,
  owner_name,
  time_ago,
  body_text,
  uuid = "test",
}) => {
  return (
    <div className="feed-card">
      <CardHeader
        owner_name={owner_name}
        owner_photo={owner_photo}
        time_ago={time_ago}
        link={{
          href: "/post/[id]",
          as: "/post/" + uuid,
        }}
      />
      <div className="text-lg">{body_text}</div>
      <div className="separator"></div>
      <CardActions />
    </div>
  );
};

export default Post;
