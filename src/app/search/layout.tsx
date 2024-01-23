import "./../globals.css";
import SearchHeader from "@/components/SearchHeader";
import { Suspense } from "react";

export default function SearchLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Suspense>
      <SearchHeader />
      {children}
    </Suspense>
  );
}
