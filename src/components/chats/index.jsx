import ChatListItem from "./chat-list-item";

const Chats = () => {
  return (
    <div className="mt-2 flex flex-col gap-3">
      <ChatListItem
        is_own
        name="Caleb"
        message={{ text: "text of the last message" }}
        time_ago={"10:55"}
      />
      <ChatListItem
        is_own
        is_typing
        is_watched
        time_ago="Tue"
        name="Leo Haynes"
        message={{ text: "text of the last message" }}
      />
      <ChatListItem
        is_group
        is_watched
        time_ago="Tue"
        name="Group name"
        message={{ text: "text of the last message", owner_name: "Leo" }}
      />
      <ChatListItem
        time_ago="Sat"
        name="Madge Guzman"
        message={{
          text: "text of the last message aaaaaa aaaaaa aaaaaaaaaaaaaaaaaaa ",
        }}
        count={3}
      />
    </div>
  );
};
export default Chats;
