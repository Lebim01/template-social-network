const Header = ({ center, left, right, className }) => {
  return (
    <div
      className={`sticky flex justify-between border-b border-gray-200 p-3 text-xl ${className}`}
    >
      <div className="flex items-center">{left}</div>
      <div className="flex items-center">{center}</div>
      <div className="flex items-center">{right}</div>
    </div>
  );
};

export default Header;
