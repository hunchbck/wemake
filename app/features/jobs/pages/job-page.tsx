import { DotIcon } from "lucide-react";
import { Badge } from "~/common/components/ui/badge";
import { Button } from "~/common/components/ui/button";
import type { Route } from "./+types/job-page";

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Job Details | wemake" },
    { name: "description", content: "View job details and apply" }
  ];
};

export default function JobPage({ params: { jobId } }: Route.ComponentProps) {
  return (
    <div>
      <div className="h-60 w-full rounded-lg bg-gradient-to-tr from-primary/80 to-primary/10"></div>
      <div className="-mt-20 grid grid-cols-6 items-start gap-20">
        <div className="col-span-4 space-y-10">
          <div>
            <div className="relative left-10 size-40 overflow-hidden rounded-full bg-white">
              <img
                src="https://github.com/facebook.png"
                className="object-cover"
                alt="Meta"
              />
            </div>
            <h1 className="text-4xl font-bold">Software Engineer</h1>
            <h4 className="text-lg text-muted-foreground">Meta Inc.</h4>
          </div>
          <div className="flex gap-2">
            <Badge variant="secondary">Full-time</Badge>
            <Badge variant="secondary">Remote</Badge>
          </div>
          <div className="space-y-2.5">
            <h4 className="text-2xl font-medium">Overview</h4>
            <p className="text-lg">
              We are looking for a software engineer with 3 years of experience
              in React and Node.js.
            </p>
          </div>
          <div className="space-y-2.5">
            <h4 className="text-2xl font-medium">Responsibilities</h4>
            <ul className="list-inside list-disc text-lg">
              {[
                "Design, build, and ship features and applications with a focus on scalability and code quality.",
                "Identify bottlenecks and bugs, and devise solutions to mitigate and/or eradicate them.",
                "Help maintain code quality, organization, and automatization."
              ].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="space-y-2.5">
            <h4 className="text-2xl font-medium">Qualifications</h4>
            <ul className="list-inside list-disc text-lg">
              {[
                "Bachelor's degree in Computer Science or related field",
                "3+ years of experience in React and Node.js",
                "Strong understanding of web development and software engineering principles"
              ].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="space-y-2.5">
            <h4 className="text-2xl font-medium">Benefits</h4>
            <ul className="list-inside list-disc text-lg">
              {[
                "Flexible working hours",
                "Remote work options",
                "Health and wellness benefits",
                "Professional development opportunities"
              ].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="space-y-2.5">
            <h4 className="text-2xl font-medium">Skills</h4>
            <ul className="list-inside list-disc text-lg">
              {[
                "React",
                "Node.js",
                "TypeScript",
                "Next.js",
                "Tailwind CSS",
                "Git",
                "Docker",
                "AWS"
              ].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="sticky top-20 col-span-2 mt-32 space-y-5 rounded-lg border p-6">
          <div className="flex flex-col">
            <span className="text-sm text-muted-foreground">Avg. Salary</span>
            <span className="text-2xl font-medium">$100,000 - $120,000</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-muted-foreground">Location</span>
            <span className="text-2xl font-medium">Remote</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-muted-foreground">
              Employment Type
            </span>
            <span className="text-2xl font-medium">Full-time</span>
          </div>
          <div className="flex text-sm text-muted-foreground">
            <span>Posted 2 days ago</span>
            <DotIcon className="size-4" />
            <span>395 views</span>
          </div>
          <Button className="w-full">Apply Now</Button>
        </div>
      </div>
    </div>
  );
}
