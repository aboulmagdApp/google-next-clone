import "./../globals.css";
import SearchHeader from "@/components/SearchHeader";

export default function SearchLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <SearchHeader />
      {children}
    </div>
  );
}
