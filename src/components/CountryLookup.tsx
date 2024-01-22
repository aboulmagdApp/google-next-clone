"use client";
import React, { useState } from "react";

export default function CountryLookup() {
  const [country, setCountry] = useState("Saudi Arabia");
  return (
    <div className="flex justify-between">
      {country}
      <p>cloned by: Mohamed Aboulmagd</p>
    </div>
  );
}
