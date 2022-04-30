import DateBubble from "../common/date-bubble";
import MessageBubble from "../common/message/message-bubble";
import ChatBottom from "./chat-bottom";
import ChatHeader from "./chat-header";

const Chat = () => {
  return (
    <div className="relative flex h-full flex-col bg-[#E1E7EE]">
      <ChatHeader />
      <div className="flex flex-1 flex-col gap-3 overflow-auto p-3">
        <DateBubble date="14 September" />
        <MessageBubble
          owner={"Victor"}
          text="Hola"
          time="12:48"
          reactions={[]}
          is_my
        />
        <MessageBubble
          owner={"Victor"}
          text="Hola"
          time="12:48"
          reactions={[]}
        />
        <MessageBubble
          owner={"Victor"}
          text="I am not sure yet. I want to get a couple more eyes on it before i do that, right?"
          time="12:48"
          reactions={[]}
          response={{
            owner: "Victor",
            text: "Hello",
          }}
        />
      </div>
      <ChatBottom />
    </div>
  );
};

export default Chat;
