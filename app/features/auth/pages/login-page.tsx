import { Form, Link } from "react-router";
import InputPair from "~/common/components/input-pair";
import { Button } from "~/common/components/ui/button";
import { AuthButtons } from "../components/auth-buttons";
import type { Route } from "./+types/login-page";

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Login | wemake" },
    { name: "description", content: "Login to your account" }
  ];
};

export default function LoginPage() {
  return (
    <div className="relative flex h-full flex-col items-center justify-center">
      <Button variant="ghost" asChild className="absolute right-8 top-8">
        <Link to="/auth/join">Join</Link>
      </Button>
      <div className="flex w-full max-w-md flex-col items-center justify-center gap-10">
        <h1 className="text-2xl font-semibold">Log in to your account</h1>
        <Form className="w-full space-y-4">
          <InputPair
            id="email"
            label="Email"
            name="email"
            type="email"
            placeholder="i.e. john@doe.com"
            description="Enter your email address"
            required
          />
          <InputPair
            id="password"
            label="Password"
            name="password"
            type="password"
            placeholder="Enter your password"
            description="Enter your password"
            required
          />
          <Button type="submit" className="w-full">
            Login
          </Button>
        </Form>
        <AuthButtons />
      </div>
    </div>
  );
}
