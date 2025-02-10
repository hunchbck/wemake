import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Search | wemake" },
    { name: "description", content: "Search products" }
  ];
};

export default function SearchPage() {
  return (
    <div className="px-20">
      <h1 className="text-5xl font-bold">Search</h1>
    </div>
  );
}
