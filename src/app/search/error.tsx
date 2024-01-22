"use client";

import { useEffect } from "react";

export default function Error({ error, reset }: { error: Error; reset: any }) {
  useEffect(() => {
    console.log("Error", error);
  }, [error]);
  return (
    <div className="flex flex-col justify-center items-center pt-10">
      <h1 className="text-3xl mb-4">{error.message}</h1>
      <button className="text-blue-500" onClick={() => reset()}>
        try again
      </button>
    </div>
  );
}
