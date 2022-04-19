import ChatListItem from "./chat-list-item";

const Chats = () => {
  return (
    <div className="mt-2 flex flex-col gap-3">
      <ChatListItem
        is_own
        name="Caleb"
        photo="https://picsum.photos/id/237/300/300"
        message={{ text: "text of the last message" }}
        time_ago={"10:55"}
      />
      <ChatListItem
        is_own
        is_typing
        is_watched
        time_ago="Tue"
        name="Leo Haynes"
        photo="https://picsum.photos/id/100/300/300"
        message={{ text: "text of the last message" }}
      />
      <ChatListItem
        is_group
        is_watched
        time_ago="Tue"
        name="Group name"
        photo="https://picsum.photos/id/50/300/300"
        message={{ text: "text of the last message", owner_name: "Leo" }}
      />
      <ChatListItem
        time_ago="Sat"
        name="Madge Guzman"
        photo="https://picsum.photos/id/1/300/300"
        message={{
          text: "text of the last message aaaaaa aaaaaa aaaaaaaaaaaaaaaaaaa ",
        }}
        count={3}
      />
      <ChatListItem
        time_ago="Sat"
        name="Madge Guzman"
        photo="https://picsum.photos/id/24/300/300"
        message={{
          text: "text of the last message aaaaaa aaaaaa aaaaaaaaaaaaaaaaaaa ",
        }}
        count={3}
      />
    </div>
  );
};
export default Chats;
