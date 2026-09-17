import { createFileRoute } from "@tanstack/react-router";
import FixNowApp from "@/components/fixnow/app";

const title = "FixNow SOS — Emergency Repair. One Tap Away.";
const description =
  "Book verified technicians for mobile, appliance, electrical, plumbing, AC and car breakdown emergencies in minutes. Live tracking, transparent pricing.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: FixNowApp,
});
