import { Outlet } from "react-router";
import Navbar from "./common/navbar";
import Picsgrid from "./common/picsgrid";
import Footer from "./common/footer";

const layout = () => {
  return (
    <>
      <Navbar />

      <Outlet />
      <Picsgrid />
      <Footer />
    </>
  );
};

export default layout;
