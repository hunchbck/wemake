import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Submit Product | wemake" },
    { name: "description", content: "Submit your product" }
  ];
};

export default function SubmitPage() {
  return (
    <div className="px-20">
      <h1 className="text-5xl font-bold">Submit Product</h1>
    </div>
  );
}
