import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
  layout("routes/_layout.tsx", [
    index("routes/home.tsx"),
    route("projects",    "routes/projects.tsx"),
    route("education",   "routes/education.tsx"),
    route("publication", "routes/publication.tsx"),
    route("swe",         "routes/swe.tsx"),
    route("cv",          "routes/cv.tsx"),
  ]),
] satisfies RouteConfig;
