import { DotIcon, EyeIcon, HeartIcon } from "lucide-react";
import { Hero } from "~/common/components/hero";
import { Button } from "~/common/components/ui/button";
import type { Route } from "./+types/idea-page";

export function meta() {
  return [
    { title: "Idea Details | wemake" },
    { name: "description", content: "View idea details and discussion" }
  ];
}

export default function IdeaPage({ params: { ideaId } }: Route.ComponentProps) {
  return (
    <div className="space-y-10">
      <Hero
        title={`Idea Details ${ideaId}`}
        subtitle="View idea details and discussion"
      />
      <div className="mx-auto flex max-w-screen-sm flex-col items-center gap-10">
        <p className="text-center italic">
          "A startup that creates an AI-powered generated trainer, delivering
          customized fitness recommendations and tracking of progress using a
          mobile app to track workout and progress as well as a personalized AI
          coach."
        </p>
        <div className="flex items-center text-sm">
          <div className="flex items-center gap-2">
            <EyeIcon className="h-4 w-4" />
            <span>123</span>
          </div>
          <DotIcon className="h-4 w-4" />
          <span>12 hours ago</span>
          <DotIcon className="h-4 w-4" />
          <Button variant="outline">
            <HeartIcon className="h-4 w-4" />
            <span>12</span>
          </Button>
        </div>
        <Button>Claim idea now &rarr;</Button>
      </div>
    </div>
  );
}
