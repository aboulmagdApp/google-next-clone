import WebSearchResults from "@/components/WebSearchResults";
import Link from "next/link";
import React from "react";

const fetchSearchResults = async (searchParams: any) => {
  const startIndex = searchParams.start || "1";
  const rsp = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}&start=${startIndex}`
  );

  if (rsp.status === 429) {
    throw new Error(
      `We apologize, but it seems that we've received ${rsp.statusText} at the moment. Please try again later. Thank you for your understanding and patience.`
    );
  }
  if (!rsp.ok) {
    throw new Error("Something went wrong");
  }

  const data = await rsp.json();
  const results = data.items;

  if (!results) {
    throw new Error("No results found");
  }

  return data;
};

export default async function WebSearchPage({ searchParams }: any) {
  const results = await fetchSearchResults(searchParams);
  if (!results) {
    return (
      <div className="flex flex-col justify-center items-center pt-10">
        <h1 className="text-3xl mb-4">No Result Found!!😉</h1>
        <p className="text-lg">
          Try Searching for something else or go back to the home page{" "}
          <Link href="/" className="text-blue-500">
            Home
          </Link>
        </p>
      </div>
    );
  }
  return <>{results && <WebSearchResults results={results} />}</>;
}
