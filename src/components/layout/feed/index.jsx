import CardPost from "components/common/CardsPosts/Post";
import PeopleMayKnow from "components/common/PeopleMayKnow";
import SharedCardPost from "components/common/CardsPosts/SharedPost";
import FooterNavigationBar from "components/common/FooterNavigationBar";
import Header from "./header";

const Body = () => {
  return (
    <div className="flex flex-col gap-3 overflow-auto pb-3">
      <CardPost
        body_text={
          "Living in today's metropolitan world of cellular phones, mobile"
        }
        owner_name="Victor Alvarez"
        time_ago="1 day ago"
      />
      <PeopleMayKnow />
      <SharedCardPost
        body_text={
          "Living in today's metropolitan world of cellular phones, mobile"
        }
        owner_name="Victor Alvarez"
        time_ago="1 day ago"
        likes_count={39}
        comments_count={10}
        shared={{
          body_text:
            "Living in today's metropolitan world of cellular phones, mobile",
          owner_name: "Victor Alvarez",
          time_ago: "1 day ago",
        }}
      />
      <CardPost
        body_text={
          "Living in today's metropolitan world of cellular phones, mobile"
        }
        owner_name="Victor Alvarez"
        time_ago="1 day ago"
      />
      <CardPost
        body_text={
          "Living in today's metropolitan world of cellular phones, mobile"
        }
        owner_name="Victor Alvarez"
        time_ago="1 day ago"
      />
      <CardPost
        body_text={
          "Living in today's metropolitan world of cellular phones, mobile"
        }
        owner_name="Victor Alvarez"
        time_ago="1 day ago"
      />
    </div>
  );
};

const Feed = () => {
  return (
    <>
      <div className="flex h-full flex-col gap-2 bg-gray-100">
        <Header />
        <Body />
      </div>
      <FooterNavigationBar />
    </>
  );
};

export default Feed;
