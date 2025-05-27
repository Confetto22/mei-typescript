import { Outlet } from "react-router";
import Navbar from "./common/navbar";
import Picsgrid from "./common/picsgrid";
import Footer from "./common/footer";
import BibleVerse from "./common/BibleVerse";

const layout = () => {
  return (
    <>
      <Navbar />

      <Outlet />
      {/* <BibleVerse /> */}
      <Picsgrid />
      <Footer />
    </>
  );
};

export default layout;
