import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Promote | wemake" },
    { name: "description", content: "Promote your product" }
  ];
};

export default function PromotePage() {
  return (
    <div className="px-20">
      <h1 className="text-5xl font-bold">Promote</h1>
    </div>
  );
}
