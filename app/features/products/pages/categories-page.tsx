import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Categories | wemake" },
    { name: "description", content: "Browse products by category" }
  ];
};

export default function CategoriesPage() {
  return (
    <div className="px-20">
      <h1 className="text-5xl font-bold">Categories</h1>
    </div>
  );
}
