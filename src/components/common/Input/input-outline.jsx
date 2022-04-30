import { useState } from "react";

const InputOutline = ({ className = "", iconRight, ...props }) => {
  const [focused, setFocused] = useState(false);

  return (
    <div
      className={`flex w-full items-center px-1 py-3 ${
        focused ? "border-b-2 border-primary" : "border-b border-gray-200"
      } ${className}`}
    >
      <input
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className={`w-full flex-1 ${className}`}
        {...props}
      />
      {iconRight}
    </div>
  );
};

export default InputOutline;
