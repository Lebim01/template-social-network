const DateBubble = ({ date }) => {
  return (
    <div className="self-center rounded-full bg-gray-300 py-1 px-2">
      <span className="text-sm text-white">{date}</span>
    </div>
  );
};

export default DateBubble;
