import { StarIcon } from "lucide-react";
import { useState } from "react";
import { Form } from "react-router";
import InputPair from "~/common/components/input-pair";
import { Button } from "~/common/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "~/common/components/ui/dialog";
import { Label } from "~/common/components/ui/label";

interface CreateReviewDialogProps {
  trigger: React.ReactNode;
  title: string;
  description: string;
}

export function CreateReviewDialog({
  trigger,
  title,
  description
}: CreateReviewDialogProps) {
  const [rating, setRating] = useState<number>(0);
  const [hoverStar, setHoverStar] = useState<number>(0);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary">{trigger}</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-2xl">{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <Form className="space-y-10">
          <div>
            <Label className="flex flex-col gap-1">
              Rating
              <small className="text-muted-foreground">
                What would you rate this product?
              </small>
            </Label>
            <div className="mt-5 flex gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <label
                  key={star}
                  className="relative"
                  onMouseEnter={() => setHoverStar(star)}
                  onMouseLeave={() => setHoverStar(0)}
                >
                  <StarIcon
                    className="size-5 text-yellow-500"
                    fill={
                      hoverStar >= star || rating >= star
                        ? "currentColor"
                        : "none"
                    }
                  />
                  <input
                    type="radio"
                    name="rating"
                    value={star}
                    required
                    className="absolute h-px w-px opacity-0"
                    onChange={() => setRating(star)}
                  />
                </label>
              ))}
            </div>
          </div>
          <InputPair
            textArea
            label="Review"
            name="name"
            description="Maximum 1000 characters"
            placeholder="Tell us more about your experience with the product"
            required
          />
          <DialogFooter>
            <Button type="submit">Submit review</Button>
          </DialogFooter>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
