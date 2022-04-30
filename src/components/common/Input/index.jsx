const Input = ({ iconRight, iconLeft, inputProps }) => {
  return (
    <div className="relative flex w-full items-center gap-1 rounded-full border border-gray-50 bg-gray-100 py-1 px-3">
      {iconLeft}
      <input className="flex-1 bg-gray-100" {...inputProps} />
      {iconRight}
    </div>
  );
};

export default Input;
