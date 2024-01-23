"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";

export default function CountryLookup() {
  const [country, setCountry] = useState("Saudi Arabia");
  return (
    <div className="flex justify-between">
      {country}
      <div className="flex items-center">
        <Link href="https://github.com/aboulmagdApp/google-next-clone">
          <p className="text-blue-500 hover:underline">
            cloned by: Mohamed Abouelmagd for learning purpose
          </p>
        </Link>
        <Image
          src="/images/aboulmagd.png"
          alt="logo"
          width={60}
          height={60}
        ></Image>
      </div>
    </div>
  );
}
