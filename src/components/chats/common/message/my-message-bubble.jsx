const MyMessageBubble = ({ text, time, reactions, bubble }) => {
  return (
    <div className={`flex w-5/6 flex-row-reverse gap-3 self-end`}>
      {bubble ? (
        bubble
      ) : (
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
      )}
    </div>
  );
};

export default MyMessageBubble;
