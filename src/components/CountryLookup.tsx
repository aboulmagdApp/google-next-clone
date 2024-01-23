"use client";
import Link from "next/link";
import React, { useState } from "react";

export default function CountryLookup() {
  const [country, setCountry] = useState("Saudi Arabia");
  return (
    <div className="flex justify-between">
      {country}
      <Link href="https://github.com/aboulmagdApp/google-next-clone">
        cloned by: Mohamed Abouelmagd for learning purpose
      </Link>
    </div>
  );
}
