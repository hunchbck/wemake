import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Teams | wemake" },
    { name: "description", content: "Find your team" }
  ];
};

export default function TeamsPage() {
  return (
    <div className="px-20">
      <h1 className="text-5xl font-bold">Teams</h1>
    </div>
  );
}
