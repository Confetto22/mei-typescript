import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  layout("./components/layout.tsx", [
    index("routes/home.tsx"),
    route("/about", "./routes/about.tsx"),
    route("/:dynamicEvent", "./routes/eventdetail.tsx"),
  ]),
] satisfies RouteConfig;
