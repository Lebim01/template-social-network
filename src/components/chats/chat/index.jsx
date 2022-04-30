import MessageBubble from "../common/message-bubble";
import ChatBottom from "./chat-bottom";
import ChatHeader from "./chat-header";

const Chat = () => {
  return (
    <div className="relative flex h-full flex-col bg-primary-transparent">
      <ChatHeader />
      <div className="flex h-full flex-col gap-3 overflow-auto p-3">
        <MessageBubble
          owner={"Victor"}
          text="Hola"
          time="12:48"
          reactions={[]}
        />
        <MessageBubble
          owner={"Victor"}
          text="Hola"
          time="12:48"
          reactions={[]}
          align="right"
        />
      </div>
      <ChatBottom />
    </div>
  );
};

export default Chat;
