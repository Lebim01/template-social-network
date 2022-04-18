import Header from "components/common/layout/Header";
import BackButton from "components/common/BackButton";
import { FiShare } from "react-icons/fi";
import Post from "components/post-detail";

const PostDetail = () => {
  return (
    <div>
      <Header
        left={<BackButton />}
        right={
          <button className=" text-primary">
            <FiShare />
          </button>
        }
        center={<span className="font-bold">Post</span>}
      />
      <Post />
    </div>
  );
};

export default PostDetail;
