import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { BiMicrophone } from "react-icons/bi";
import { FiCamera } from "react-icons/fi";
import { AiOutlineGif } from "react-icons/ai";
import { BsEmojiSmile } from "react-icons/bs";
import Input from "components/common/Input";
import { useChat } from "./chat-context";
import useLongPress from "hooks/useLongPress";
import { useRouter } from "next/router";

const ChatBottom = () => {
  const router = useRouter();
  const [inputFocused, setInputFocused] = useState(false);
  const { recording, setRecording } = useChat();

  const onLongPress = () => {
    setRecording(true);
  };

  const onLeave = () => {
    setRecording(false);
  };

  const bind = useLongPress(onLongPress, () => {}, onLeave);

  return (
    <div className="flex items-center gap-2 overflow-hidden bg-white p-3">
      <div className="flex items-center gap-4">
        {recording ? (
          <span className="text-gray-400">0:02</span>
        ) : (
          <>
            <button className="rounded-full bg-primary p-1 text-white">
              <FaPlus />
            </button>
            {!inputFocused && (
              <>
                <button
                  className="text-xl text-gray-500"
                  onClick={() => router.push("/chat/attach-photos")}
                >
                  <FiCamera />
                </button>
                <button className="text-2xl text-gray-500">
                  <AiOutlineGif />
                </button>
              </>
            )}
          </>
        )}
      </div>
      <div className="flex flex-1 justify-center">
        {recording ? (
          <span className="py-1 text-lg text-gray-400">{"<"} Cancel</span>
        ) : (
          <Input
            inputProps={{
              placeholder: "Message",
              onFocus: () => setInputFocused(true),
              onBlur: () => setInputFocused(false),
            }}
            iconRight={<BsEmojiSmile className="text-gray-500" />}
          />
        )}
      </div>
      <div className="flex items-center">
        {recording && (
          <>
            <div className="absolute bottom-0 right-0 z-10 translate-x-16 translate-y-16 rounded-full bg-primary bg-opacity-30 p-24"></div>
            <div className="absolute bottom-0 right-0 z-10 translate-x-7 translate-y-6 rounded-full bg-primary p-14"></div>
          </>
        )}
        <button
          className={`${
            recording ? "z-20 text-3xl text-white" : "text-xl text-gray-500"
          }`}
          {...bind}
        >
          <BiMicrophone />
        </button>
      </div>
    </div>
  );
};

export default ChatBottom;
