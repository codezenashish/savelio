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
  count: 120,
  countLabel: "tools and counting. Know a useful library that belongs here?",
  submitButtonText: "submit it",
  submissionDrawer: {
    title: "Community Submissions & Savelio Beta",
    description:
      "Submit your portfolio or tool to be featured on Savelio, or learn more about our upcoming creator tools.",
  },
};
