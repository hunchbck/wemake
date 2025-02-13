import { useSearchParams } from "react-router";
import { Hero } from "~/common/components/hero";
import { Button } from "~/common/components/ui/button";
import { cn } from "~/lib/utils";
import { JobCard } from "../components/job-card";
import { JOB_TYPES, LOCATION_TYPES, SALARY_RANGES } from "../constants";
import type { Route } from "./+types/jobs-page";

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Jobs | wemake" },
    { name: "description", content: "Find your dream job at wemake" }
  ];
};

export default function JobsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const onFilterClick = (key: string, value: string) => {
    searchParams.set(key, value);
    setSearchParams(searchParams);
  };
  return (
    <div className="space-y-20">
      <Hero
        title="Jobs"
        subtitle="Reach out to the best developers in the world"
      />
      <div className="grid grid-cols-1 items-start gap-20 xl:grid-cols-6">
        <div className="col-span-4 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:col-span-4">
          {Array.from({ length: 20 }).map((_, index) => (
            <JobCard
              key={index}
              id={`jobId-${index}`}
              title="Software Engineer"
              company="Tesla"
              companyLogoUrl="https://github.com/facebook.png"
              companyHq="San Francisco, CA"
              createdAt="12 hours ago"
              type="Full-Time"
              positionLocation="Remote"
              salary="$100,000 - $120,000"
            />
          ))}
        </div>
        <div className="sticky top-20 flex flex-col gap-10 xl:col-span-2">
          <div className="flex flex-col items-start gap-2.5">
            <h4 className="text-sm font-bold text-muted-foreground">JOB</h4>
            <div className="flex flex-wrap gap-2">
              {JOB_TYPES.map((jobType) => (
                <Button
                  key={jobType.value}
                  variant="outline"
                  onClick={() => onFilterClick("jobType", jobType.value)}
                  className={cn(
                    searchParams.get("jobType") === jobType.value && "bg-accent"
                  )}
                >
                  {jobType.label}
                </Button>
              ))}
            </div>
          </div>
          <div className="flex flex-col items-start gap-2.5">
            <h4 className="text-sm font-bold text-muted-foreground">
              LOCATION
            </h4>
            <div className="flex flex-wrap gap-2">
              {LOCATION_TYPES.map((locationType) => (
                <Button
                  key={locationType.value}
                  variant="outline"
                  onClick={() =>
                    onFilterClick("locationType", locationType.value)
                  }
                  className={cn(
                    searchParams.get("locationType") === locationType.value &&
                      "bg-accent"
                  )}
                >
                  {locationType.label}
                </Button>
              ))}
            </div>
          </div>
          <div className="flex flex-col items-start gap-2.5">
            <h4 className="text-sm font-bold text-muted-foreground">SALARY</h4>
            <div className="flex flex-wrap gap-2">
              {SALARY_RANGES.map((salaryRange) => (
                <Button
                  key={salaryRange}
                  variant="outline"
                  onClick={() => onFilterClick("salaryRange", salaryRange)}
                  className={cn(
                    searchParams.get("salaryRange") === salaryRange &&
                      "bg-accent"
                  )}
                >
                  {salaryRange}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
