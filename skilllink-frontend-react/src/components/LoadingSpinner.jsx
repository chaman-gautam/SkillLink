import React from "react";

const LoadingSpinner = ({ size = "md", text = "Loading..." }) => {
  const sizeClasses = {
    sm: "w-6 h-6",
    md: "w-8 h-8",
    lg: "w-12 h-12",
    xl: "w-16 h-16",
  };

  return (
    <div className="flex flex-col items-center justify-center p-8">
      <div
        className={`${sizeClasses[size]} border-4 border-cyan-500 border-t-transparent rounded-full animate-spin`}
      ></div>
      {text && <p className="mt-4 text-cyan-300 animate-pulse">{text}</p>}
    </div>
  );
};

export default LoadingSpinner;
