/**
 * Typed data layer — imports from app/portfolio/ and re-exports with types.
 * To update website content, edit the corresponding file in app/portfolio/.
 * To add blog posts, see app/blog/index.ts.
 */
import rawProfile     from "./portfolio/profile.json";
import rawHome        from "./portfolio/home.json";
import rawProjects    from "./portfolio/projects.json";
import rawPublication from "./portfolio/publication.json";
import rawCv          from "./portfolio/cv.json";

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

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  summary: string;
  content: string;
};

// ─── Exports ───────────────────────────────────────────────────────────────

export const profile   = rawProfile   as Profile;
export const home      = rawHome      as { greeting: string; bio: string; stats: Stat[] };
export const projects  = rawProjects  as Project[];
export const publication = rawPublication as {
  comingSoon: boolean;
  labs: Lab[];
  items: Publication[];
};
export const cv = rawCv as {
  bio: string;
  stats: Stat[];
  quickLinks: QuickLink[];
};
