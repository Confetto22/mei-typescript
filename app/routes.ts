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
    // route("/events/:dynamicEvent", "./routes/eventdetail.tsx"),
    // route("/:dynamicEvent", "./routes/eventdetail.tsx"),
    route("/events/:dynamicEvent", "./routes/eventdetail.tsx", {
      id: "events-dynamicEvent",
    }),
    route("/:dynamicEvent", "./routes/eventdetail.tsx", {
      id: "root-dynamicEvent",
    }),
    route("/events", "./routes/events.tsx"),
    route("/contact", "./routes/contact.tsx"),
    route("/new-here", "./routes/newhere.tsx"),
  ]),
] satisfies RouteConfig;
