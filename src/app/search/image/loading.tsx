import React from "react";

export default function Loading() {
  return (
    <div className="flex space-x-4 pt-10 mx-2 lg:pl-52 max-w-6xl">
      {[1, 2, 3].map((_, i) => (
        <div className="animate-pulse" key={i}>
          <div className="h-48 w-48 mb-4 bg-gray-200 rounded-md"></div>
          <div className="h-2 w-48 mb-2.5 bg-gray-200 rounded-md"></div>
          <div className="h-2 w-44 mb-2.5 bg-gray-200 rounded-md"></div>
        </div>
      ))}
    </div>
  );
}
