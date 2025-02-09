import { Link } from "react-router";
import { Badge } from "~/common/components/ui/badge";
import { Button } from "~/common/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from "~/common/components/ui/card";

interface JobCardProps {
  id: string;
  title: string;
  company: string;
  companyLogoUrl: string;
  companyHq: string;
  createdAt: string;
  type: string;
  positionLocation: string;
  salary: string;
}

export function JobCard({
  id,
  title,
  company,
  companyLogoUrl,
  companyHq,
  createdAt,
  type,
  positionLocation,
  salary
}: JobCardProps) {
  return (
    <Link to={`/jobs/${id}`}>
      <Card className="bg-transparent transition-colors hover:bg-card/50">
        <CardHeader>
          <div className="mb-4 flex items-center gap-4">
            <img
              src={companyLogoUrl}
              alt={`${company} Logo`}
              className="size-10 rounded-full"
            />
            <div className="space-x-2">
              <span className="text-accent-foreground">{company}</span>
              <span className="text-xs text-muted-foreground">{createdAt}</span>
            </div>
          </div>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <Badge variant="outline">{type}</Badge>
          <Badge variant="outline">{positionLocation}</Badge>
        </CardContent>
        <CardFooter className="flex justify-between">
          <div className="flex flex-col">
            <span className="text-sm font-medium text-muted-foreground">
              {salary}
            </span>
            <span className="text-sm font-medium text-muted-foreground">
              {companyHq}
            </span>
          </div>
          <Button variant="secondary" size="sm">
            Apply now
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
}
