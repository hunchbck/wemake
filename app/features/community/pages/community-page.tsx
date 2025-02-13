import { ChevronDownIcon } from "lucide-react";
import { Form, Link, useSearchParams } from "react-router";
import { Hero } from "~/common/components/hero";
import { Button } from "~/common/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger
} from "~/common/components/ui/dropdown-menu";
import { Input } from "~/common/components/ui/input";
import { PostCard } from "../components/post-card";
import { PERIOD_OPTIONS, SORT_OPTIONS } from "../constants";
import type { Route } from "./+types/community-page";
export const meta: Route.MetaFunction = () => {
  return [
    { title: "Community | wemake" },
    { name: "description", content: "Join our community" }
  ];
};

export default function CommunityPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const sorting = searchParams.get("sorting") || "newest";
  const period = searchParams.get("period") || "all";

  return (
    <div className="space-y-10">
      <Hero
        title="Community"
        subtitle="Ask questions, share ideas, and connect with our developers"
      />
      <div className="grid grid-cols-6 items-start gap-40">
        <div className="col-span-4 space-y-10">
          <div className="flex justify-between">
            <div className="w-full space-y-5">
              <div className="flex items-center gap-5">
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center gap-1">
                    <span className="text-sm capitalize">{sorting}</span>
                    <ChevronDownIcon className="size-5" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {SORT_OPTIONS.map((option) => (
                      <DropdownMenuCheckboxItem
                        className="cursor-pointer capitalize"
                        key={option}
                        onCheckedChange={(checked: boolean) => {
                          if (checked) {
                            searchParams.set("sorting", option);
                            setSearchParams(searchParams);
                          }
                        }}
                      >
                        {option}
                      </DropdownMenuCheckboxItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
                {sorting === "popular" && (
                  <DropdownMenu>
                    <DropdownMenuTrigger className="flex items-center gap-1">
                      <span className="text-sm capitalize">{period}</span>
                      <ChevronDownIcon className="size-5" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      {PERIOD_OPTIONS.map((option) => (
                        <DropdownMenuCheckboxItem
                          className="cursor-pointer capitalize"
                          key={option}
                          onCheckedChange={(checked: boolean) => {
                            if (checked) {
                              searchParams.set("period", option);
                              setSearchParams(searchParams);
                            }
                          }}
                        >
                          {option}
                        </DropdownMenuCheckboxItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                )}
              </div>
              <Form className="w-2/3">
                <Input
                  type="search"
                  placeholder="Search for discussions"
                  className="w-full"
                  name="search"
                />
              </Form>
            </div>
            <Button asChild>
              <Link to={`/community/submit`}>Create Discussion</Link>
            </Button>
          </div>
          <div className="space-y-5">
            {Array.from({ length: 11 }).map((_, index) => (
              <PostCard
                key={index}
                id={`postId-${index}`}
                title="What is the best productivity tool?"
                author="Nico"
                authorAvatarUrl="https://github.com/apple.png"
                category="Productivity"
                createdAt="12 hours ago"
                expanded
              />
            ))}
          </div>
        </div>
        <aside className="col-span-2 space-y-5">
          <span className="text-sm font-bold uppercase text-muted-foreground">
            Topics
          </span>
          <div className="flex flex-col items-start gap-4">
            {[
              "AI Tools",
              "Web Development",
              "Mobile Development",
              "Game Development",
              "Design",
              "Other"
            ].map((category) => (
              <Button asChild variant={"link"} key={category} className="pl-0">
                <Link to={`/community?topic=${category}`}>{category}</Link>
              </Button>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
}
