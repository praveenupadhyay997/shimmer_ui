import React from "react";

const Shimmer = () => {
  return (
    <div className="flex flex-wrap gap-5">
      {Array(20)
        .fill()
        .map((_, index) => (
          <div
            key={index}
            className="relative w-[300px] h-[100px] bg-slate-300 rounded-lg overflow-hidden"
          >
            <div className="absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
            <div className="absolute inset-0 flex items-center justify-center"></div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
