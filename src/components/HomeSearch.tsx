"use client";
import { useState, FormEvent, MouseEventHandler } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";
import { useRouter } from "next/navigation";

export default function HomeSearch() {
  const [input, setInput] = useState("");
  const [randomSearchLoading, setRandomSearchLoading] = useState(false);
  const router = useRouter();
  console.log(input);
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim()) return;
    router.push(`/search/web?searchTerms=${input}`);
  };
  const randomSearch = async () => {
    setRandomSearchLoading(true);
    const rsp = await fetch("https://random-word-api.herokuapp.com/word")
      .then((res) => res.json())
      .then((data) => data[0]);
    if (!rsp) return;
    console.log(rsp);
    router.push(`/search/web?searchTerms=${rsp}`);
    setRandomSearchLoading(false);
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex w-full mt-5 
      max-w-[90%] border border-gray-200 px-5 py-3
      rounded-full hover:shadow-md focus-within:shadow-md 
      transition-shadow sm:max-w-xl lg:max-w-2xl"
      >
        <AiOutlineSearch className="text-xl text-gray-500 mr-3" />
        <input
          type="text"
          className="flex-grow focus:outline-none"
          onChange={(e) => setInput(e.target.value)}
        />
        <BsFillMicFill />
      </form>
      <div
        className="flex flex-col space-y-2 sm:space-y-0 justify-center
      sm:flex-row mt-8 sm:space-x-4"
      >
        <button
          className="bg-[#f8f9fa] rounded-md 
        text-sm text-gray-800 hover:ring-gray-200 focus:outline-none active:ring-gray-300
        hover:shadow-md w-36 h-10 transition-shadow"
          onClick={handleSubmit as any}
        >
          Google Search
        </button>
        <button
          disabled={randomSearchLoading}
          className="bg-[#f8f9fa] rounded-md 
        text-sm text-gray-800 hover:ring-gray-200 focus:outline-none active:ring-gray-300
        hover:shadow-md w-36 h-10 transition-shadow disabled:opacity-80 disabled:shadow-sm"
          onClick={randomSearch}
        >
          {randomSearchLoading ? "Loading...." : "I am Feeling Lucky"}
        </button>
      </div>
    </>
  );
}
