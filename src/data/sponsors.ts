export interface Sponsor {
  name: string;
  tagline: string;
  href: string;
}

export interface SponsorsSectionData {
  title: string;
  becomeSponsorText: string;
}

export const SPONSORS_SECTION_DATA: SponsorsSectionData = {
  title: "Sponsors",
  becomeSponsorText: "become one",
};

export const SPONSORS: Sponsor[] = [
  {
    name: "Ashish Choudhary",
    tagline: "Software Developer",
    href: "https://ashishchoudhary.dev",
  },
];
