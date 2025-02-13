import { useState } from "react";
import { Form } from "react-router";
import { Hero } from "~/common/components/hero";
import InputPair from "~/common/components/input-pair";
import SelectPair from "~/common/components/select-pair";
import { Button } from "~/common/components/ui/button";
import { Input } from "~/common/components/ui/input";
import { Label } from "~/common/components/ui/label";
import type { Route } from "./+types/submit-page";

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Submit Product | wemake" },
    { name: "description", content: "Submit your product" }
  ];
};

export default function SubmitPage() {
  const [icon, setIcon] = useState<string | null>(null);
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const file = event.target.files?.[0];
      setIcon(URL.createObjectURL(file));
    }
  };
  return (
    <div>
      <Hero
        title="Submit Product"
        subtitle="Share your product with the world"
      />
      <Form className="mx-auto grid max-w-screen-lg grid-cols-2 gap-10">
        <div className="space-y-5">
          <InputPair
            description="This is the name of your product"
            id="name"
            label="Name"
            name="name"
            placeholder="Name of your product"
            required
            type="text"
          />
          <InputPair
            description="(60 characters or less)"
            id="tagline"
            label="Tagline"
            name="tagline"
            placeholder="A concise description of your product"
            required
            type="text"
          />
          <InputPair
            description="The URL of your product"
            id="url"
            label="URL"
            name="url"
            placeholder="https://example.com"
            required
            type="text"
          />
          <InputPair
            description="A detailed description of your product"
            id="description"
            label="Description"
            name="description"
            placeholder="A detailed description of your product"
            required
            textArea
            type="text"
          />
          <SelectPair
            description="The category of your product"
            label="Category"
            name="category"
            placeholder="Select a category"
            required
            options={[
              { label: "Developer Tools", value: "developer-tools" },
              { label: "Productivity", value: "productivity" },
              { label: "Design Tools", value: "design-tools" }
            ]}
          />
          <Button type="submit" className="w-full" size="lg">
            Submit
          </Button>
        </div>
        <div className="flex flex-col space-y-2">
          <Label htmlFor="icon" className="flex flex-col gap-1">
            <div className="size-40 overflow-hidden rounded-xl shadow-xl">
              {icon && (
                <img
                  src={icon}
                  alt="icon"
                  className="h-full w-full object-cover"
                />
              )}
            </div>
            Icon
            <small className="text-muted-foreground">
              This is the icon of your product.
            </small>
          </Label>
          <Input
            id="icon"
            type="file"
            name="icon"
            className="w-1/2"
            onChange={onChange}
            required
          />
          <div className="flex flex-col text-xs text-muted-foreground">
            <span>Recommended size 128×128px</span>
            <span>Allowed formats: PNG, JPG, GIF, SVG</span>
            <span>Max file size: 1MB</span>
          </div>
        </div>
      </Form>
    </div>
  );
}
