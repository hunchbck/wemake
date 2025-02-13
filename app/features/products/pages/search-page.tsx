import { data, Form } from "react-router";
import { z } from "zod";
import { Hero } from "~/common/components/hero";
import ProductPagination from "~/common/components/product-pagination";
import { Button } from "~/common/components/ui/button";
import { Input } from "~/common/components/ui/input";
import { ProductCard } from "../components/product-card";
import type { Route } from "./+types/search-page";

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Search Products | wemake" },
    { name: "description", content: "Search for products" }
  ];
};

const paramsSchema = z.object({
  query: z.string().optional().default(""),
  page: z.coerce.number().optional().default(1)
});

export const loader = ({ request }: Route.LoaderArgs) => {
  const url = new URL(request.url);
  // console.log(url);
  const { success, data: parsedData } = paramsSchema.safeParse(
    Object.fromEntries(url.searchParams)
  );
  if (!success) {
    throw data(
      { error_code: "INVALID_PARAMS", error_message: "Invalid params" },
      { status: 400 }
    );
  }
  console.log(parsedData);
  return { ...parsedData };
};

export default function SearchPage() {
  return (
    <div className="space-y-10">
      <Hero
        title="Search Products"
        subtitle="Search for products by title or description"
      />
      <Form className="mx-auto flex max-w-screen-sm items-center justify-center gap-2">
        <Input
          name="query"
          placeholder="Search for products"
          className="text-lg"
        />
        <Button type="submit">Search</Button>
      </Form>
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
