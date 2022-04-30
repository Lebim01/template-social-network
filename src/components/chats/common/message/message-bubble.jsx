import ProfileImage from "components/common/ProfileImage";
import MessageResponse from "./message-response";
import MyMessageBubble from "./my-message-bubble";
import useLongPress from "hooks/useLongPress";
import { useChat } from "components/chats/chat/chat-context";

const MessageBubble = (props) => {
  const { recording, messageFocused, setMessageFocused } = useChat();

  const onLongPress = () => {
    if (!recording) {
      setMessageFocused(props);
    }
  };

  const isFocused = messageFocused?.id === props.id;
  const bind = useLongPress(onLongPress, () => {});
  const { owner, text, time, is_my = false, response, bubble } = props;

  if (is_my) return <MyMessageBubble {...props} />;

  return (
    <>
      <div className={`flex w-5/6 flex-row gap-3 self-start`} {...bind}>
        <div className="h-10 w-10">
          <ProfileImage className="h-10 w-10" letters={owner.slice(0, 1)} />
        </div>

        <div className={`w-full ${isFocused ? "z-20" : ""}`}>
          {bubble ? (
            bubble
          ) : (
            <div
              className={`flex rounded-xl border border-gray-100 bg-white px-4 py-1 active:bg-opacity-70`}
            >
              <div className="flex flex-col gap-1">
                {owner && (
                  <span className="text-sm font-semibold text-primary">
                    {owner}
                  </span>
                )}
                {response && <MessageResponse {...response} />}
                <span className="text-black">{text}</span>
              </div>
              <div className="ml-1 self-end">
                <span className="text-semitiny text-gray-400">{time}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default MessageBubble;
