import { Form } from "react-router";
import { Hero } from "~/common/components/hero";
import InputPair from "~/common/components/input-pair";
import SelectPair from "~/common/components/select-pair";
import { Button } from "~/common/components/ui/button";
import type { Route } from "./+types/submit-team-page";

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Create Team | wemake" },
    { name: "description", content: "CCreate a team to find a team mate." }
  ];
};

export default function SubmitTeamPage() {
  return (
    <div className="space-y-20">
      <Hero title="Create Team" subtitle="Create a team to find a team mate." />
      <Form className="max-w-screen-2lx mx-auto flex flex-col items-center gap-10">
        <div className="grid w-full grid-cols-3 gap-10">
          <InputPair
            label="What is the name of your product?"
            description="(20 characters max)"
            placeholder="My Product"
            name="name"
            maxLength={20}
            type="text"
            id="name"
            required
          />
          <SelectPair
            label="What is the stage of your product?"
            description="Select the stage of your product"
            name="stage"
            placeholder="Select the stage of your product"
            options={[
              { label: "Idea", value: "idea" },
              { label: "Prototype", value: "prototype" },
              { label: "MVP", value: "mvp" },
              { label: "Growth", value: "growth" },
              { label: "Mature", value: "mature" }
            ]}
            required
          />
          <InputPair
            label="What is the size of your team?"
            description="(1-100)"
            name="size"
            max={100}
            min={1}
            type="number"
            id="size"
            required
          />
          <InputPair
            label="How much equity are you willing to give?"
            description="(*each)"
            name="equity"
            max={100}
            min={1}
            type="number"
            id="equity"
            required
          />
          <InputPair
            label="What roles are you looking for?"
            placeholder="React Developer, Node.js Developer, etc."
            description="(comma separated)"
            name="roles"
            type="text"
            id="roles"
            required
          />
          <InputPair
            label="What is the description of your product?"
            description="(200 characters max)"
            placeholder="We are looking for a React Developer who is proficient in TypeScript and has experience with React Native."
            name="description"
            maxLength={200}
            type="text"
            id="description"
            required
            textArea
          />
        </div>
        <Button type="submit" className="w-full max-w-sm" size="lg">
          Create Team
        </Button>
      </Form>
    </div>
  );
}
