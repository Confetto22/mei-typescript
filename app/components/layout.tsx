import { Outlet } from "react-router";
import { Suspense } from "react";
import Navbar from "./common/navbar";
import Picsgrid from "./common/picsgrid";
import Footer from "./common/footer";
import Widget from "./common/Widget";
import { ErrorBoundary } from "./ui/error-boundary";
import { Skeleton } from "./ui/loading-skeleton";

function LoadingFallback() {
  return (
    <div className="min-h-screen p-4 space-y-4">
      <Skeleton className="h-8 w-64" />
      <Skeleton className="h-64 w-full" />
      <Skeleton className="h-32 w-full" />
    </div>
  );
}

const Layout = () => {
  return (
    <ErrorBoundary>
      <Navbar />
      <Suspense fallback={<LoadingFallback />}>
        <Outlet />
      </Suspense>
      <Widget />
      <Picsgrid />
      <Footer />
    </ErrorBoundary>
  );
};

export default Layout;
