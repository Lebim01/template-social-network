import Header from "components/common/layout/Header";
import BackButton from "components/common/BackButton";
import { FiShare } from "react-icons/fi";
import CardHeader from "components/feed/CardsPosts/common/CardHeader";

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
      <div className="p-3">
        <CardHeader owner_name="John Doe" time_ago="4 hours ago" />
      </div>
    </div>
  );
};

export default PostDetail;
