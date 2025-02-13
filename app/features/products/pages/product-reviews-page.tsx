import { CreateReviewDialog } from "../components/create-review-dialog";
import { ReviewCard } from "../components/review-card";
import type { Route } from "./+types/product-reviews-page";

export function meta({ params }: Route.MetaArgs) {
  return [
    { title: "Product Reviews | wemake" },
    { name: "description", content: "Read and write product reviews" }
  ];
}

export default function ProductReviewsPage() {
  return (
    <div className="max-w-xl space-y-10">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">10 Reviews</h2>
        <CreateReviewDialog
          trigger="Write a review"
          title="What do you think of this product?"
          description="Please write a review for the product."
        />
      </div>
      <div className="space-y-20">
        {Array.from({ length: 10 }).map((_, index) => (
          <ReviewCard
            avatarUrl="https://github.com/shadcn.png"
            username="John Doe"
            handle="username"
            rating={2}
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis quod delectus quas veniam, maiores obcaecati, dolores neque voluptates aliquam est minima suscipit reprehenderit, officiis necessitatibus laudantium pariatur fuga nihil debitis. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore, molestias at atque ut dolorem aut nemo. Libero similique voluptatum vero, provident perspiciatis mollitia, consequuntur fuga, excepturi aperiam ut nulla eum."
            postedAt="10 days ago"
          />
        ))}
      </div>
    </div>
  );
}
