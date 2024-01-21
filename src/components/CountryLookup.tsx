"use client";
import React, { useState } from "react";

export default function CountryLookup() {
  const [country, setCountry] = useState("Saudi Arabia");
  return <div>{country}</div>;
}
