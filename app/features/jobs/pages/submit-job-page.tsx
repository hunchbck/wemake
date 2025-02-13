import { Form } from "react-router";
import { Hero } from "~/common/components/hero";
import InputPair from "~/common/components/input-pair";
import SelectPair from "~/common/components/select-pair";
import { Button } from "~/common/components/ui/button";
import { JOB_TYPES, LOCATION_TYPES, SALARY_RANGES } from "../constants";
import type { Route } from "./+types/submit-job-page";

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Post a Job | wemake" },
    {
      name: "description",
      content: "Reach out to the best developers in the world"
    }
  ];
};

export default function SubmitJobPage() {
  return (
    <div>
      <Hero
        title="Post a Job"
        subtitle="Reach out to the best developers in the world"
      />
      <div>
        <Form className="max-w-screen-2lx mx-auto flex flex-col items-center gap-10">
          <div className="grid w-full grid-cols-3 gap-10">
            <InputPair
              id="position"
              label="Position"
              description="(40 characters max)"
              name="position"
              maxLength={40}
              type="text"
              required
              placeholder="i.e. Senior React Developer"
            />
            <InputPair
              id="overview"
              label="Overview"
              description="(400 characters max)"
              name="overview"
              maxLength={400}
              type="text"
              required
              placeholder="i.e. We are looking for a senior React developer with 3 years of experience"
              textArea
            />
            <InputPair
              id="responsibilities"
              label="Responsibilities"
              description="(400 characters max, comma separated)"
              name="responsibilities"
              maxLength={400}
              type="text"
              required
              placeholder="i.e. Develop and maintain web applications using React and TypeScript"
              textArea
            />
            <InputPair
              id="qualifications"
              label="Qualifications"
              description="(400 characters max, comma separated)"
              name="qualifications"
              maxLength={400}
              type="text"
              required
              placeholder="i.e. Bachelor's degree in Computer Science"
              textArea
            />
            <InputPair
              id="benefits"
              label="Benefits"
              description="(400 characters max, comma separated)"
              name="benefits"
              maxLength={400}
              type="text"
              required
              placeholder="i.e. Health insurance, 401(k), etc."
              textArea
            />
            <InputPair
              id="skills"
              label="Skills"
              description="(400 characters max, comma separated)"
              name="skills"
              maxLength={400}
              type="text"
              required
              placeholder="i.e. React, TypeScript, Node.js"
              textArea
            />
            <InputPair
              id="companyName"
              label="Company name"
              description="(40 characters max)"
              name="companyName"
              maxLength={40}
              type="text"
              required
              placeholder="i.e. Google"
            />
            <InputPair
              id="companyLogoUrl"
              label="Company logo URL"
              description="Company logo"
              name="companyLogoUrl"
              type="url"
              required
              placeholder="i.e. https://example.com/logo.png"
            />
            <InputPair
              id="companyLocation"
              label="Company Location"
              description="Company location"
              name="companyLocation"
              type="text"
              required
              placeholder="i.e. San Francisco, CA"
            />
            <InputPair
              id="applyUrl"
              label="Apply URL"
              description="Apply URL"
              name="applyUrl"
              type="url"
              required
              placeholder="i.e. https://example.com/apply"
            />
            <SelectPair
              label="Job type"
              description="Job type"
              name="jobType"
              required
              placeholder="Select the type of job"
              options={JOB_TYPES.map((jobType) => ({
                label: jobType.label,
                value: jobType.value
              }))}
            />
            <SelectPair
              label="Job Location"
              description="Job location"
              name="jobLocation"
              required
              placeholder="Select the location of the job"
              options={LOCATION_TYPES.map((jobLocation) => ({
                label: jobLocation.label,
                value: jobLocation.value
              }))}
            />
            <SelectPair
              label="Salary Range"
              description="Salary range"
              name="salaryRange"
              required
              placeholder="Select the salary range"
              options={SALARY_RANGES.map((salaryRange) => ({
                label: salaryRange,
                value: salaryRange
              }))}
            />
          </div>
          <Button type="submit" className="w-full max-w-sm" size="lg">
            Post job for $100
          </Button>
        </Form>
      </div>
    </div>
  );
}
