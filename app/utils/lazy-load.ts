import { lazy } from "react";

export const LazyGallery = lazy(() => import("~/routes/gallery"));
export const LazyEvents = lazy(() => import("~/routes/events"));
export const LazyAbout = lazy(() => import("~/routes/about"));
export const LazyContact = lazy(() => import("~/routes/contact"));
export const LazyNewHere = lazy(() => import("~/routes/newhere"));