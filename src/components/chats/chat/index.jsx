import MiddleBubble from "../common/middle-bubble";
import MessageBubble from "../common/message/message-bubble";
import ChatBottom from "./chat-bottom";
import ChatHeader from "./chat-header";
import MessageVideo from "../common/message/message-video";
import MessageImage from "../common/message/message-image";
import ChatContextProvider from "./chat-context";
import MessageFocused from "./message-focused";

const Chat = () => {
  return (
    <ChatContextProvider>
      <div className="relative flex h-full flex-col overflow-hidden bg-[#E1E7EE]">
        <ChatHeader />
        <div className="flex flex-1 flex-col gap-3 overflow-auto p-3">
          <MiddleBubble text="14 September" />
          <MessageBubble
            id={Math.random()}
            owner={"Victor"}
            text="Hola"
            time="12:48"
            reactions={[]}
            is_my
          />
          <MessageBubble
            id={Math.random()}
            owner={"Victor"}
            text="Hola"
            time="12:48"
            reactions={[]}
          />
          <MessageBubble
            id={Math.random()}
            owner={"Victor"}
            text="I am not sure yet. I want to get a couple more eyes on it before i do that, right?"
            time="12:48"
            reactions={[]}
            response={{
              owner: "Victor",
              text: "Cancun is back, better than ever! ..",
            }}
          />
          <MiddleBubble text="Sophia Lynch leave group" />
          <MiddleBubble text="Steve Roberts joined group" />
          <MiddleBubble text="Jackson invite group Lillie" />
          <MessageBubble
            id={Math.random()}
            owner={"Victor"}
            text="Hola"
            time="12:48"
            reactions={[]}
            bubble={<MessageVideo />}
          />
          <MessageBubble
            id={Math.random()}
            owner={"Victor"}
            text="Hola"
            time="12:48"
            reactions={[]}
            bubble={<MessageImage src="https://picsum.photos/id/3/300/300" />}
          />
        </div>
        <ChatBottom />
      </div>
      <MessageFocused />
    </ChatContextProvider>
  );
};

export default Chat;
