import { NavLink, Outlet, useLocation } from "react-router";
import { cn } from "../styles";
import { publicUrl } from "../utils";
import { profile } from "../data";
import {
  GitHubIcon,
  LinkedInIcon,
  EmailIcon,
  CVIcon,
  LeetCodeIcon,
  LocationIcon,
} from "../components/ui";

const NAV_LINKS = [
  { to: "/projects",    label: "Projects"    },
  { to: "/education",   label: "Education"   },
  { to: "/publication", label: "Publication" },
  { to: "/swe",         label: "SWE"         },
  { to: "/cv",          label: "CV"          },
];

const ICON_MAP: Record<string, React.ReactNode> = {
  github:   <GitHubIcon size={17} />,
  linkedin: <LinkedInIcon size={17} />,
  email:    <EmailIcon size={17} />,
  cv:       <CVIcon size={17} />,
  leetcode: <LeetCodeIcon size={17} />,
};

const MAP_URL = "https://maps.app.goo.gl/qgyWv4zwnnWzVePK9";

export default function Layout() {
  const location = useLocation();
  return (
    <div className={`min-h-screen ${cn.pageBg}`}>
      {/* ── Top navbar ── */}
      <header className="fixed top-0 inset-x-0 z-50 bg-brand-cream/90 backdrop-blur-md border-b border-brand-lavender/50">
        <nav className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between gap-6">
          {/* Brand — same h-0.5 coral underline as nav items */}
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? cn.navLinkActive + " text-lg font-bold" : cn.navLink + " text-lg font-bold text-slate-900"
            }
          >
            Soleil Pham
          </NavLink>
          <div className="flex items-center gap-1 overflow-x-auto">
            {NAV_LINKS.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  isActive ? cn.navLinkActive : cn.navLink
                }
              >
                {label}
              </NavLink>
            ))}
          </div>
        </nav>
      </header>

      {/* ── Body: left profile sidebar + page content ── */}
      <div className="max-w-6xl mx-auto px-6 pt-20 pb-16 flex flex-col lg:flex-row gap-8 items-start">

        {/* ── Left profile sidebar — slides in once on load ── */}
        <aside className="w-full lg:w-60 xl:w-64 shrink-0">
          <div className="lg:sticky lg:top-24 animate-slide-left">
            <ProfileCard />
          </div>
        </aside>

        {/* ── Page content — fades up on every route change ── */}
        <main
          key={location.pathname}
          className="flex-1 min-w-0 min-h-[calc(100vh-10rem)] animate-fade-up"
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
}

function ProfileCard() {
  return (
    <div className="bg-white border border-brand-lavender/60 rounded-2xl shadow-sm overflow-hidden">
      {/* Header */}
      <div className={cn.profileCardHeader}>
        <img
          src={publicUrl(profile.photo)}
          alt={profile.displayName}
          width={128}
          height={128}
          className="w-28 h-28 rounded-full border-4 border-white shadow-md object-cover"
        />
        <h2 className="mt-3 font-bold text-slate-900 text-base leading-tight">
          {profile.displayName}
        </h2>
        <p className="text-xs text-slate-500 mt-0.5">{profile.fullName}</p>
        <div className="mt-3 flex flex-col items-center gap-1.5">
          {profile.titles.map((t, i) => (
            <p key={t} className="text-xs font-medium text-slate-700 flex items-center gap-1.5">
              <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${i === 0 ? "bg-brand-amber" : "bg-brand-coral"}`} />
              {t}
            </p>
          ))}
        </div>
      </div>

      {/* Location — linked to Google Maps */}
      <div className="px-4 py-3 border-t border-brand-lavender/30">
        <a
          href={MAP_URL}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 group"
        >
          <span className="text-brand-lavender group-hover:text-brand-purple transition-colors shrink-0">
            <LocationIcon size={14} />
          </span>
          <div>
            <p className="font-semibold text-slate-800 text-xs leading-tight group-hover:text-brand-purple transition-colors">
              {profile.university}
            </p>
            <p className="text-xs text-slate-500">{profile.location}</p>
          </div>
        </a>
      </div>

      {/* Social links */}
      <div className="px-2 pb-1 border-t border-brand-lavender/30 pt-2 space-y-0.5">
        {profile.links.map(({ label, sub, href, icon }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noreferrer" : undefined}
            className={cn.profileLink}
          >
            <span className={cn.profileLinkIcon}>{ICON_MAP[icon]}</span>
            <div className="min-w-0">
              <p className="text-xs font-semibold text-slate-700 group-hover:text-slate-900 leading-tight">
                {label}
              </p>
              <p className="text-xs text-slate-400 truncate">{sub}</p>
            </div>
          </a>
        ))}
      </div>

    </div>
  );
}
