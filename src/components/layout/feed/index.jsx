import PeopleMayKnow from "components/common/PeopleMayKnow";
import FooterNavigationBar from "components/common/FooterNavigationBar";
import Header from "./header";
import Post from "components/common/CardsPosts/Post";
import PostSharedPost from "components/common/CardsPosts/SharedPost";
import PostSharedLink from "components/common/CardsPosts/SharedLink";
import PostSharedMedia from "components/common/CardsPosts/SharedMedia";
import PostSharedLive from "components/common/CardsPosts/Live";
import PostSharedEvent from "components/common/CardsPosts/SharedEvent";

const Body = () => {
  return (
    <div className="flex flex-col gap-3 overflow-auto pb-3">
      <PostSharedEvent
        owner_name="John Doe"
        time_ago="Yesterday"
        likes_count={532}
        comments_count={41}
        shared_count={9}
        event={{
          name: "Compatible Inkjet Cartridge Which...",
          place: "South Rocky",
          people: [{}, {}, {}, {}, {}, {}, {}, {}],
          date: new Date(2022, 1, 17, 0, 0, 0, 0),
        }}
      />
      <PostSharedLive
        owner_name="John Doe"
        time_ago="Now"
        likes_count={532}
        comments_count={41}
        shared_count={9}
      />
      <PostSharedMedia
        owner_name="John Doe"
        time_ago="1 year ago"
        likes_count={532}
        liked
        comments_count={41}
        shared_count={9}
        files={[1, 2, 3, 4, 5, 6, 7, 8]}
      />
      <PostSharedMedia
        owner_name="John Doe"
        time_ago="1 day ago"
        likes_count={532}
        liked
        comments_count={41}
        shared_count={9}
        files={[1, 2, 3, 4]}
      />
      <PostSharedMedia
        owner_name="John Doe"
        time_ago="1 day ago"
        likes_count={532}
        liked
        comments_count={41}
        shared_count={9}
        files={[1, 2, 3]}
      />
      <PostSharedMedia
        owner_name="John Doe"
        time_ago="1 day ago"
        likes_count={532}
        liked
        comments_count={41}
        shared_count={9}
        files={[1, 2]}
      />
      <PostSharedMedia
        owner_name="John Doe"
        time_ago="1 day ago"
        likes_count={532}
        liked
        comments_count={41}
        shared_count={9}
        files={[1]}
      />
      <PostSharedLink
        body_text={"Watch this link"}
        owner_name="John Doe"
        time_ago="1 day ago"
        link="https://google.com"
      />
      <Post
        body_text={
          "Living in today's metropolitan world of cellular phones, mobile"
        }
        owner_name="John Doe"
        time_ago="1 day ago"
      />
      <PeopleMayKnow />
      <PostSharedPost
        body_text={
          "Living in today's metropolitan world of cellular phones, mobile"
        }
        owner_name="John Doe"
        time_ago="1 day ago"
        likes_count={39}
        comments_count={10}
        shared={{
          body_text:
            "Living in today's metropolitan world of cellular phones, mobile",
          owner_name: "John Doe",
          time_ago: "1 day ago",
        }}
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
