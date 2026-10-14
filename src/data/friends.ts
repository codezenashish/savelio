export interface FriendProject {
  name: string;
  tagline: string;
  href: string;
  badge?: string;
  domain?: string;
  logoUrl?: string;
}

export interface FriendsSectionData {
  title: string;
  submitText: string;
}

export const FRIENDS_SECTION_DATA: FriendsSectionData = {
  title: "Made by Friends",
  submitText: "submit project",
};

export const FRIENDS_PROJECTS: FriendProject[] = [
  {
    name: "Cutnora",
    tagline: "In-browser video editor with multi-track timeline & local export",
    href: "https://cutnora.app",
    badge: "Video Editor",
    domain: "cutnora.app",
    logoUrl: "/brands/cutnora.svg",
  },
];
