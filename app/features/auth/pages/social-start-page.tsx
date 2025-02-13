import { redirect } from "react-router";
import type { Route } from "./+types/social-start-page";

export function loader({ params }: Route.LoaderArgs) {
  const { provider } = params;
  // 소셜 로그인 로직 구현 예정
  return redirect(`/auth/social/${provider}/complete`);
}
