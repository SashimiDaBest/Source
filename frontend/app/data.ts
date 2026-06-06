/**
 * Typed data layer — imports from content.json and re-exports with types.
 * To update website content, edit content.json only.
 */
import raw from "./content.json";

// ─── Types ─────────────────────────────────────────────────────────────────

export type ProfileLink = {
  label: string;
  sub: string;
  href: string;
  icon: "github" | "linkedin" | "email" | "cv" | "leetcode";
};

export type Profile = {
  displayName: string;
  fullName: string;
  photo: string;
  titles: string[];
  university: string;
  location: string;
  links: ProfileLink[];
};

export type Stat = {
  value: string;
  label: string;
};

export type Project = {
  title: string;
  desc: string;
  tags: string[];
  github?: string;
  githubBackend?: string;
  githubFrontend?: string;
  live?: string;
};

export type Experience = {
  org: string;
  location: string;
  role: string;
  period: string;
  bullets: string[];
};

export type Lab = {
  name: string;
  focus: string;
  desc: string;
};

export type Publication = {
  title: string;
  lab: string;
  venue: string;
  year: string;
  desc: string;
};

export type QuickLink = {
  label: string;
  to: string;
};

// ─── Exports ───────────────────────────────────────────────────────────────

export const profile   = raw.profile   as Profile;
export const home      = raw.home      as { greeting: string; bio: string; stats: Stat[] };
export const projects  = raw.projects  as Project[];
export const education = raw.education as {
  degree: {
    school: string;
    degree: string;
    concentration: string;
    minor: string;
    location: string;
    period: string;
  };
  coursework: string[];
  skills: Record<string, string[]>;
};
export const swe = raw.swe as Experience[];
export const publication = raw.publication as {
  comingSoon: boolean;
  labs: Lab[];
  items: Publication[];
};
export const cv = raw.cv as {
  downloadUrl: string;
  bio: string;
  stats: Stat[];
  quickLinks: QuickLink[];
};
