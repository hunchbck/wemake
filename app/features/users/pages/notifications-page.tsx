import { NotificationCard } from "../components/notification-card";
import type { Route } from "./+types/notifications-page";

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Notifications | wemake" },
    { name: "description", content: "View your notifications" }
  ];
};

export default function NotificationsPage() {
  return (
    <div className="space-y-20">
      <h1 className="text-4xl font-bold">Notifications</h1>
      <div className="flex flex-col items-start gap-5">
        <NotificationCard
          avatarUrl="https://github.com/stevejobs.png"
          avatarFallback="S"
          username="Steve Jobs"
          message="followed you."
          timestamp="2 days ago"
          seen={false}
        />
      </div>
    </div>
  );
}
