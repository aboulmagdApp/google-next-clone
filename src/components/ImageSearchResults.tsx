import Link from "next/link";
import React from "react";
import PaginationButtons from "./PaginationButtons";

export default function ImageSearchResults({ results }: any) {
  return (
    <div className="pb-24 mt-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-3 space-x-4">
        {results.items?.map((res: any) => (
          <div key={res.link} className="mb-8">
            <div className="group" key={res.link}>
              <Link href={res.image.contextLink}>
                <img
                  src={res.link}
                  alt={res.title}
                  className="h-60 group-hover:shadow-xl w-full object-contain transition-shadow"
                />
              </Link>
              <Link href={res.image.contextLink}>
                <h2 className="group-hover:underline truncate text-xl">
                  {res.title}
                </h2>
              </Link>
              <Link href={res.image.contextLink}>
                <h2 className="group-hover:underline text-gray-600">
                  {res.displayLink}
                </h2>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="ml-16">
        <PaginationButtons />
      </div>
    </div>
  );
}
