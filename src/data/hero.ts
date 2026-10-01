export interface HeroData {
  greeting: string;
  brandName: string;
  description: string;
  count: number;
  countLabel: string;
}

export const HERO_CONTENT: HeroData = {
  greeting: "Hey developers,",
  brandName: "Savelio",
  description:
    "a hand-picked collection of the best libraries, UI components, and dev tools on the web.",
  count: 120,
  countLabel: "tools and counting. Know a useful library that belongs here?",
};
