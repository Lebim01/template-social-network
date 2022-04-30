const MyMessageBubble = ({ owner, text, time, reactions, is_my = false }) => {
  return (
    <div className={`flex flex-row-reverse gap-3 self-end`}>
      <div
        className={`flex rounded-xl border border-gray-100 bg-primary-transparent px-4 py-1`}
      >
        <div className="flex flex-col">
          <span className="text-black">{text}</span>
        </div>
        <div className="ml-1 self-end">
          <span className="text-semitiny text-gray-400">{time}</span>
        </div>
      </div>
    </div>
  );
};

export default MyMessageBubble;
