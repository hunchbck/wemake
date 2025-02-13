import { Form } from "react-router";
import { Hero } from "~/common/components/hero";
import InputPair from "~/common/components/input-pair";
import {
  Avatar,
  AvatarFallback,
  AvatarImage
} from "~/common/components/ui/avatar";
import { Badge } from "~/common/components/ui/badge";
import { Button } from "~/common/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "~/common/components/ui/card";
import type { Route } from "./+types/team-page";

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Team Details | wemake" },
    { name: "description", content: "View team details and open positions" }
  ];
};

export default function TeamPage({ params: { teamId } }: Route.ComponentProps) {
  return (
    <div className="space-y-20">
      <Hero title="Join lynn's team" />
      <div className="grid grid-cols-6 items-start gap-40">
        <div className="col-span-4 grid grid-cols-4 gap-5">
          {[
            {
              title: "Product name",
              value: "Doggie"
            },
            {
              title: "Stage",
              value: "MVP"
            },
            {
              title: "Team size",
              value: "3"
            },
            {
              title: "Available equity",
              value: 50
            }
          ].map((item) => (
            <Card key={item.title}>
              <CardHeader>
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-2xl font-bold">
                <span>{item.value}</span>
              </CardContent>
            </Card>
          ))}
          <Card className="col-span-2">
            <CardHeader>
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Looking for
              </CardTitle>
            </CardHeader>
            <CardContent className="text-lg font-medium">
              <ul className="list-inside list-disc text-lg">
                {[
                  "React Developer",
                  "Full Stack Developer",
                  "React Native Developer",
                  "Node.js Developer",
                  "Python Developer",
                  "DevOps Engineer",
                  "Cloud Engineer"
                ].map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card className="col-span-2">
            <CardHeader>
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Idea description
              </CardTitle>
            </CardHeader>
            <CardContent className="text-lg font-medium">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                atque aperiam rerum sit voluptate, id temporibus omnis illum
                eveniet ratione eos veritatis iusto eum cumque asperiores
                cupiditate blanditiis mollitia possimus!
              </p>
            </CardContent>
          </Card>
        </div>
        <aside className="col-span-2 space-y-5 rounded-lg border p-6 shadow-sm">
          <div className="flex gap-5">
            <Avatar className="size-14">
              <AvatarFallback>N</AvatarFallback>
              <AvatarImage src="https://github.com/inthetiger.png" />
            </Avatar>
            <div className="flex flex-col gap-2">
              <h4 className="text-lg font-medium">Lynn</h4>
              <Badge variant="secondary">Entrepreneur</Badge>
            </div>
          </div>
          <Form className="space-y-5">
            <InputPair
              label="Introduce yourself"
              description="Tell us about yourself"
              name="introduction"
              id="introduction"
              required
              textArea
              placeholder="i.e I'm a React Developer with 3 years of experience"
            />
          </Form>
          <Button className="w-full">Get in touch</Button>
        </aside>
      </div>
    </div>
  );
}
