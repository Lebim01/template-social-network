import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { BiMicrophone } from "react-icons/bi";
import { FiCamera } from "react-icons/fi";
import { AiOutlineGif } from "react-icons/ai";
import { BsEmojiSmile } from "react-icons/bs";
import Input from "components/common/Input";

const ChatBottom = () => {
  const [inputFocused, setInputFocused] = useState(false);

  return (
    <div className="flex items-center gap-2 bg-white p-3">
      <div className="flex items-center gap-4">
        <button className="rounded-full bg-primary p-1 text-white">
          <FaPlus />
        </button>
        <button className="text-xl text-gray-500">
          <FiCamera />
        </button>
        <button className="text-2xl text-gray-500">
          <AiOutlineGif />
        </button>
      </div>
      <div className="flex-1">
        <Input
          inputProps={{
            placeholder: "Message",
          }}
          iconRight={<BsEmojiSmile className="text-gray-500" />}
        />
      </div>
      <div className="flex items-center">
        <button className="text-xl text-gray-500">
          <BiMicrophone />
        </button>
      </div>
    </div>
  );
};

export default ChatBottom;
