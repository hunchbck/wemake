import { Form } from "react-router";
import InputPair from "~/common/components/input-pair";
import { Button } from "~/common/components/ui/button";
import type { Route } from "./+types/otp-start-page";

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Start OTP | wemake" },
    { name: "description", content: "Start OTP" }
  ];
};

export default function OtpStartPage() {
  return (
    <div className="relative flex h-full flex-col items-center justify-center">
      <div className="flex w-full max-w-md flex-col items-center justify-center gap-10">
        <div className="text-center">
          <h1 className="text-2xl font-semibold">Log in with OTP</h1>
          <p className="text-sm text-muted-foreground">
            We will send a 4-digit code to log in to your account.
          </p>
        </div>
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
          <Button type="submit" className="w-full">
            Send OTP
          </Button>
        </Form>
      </div>
    </div>
  );
}
