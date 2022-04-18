import OverloapProfiles from "components/common/OverloapProfiles";
import { useState } from "react";
import PostButtons from "./PostButtons";
import PostComment from "./PostComment";
import PostHeader from "./PostHeader";

const PostDetail = () => {
  const [post] = useState({
    body_text: `Living in today’s metropolitan world of cellular phones, mobile
    computers and other high-tech gadgets is not just hectic but very
    impersonal.`,
    likes_count: 23,
    comments_count: 5,
    shared_count: 1,
    liked: true,
  });

  return (
    <div className="flex flex-col gap-3 p-4">
      <PostHeader owner_name="John Doe" time_ago="4 hours ago" />
      <span className="text-xl">{post.body_text}</span>
      <div className="text-md flex justify-between text-gray-500">
        <div className="flex items-center gap-1">
          <OverloapProfiles profiles={[{}, {}, {}]} max={3} />
          {post.likes_count} likes
        </div>
        <div className="flex items-center gap-2">
          <span>{post.comments_count} comments</span>
          <span>{post.shared_count} shared</span>
        </div>
      </div>
      <div className="separator" />
      <div>
        <PostButtons liked={post.liked} />
      </div>
      <div className="separator" />
      <div className="mt-2 flex flex-col gap-4">
        <PostComment
          owner_name="Siri"
          time_ago="4 min"
          likes_count={5}
          comments_count={3}
          body_text={`Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500`}
        />
        <PostComment owner_name="Siri" time_ago="4 min" files={[{}]} />
      </div>
    </div>
  );
};

export default PostDetail;
