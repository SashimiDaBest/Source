import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
  layout("routes/_layout.tsx", [
    index("routes/home.tsx"),
    route("projects",    "routes/projects.tsx"),
    route("publication", "routes/publication.tsx"),
    route("cv",          "routes/cv.tsx"),
    route("blog",        "routes/blog.tsx"),
    route("blog/:slug",  "routes/blog.$slug.tsx"),
  ]),
] satisfies RouteConfig;
