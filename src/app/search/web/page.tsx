import React from "react";

export default async function WebSearchPage({ searchParams }: any) {
  const rsp = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}`
  );

  const data = await rsp.json();
  const results = data.items;
  return (
    <>
      {results && results.map((r: any) => <h1 key={r.cacheId}>{r.title}</h1>)}
    </>
  );
}
