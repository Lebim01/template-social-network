const IconBadgeCount = ({ children, count }) => {
  return (
    <div className="relative">
      {children}
      {count && (
        <span className="absolute top-[-5px] right-[-5px] flex h-3 w-3 items-center justify-center rounded-full bg-red-500 text-tiny text-white">
          {count}
        </span>
      )}
    </div>
  );
};

export default IconBadgeCount;
