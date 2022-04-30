const MessageImage = ({ size = "264,8MB", duration = "2:12", src }) => {
  return (
    <img
      className="relative flex aspect-video w-full items-center justify-center rounded-lg bg-neutral-400 object-cover"
      src={src}
    />
  );
};

export default MessageImage;
