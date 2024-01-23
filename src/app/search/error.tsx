"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.log("Error", error);
  }, [error]);
  return (
    <div className="flex flex-col justify-center items-center pt-10">
      <h2 className="hidden text-3xl mb-4">{error.message}</h2>
      <p className="text-red-500">
        We apologize, but it seems that we have received Too Many Requests at
        the moment. Please try again later. Thank you for your understanding and
        patience.
      </p>
      <button className="text-blue-500" onClick={() => reset()}>
        try again
      </button>
    </div>
  );
}
