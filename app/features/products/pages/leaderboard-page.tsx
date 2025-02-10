import { Link } from "react-router";
import { Hero } from "~/common/components/hero";
import { Button } from "~/common/components/ui/button";
import { ProductCard } from "~/features/products/components/product-card";
import type { Route } from "./+types/leaderboard-page";

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Leaderboards | wemake" },
    { name: "description", content: "Product leaderboards" }
  ];
};

export default function LeaderboardPage() {
  return (
    <div className="space-y-20">
      <Hero
        title="Leaderboards"
        subtitle="The most popular products on wemake"
      />
      <div className="grid grid-cols-3 gap-4">
        <div>
          <h2 className="text-3xl font-bold leading-tight tracking-tight">
            Daily Leaderboard
          </h2>
          <p className="text-xl font-light text-foreground">
            The most popular products on wemake by day.
          </p>
        </div>
        {Array.from({ length: 7 }).map((_, index) => (
          <ProductCard
            key={index}
            id="productId"
            name="Product Name"
            description="Product description"
            commentsCount={12}
            viewsCount={12}
            votesCount={120}
          />
        ))}
        <Button variant="link" asChild className="self-center text-lg">
          <Link to="/products/leaderboards/daily">
            Explore daily products &rarr;
          </Link>
        </Button>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <h2 className="text-3xl font-bold leading-tight tracking-tight">
            Weekly Leaderboard
          </h2>
          <p className="text-xl font-light text-foreground">
            The most popular products on wemake by week.
          </p>
        </div>
        {Array.from({ length: 7 }).map((_, index) => (
          <ProductCard
            key={index}
            id="productId"
            name="Product Name"
            description="Product description"
            commentsCount={12}
            viewsCount={12}
            votesCount={120}
          />
        ))}
        <Button variant="link" asChild className="self-center text-lg">
          <Link to="/products/leaderboards/weekly">
            Explore weekly products &rarr;
          </Link>
        </Button>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <h2 className="text-3xl font-bold leading-tight tracking-tight">
            Monthly Leaderboard
          </h2>
          <p className="text-xl font-light text-foreground">
            The most popular products on wemake by month.
          </p>
        </div>
        {Array.from({ length: 7 }).map((_, index) => (
          <ProductCard
            key={index}
            id="productId"
            name="Product Name"
            description="Product description"
            commentsCount={12}
            viewsCount={12}
            votesCount={120}
          />
        ))}
        <Button variant="link" asChild className="self-center text-lg">
          <Link to="/products/leaderboards/monthly">
            Explore monthly products &rarr;
          </Link>
        </Button>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <h2 className="text-3xl font-bold leading-tight tracking-tight">
            Yearly Leaderboard
          </h2>
          <p className="text-xl font-light text-foreground">
            The most popular products on wemake by year.
          </p>
        </div>
        {Array.from({ length: 7 }).map((_, index) => (
          <ProductCard
            key={index}
            id="productId"
            name="Product Name"
            description="Product description"
            commentsCount={12}
            viewsCount={12}
            votesCount={120}
          />
        ))}
        <Button variant="link" asChild className="self-center text-lg">
          <Link to="/products/leaderboards/yearly">
            Explore yearly products &rarr;
          </Link>
        </Button>
      </div>
    </div>
  );
}
