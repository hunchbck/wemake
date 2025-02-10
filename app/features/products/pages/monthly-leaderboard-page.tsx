import { DateTime } from "luxon";
import { data, isRouteErrorResponse, Link } from "react-router";
import { z } from "zod";
import { Hero } from "~/common/components/hero";
import ProductPagination from "~/common/components/product-pagination";
import { Button } from "~/common/components/ui/button";
import { ProductCard } from "~/features/products/components/product-card";
import type { Route } from "./+types/monthly-leaderboard-page";
const paramsSchema = z.object({
  year: z.coerce.number(),
  month: z.coerce.number()
});

export const meta: Route.MetaFunction = ({ params }) => {
  const urlDate = DateTime.fromObject({
    year: Number(params.year),
    month: Number(params.month)
  })
    .setZone("Asia/Seoul")
    .setLocale("ko");
  return [
    {
      title: `The best products of ${urlDate.toLocaleString({
        month: "long",
        year: "numeric"
      })} | wemake`
    }
  ];
};

export const loader = ({ params }: Route.LoaderArgs) => {
  const { success, data: parsedData } = paramsSchema.safeParse(params);
  if (!success) {
    throw data(
      {
        error_code: "INVALID_PARAMS",
        error_message: "Invalid params"
      },
      {
        status: 400
      }
    );
  }
  const date = DateTime.fromObject({
    year: parsedData.year,
    month: parsedData.month
  }).setZone("Asia/Seoul");
  if (!date.isValid) {
    throw data(
      {
        error_code: "INVALID_DATE",
        error_message: "Invalid date"
      },
      {
        status: 400
      }
    );
  }
  const today = DateTime.now().setZone("Asia/Seoul").startOf("month");
  if (date > today) {
    throw data(
      {
        error_code: "FUTURE_DATE",
        error_message: "Future date"
      },
      {
        status: 400
      }
    );
  }
  return { ...parsedData };
};

export default function MonthlyLeaderboardPage({
  loaderData
}: Route.ComponentProps) {
  const urlDate = DateTime.fromObject({
    year: loaderData.year,
    month: loaderData.month
  });
  const previousMonth = urlDate.minus({ months: 1 });
  const nextMonth = urlDate.plus({ months: 1 });
  const isToday = urlDate.equals(DateTime.now().startOf("month"));

  return (
    <div className="space-y-10">
      <Hero
        title={`Best of month ${urlDate.toLocaleString({
          month: "long",
          year: "numeric"
        })}`}
      />
      <div className="flex items-center justify-center gap-2">
        <Button variant="secondary" asChild>
          <Link
            to={`/products/leaderboards/monthly/${previousMonth.year}/${previousMonth.month}`}
          >
            &larr;{" "}
            {previousMonth.toLocaleString({
              month: "long",
              year: "2-digit"
            })}
          </Link>
        </Button>

        {!isToday ? (
          <Button variant="secondary" asChild>
            <Link
              to={`/products/leaderboards/monthly/${nextMonth.year}/${nextMonth.month}`}
            >
              {nextMonth.toLocaleString({
                month: "long",
                year: "2-digit"
              })}{" "}
              &rarr;
            </Link>
          </Button>
        ) : null}
      </div>
      <div className="mx-auto w-full max-w-screen-md space-y-5">
        {Array.from({ length: 11 }).map((_, index) => (
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
      </div>
      <ProductPagination totalPages={10} />
    </div>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  if (isRouteErrorResponse(error)) {
    if (error.status === 400) {
      return (
        <div>
          {error.data.error_message} / {error.data.error_code}
        </div>
      );
    }
  }
  if (error instanceof Error) {
    return <div>{error.message}</div>;
  }
  return <div>Unknown error</div>;
}
