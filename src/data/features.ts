import {
  Layers,
  CheckCircle2,
  Sparkles,
  Clock,
  type LucideIcon,
} from "lucide-react";

export type BadgeVariant = "default" | "secondary" | "outline" | "brand" | "neutral" | "success";

export interface SubmissionGuideline {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  tag: string;
  tagVariant?: BadgeVariant;
}

export interface SubmissionDrawerData {
  badge: string;
  title: string;
  description: string;
  githubUrl: string;
  emailUrl: string;
  templateText: string;
  footerNotice: string;
  guidelines: SubmissionGuideline[];
}

export const SUBMISSION_DRAWER_DATA: SubmissionDrawerData = {
  badge: "Community Submissions",
  title: "Submit a Tool to Savelio",
  description:
    "Suggest a high-quality UI library, component collection, dev utility, or creative showcase.",
  githubUrl:
    "https://github.com/codezenashish/savelio/issues/new?title=Tool+Submission:+[Name]&body=Tool+Name:%0AURL:%0ACategory:%0ADescription:",
  emailUrl:
    "mailto:ashish@savelio.dev?subject=Savelio%20Tool%20Submission&body=Tool%20Name:%0AURL:%0ACategory:%0ADescription:",
  templateText: "Format: Tool Name · URL · Category · One-line summary",
  footerNotice:
    "100% free and open for all creators. Submissions are tested and reviewed to maintain directory quality.",
  guidelines: [
    {
      id: "eligible",
      title: "Eligible Resources",
      description:
        "UI component collections, design systems, CSS tricks, animation engines, dev utilities, and standout creative portfolios.",
      icon: Layers,
      tag: "Accepted",
      tagVariant: "brand",
    },
    {
      id: "standards",
      title: "Quality Guidelines",
      description:
        "Must be actively maintained, responsive, well-documented, and deliver genuine utility for modern web developers.",
      icon: CheckCircle2,
      tag: "Criteria",
      tagVariant: "neutral",
    },
    {
      id: "free",
      title: "No Listing Fees",
      description:
        "Zero pay-to-play bias or sponsor-gated positions. Inclusion is purely merit-based to preserve high directory signal.",
      icon: Sparkles,
      tag: "Free",
      tagVariant: "secondary",
    },
    {
      id: "review",
      title: "Fast Verification",
      description:
        "Every tool is tested, verified, and mapped with CDN favicons and rich metadata before going live.",
      icon: Clock,
      tag: "24-48h",
      tagVariant: "neutral",
    },
  ],
};

// Backwards-compatibility aliases
export const BETA_DRAWER_DATA = {
  badge: SUBMISSION_DRAWER_DATA.badge,
  defaultTitle: SUBMISSION_DRAWER_DATA.title,
  defaultDescription: SUBMISSION_DRAWER_DATA.description,
  footerNotice: SUBMISSION_DRAWER_DATA.footerNotice,
};

export const UPCOMING_FEATURES = SUBMISSION_DRAWER_DATA.guidelines.map((g) => ({
  id: g.id,
  title: g.title,
  description: g.description,
  icon: g.icon,
  status: g.tag,
  tagVariant: g.tagVariant,
}));

export type FeatureItem = (typeof UPCOMING_FEATURES)[number];
export type BetaDrawerData = typeof BETA_DRAWER_DATA;
