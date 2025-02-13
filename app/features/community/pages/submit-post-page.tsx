import { Form } from "react-router";
import { Hero } from "~/common/components/hero";
import InputPair from "~/common/components/input-pair";
import SelectPair from "~/common/components/select-pair";
import { Button } from "~/common/components/ui/button";
import type { Route } from "./+types/submit-post-page";

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Submit Post | wemake" },
    { name: "description", content: "Submit a new post" }
  ];
};

export default function SubmitPostPage() {
  return (
    <div className="space-y-20">
      <Hero
        title="Create Discussion"
        subtitle="Ask questions, share ideas, and connect with other developers"
      />

      <Form className="mx-auto flex max-w-screen-md flex-col gap-2 space-y-5">
        <InputPair
          id="title"
          label="Title"
          name="title"
          description="(40 characters or less)"
          placeholder="i.e What is the best productivity tool?"
          required
        />
        <SelectPair
          name="category"
          label="Category"
          description="Select a category for your post"
          placeholder="Select a category"
          options={[
            { label: "Question", value: "question" },
            { label: "Discussion", value: "discussion" },
            { label: "Show & Tell", value: "show-tell" }
          ]}
          required
        />
        <InputPair
          id="content"
          label="Content"
          name="content"
          description="(1000 characters or less)"
          placeholder="i.e I'm looking for a new productivity tool that can help me stay organized and get more done."
          required
          textArea
        />
        <Button type="submit" className="mx-auto">
          Create Discussion
        </Button>
      </Form>
    </div>
  );
}
