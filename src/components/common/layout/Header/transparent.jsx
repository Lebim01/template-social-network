const TransparentHeader = ({ center, left, right, className }) => {
  return (
    <div
      className={`absolute top-0 flex w-full justify-between bg-transparent px-3 py-5 text-xl ${className}`}
    >
      <div className="flex items-center">{left}</div>
      <div className="flex items-center">{center}</div>
      <div className="flex items-center">{right}</div>
    </div>
  );
};

export default TransparentHeader;
