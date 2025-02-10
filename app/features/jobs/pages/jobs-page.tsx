import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Jobs | wemake" },
    { name: "description", content: "Find your next job" }
  ];
};

export default function JobsPage() {
  return (
    <div className="px-20">
      <h1 className="text-5xl font-bold">Jobs</h1>
    </div>
  );
}
