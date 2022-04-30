import { AiOutlineArrowDown } from "react-icons/ai";

const MessageVideo = ({ size = "264,8MB", duration = "2:12" }) => {
  return (
    <div className="relative flex aspect-video w-full items-center justify-center rounded-lg bg-neutral-400">
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-700 text-lg text-white">
        <AiOutlineArrowDown />
      </div>
      <div className="absolute bottom-3 left-3 flex gap-0.5 text-sm text-white">
        <span className="rounded-l-full bg-zinc-700 py-1 px-2">{duration}</span>
        <span className="rounded-r-full bg-zinc-700 py-1 px-2">{size}</span>
      </div>
    </div>
  );
};

export default MessageVideo;
