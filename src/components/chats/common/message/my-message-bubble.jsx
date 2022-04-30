import { useState } from "react";
import useLongPress from "hooks/useLongPress";
import { useChat } from "components/chats/chat/chat-context";

const MyMessageBubble = (props) => {
  const { text, time, reactions, bubble } = props;
  const { recording, setMessageFocused, messageFocused } = useChat();

  const onLongPress = () => {
    if (!recording) {
      setMessageFocused(props);
    }
  };

  const isFocused = messageFocused?.id === props.id;

  const bind = useLongPress(onLongPress, () => {});

  return (
    <div className={`flex w-5/6 flex-row-reverse gap-3 self-end`} {...bind}>
      {bubble ? (
        bubble
      ) : (
        <div
          className={`flex rounded-xl border border-gray-100 bg-primary-transparent px-4 py-1 ${
            isFocused ? "z-20" : ""
          }`}
        >
          <div className="flex flex-col">
            <span className="text-black">{text}</span>
          </div>
          <div className="ml-1 self-end">
            <span className="text-semitiny text-gray-400">{time}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyMessageBubble;
