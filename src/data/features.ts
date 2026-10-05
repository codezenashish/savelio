import {
  UserCheck,
  Bookmark,
  TrendingUp,
  UploadCloud,
  type LucideIcon,
} from "lucide-react";

export type FeatureStatus = "Beta" | "Coming Soon" | "Planned";

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  status: FeatureStatus;
}

export interface BetaDrawerData {
  badge: string;
  defaultTitle: string;
  defaultDescription: string;
  footerNotice: string;
}

export const BETA_DRAWER_DATA: BetaDrawerData = {
  badge: "Beta Roadmap",
  defaultTitle: "Upcoming Features & Beta Access",
  defaultDescription:
    "A preview of capabilities currently in active development for Savelio.",
  footerNotice:
    "Have ideas or suggestions for Savelio? These features are rolling out in the upcoming release.",
};

export const UPCOMING_FEATURES: FeatureItem[] = [
  {
    id: "auth",
    title: "User Authentication & Profiles",
    description:
      "Secure login options to manage personal accounts and preferences.",
    icon: UserCheck,
    status: "Beta",
  },
  {
    id: "bookmarks",
    title: "Favorites & Bookmarks",
    description:
      "Ability for logged-in users to mark tools as favorites and save them to a personal list.",
    icon: Bookmark,
    status: "Coming Soon",
  },
  {
    id: "trending",
    title: "Trending & Popular Tools",
    description:
      "Live view of the most-used and liked tools based on community engagement and likes.",
    icon: TrendingUp,
    status: "Planned",
  },
  {
    id: "submissions",
    title: "Community Submissions",
    description:
      "Future-ready feature allowing developers to submit new libraries, tools, or designs to the platform.",
    icon: UploadCloud,
    status: "Planned",
  },
];
