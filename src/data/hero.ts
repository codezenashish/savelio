import { URL_ENTRIES } from "./url-library";

export interface SubmissionDrawerData {
  title: string;
  description: string;
}

export interface HeroData {
  greeting: string;
  brandEmoji: string;
  brandName: string;
  prefix: string;
  description: string;
  count: number;
  countLabel: string;
  submitButtonText: string;
  submissionDrawer: SubmissionDrawerData;
}

export const HERO_CONTENT: HeroData = {
  greeting: "Hey developers,",
  brandEmoji: "🌱",
  brandName: "Savelio",
  prefix: "This is ",
  description:
    "a hand-picked collection of the best libraries, UI components, and dev tools on the web.",
  count: URL_ENTRIES.length,
  countLabel: "tools and counting.",
  submitButtonText: "submit it",
  submissionDrawer: {
    title: "Submit a Tool or Resource",
    description:
      "Suggest a library, UI component, developer utility, or creative showcase to be featured on Savelio.",
  },
};
