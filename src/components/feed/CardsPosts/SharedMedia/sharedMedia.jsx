import { useMemo } from "react";

const SharedMedia = ({ files = [] }) => {
  const gridTemplate = useMemo(() => {
    if (files.length === 1) {
      return "grid-cols-1";
    }
    if (files.length === 2) {
      return "grid-cols-2";
    }
    if (files.length === 3) {
      return "grid-gallery-3";
    }
    if (files.length === 4) {
      return "grid-cols-2 grid-rows-2";
    }
    return "grid-gallery-5";
  }, [files.length]);

  return (
    <div className={`grid h-60 gap-1 ${gridTemplate}`}>
      {files.slice(0, 5).map((f, index) => {
        const showMoreItems = index === 4 && files.length > 5;
        return (
          <div key={index} className="relative bg-gray-300">
            {showMoreItems && (
              <div className="font-white absolute flex h-full w-full items-center justify-center bg-gray-400 text-2xl text-white">
                + {files.length - 5}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default SharedMedia;
