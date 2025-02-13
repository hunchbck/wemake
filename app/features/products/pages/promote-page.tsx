import { DateTime } from "luxon";
import { useState } from "react";
import type { DateRange } from "react-day-picker";
import { Form } from "react-router";
import { Hero } from "~/common/components/hero";
import SelectPair from "~/common/components/select-pair";
import { Button } from "~/common/components/ui/button";
import { Calendar } from "~/common/components/ui/calendar";
import { Label } from "~/common/components/ui/label";
import type { Route } from "./+types/promote-page";

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Promote | wemake" },
    { name: "description", content: "Promote your product" }
  ];
};

export default function PromotePage() {
  const [promotionPeriod, setPromotionPeriod] = useState<
    DateRange | undefined
  >();
  const totalDays =
    promotionPeriod?.from && promotionPeriod?.to
      ? DateTime.fromJSDate(promotionPeriod.to).diff(
          DateTime.fromJSDate(promotionPeriod.from),
          "days"
        ).days
      : 0;
  return (
    <div>
      <Hero
        title="Promote Your Product"
        subtitle="Boost your product's visibility and engagement with our promotion services."
      />
      <Form className="mx-auto flex max-w-screen-sm flex-col items-center gap-10">
        <SelectPair
          label="Select a product"
          name="promotion"
          description="Select the product you want to promote"
          placeholder="Select a product"
          options={[
            {
              label: "AI Dark Mode Maker",
              value: "ai-dark-mode-maker"
            },
            {
              label: "AI Image Generator",
              value: "ai-image-generator"
            },
            {
              label: "AI Text to Image",
              value: "ai-text-to-image"
            }
          ]}
        />
        <div className="flex w-full flex-col items-center gap-2">
          <Label className="flex flex-col gap-1">
            Select a range of dates for promotion{" "}
            <small className="text-center text-muted-foreground">
              Minimum duration is 3 days.
            </small>
          </Label>
          <Calendar
            mode="range"
            selected={promotionPeriod}
            onSelect={setPromotionPeriod}
            min={3}
            disabled={{ before: new Date() }}
          />
        </div>
        <Button disabled={totalDays === 0}>
          Go to checkout (${totalDays * 20})
        </Button>
      </Form>
    </div>
  );
}
