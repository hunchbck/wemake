import { ChevronUpIcon, EyeIcon, MessageCircleIcon } from "lucide-react";
import { Link } from "react-router";
import { Button } from "~/common/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "~/common/components/ui/card";

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  commentsCount: number;
  viewsCount: number;
  votesCount: number;
}

export function ProductCard({
  id,
  name,
  description,
  commentsCount,
  viewsCount,
  votesCount
}: ProductCardProps) {
  return (
    <Link to={`/products/${id}`} className="block">
      <Card className="flex w-full items-center justify-between bg-transparent hover:bg-card/50">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold leading-none tracking-tight">
            {name}
          </CardTitle>
          <CardDescription className="text-muted-foreground">
            {description}
          </CardDescription>
          <div className="mt-2 flex items-center gap-4">
            <div className="flex items-center gap-px text-xs text-muted-foreground">
              <MessageCircleIcon className="h-4 w-4" />
              <span className="text-sm text-muted-foreground">
                {commentsCount}
              </span>
            </div>
            <div className="flex items-center gap-px text-xs text-muted-foreground">
              <EyeIcon className="h-4 w-4" />
              <span className="text-sm text-muted-foreground">
                {viewsCount}
              </span>
            </div>
          </div>
        </CardHeader>
        <CardFooter className="py-0">
          <Button variant="outline" className="flex h-14 flex-col">
            <ChevronUpIcon className="size-4 shrink-0" />
            <span>{votesCount}</span>
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
}
