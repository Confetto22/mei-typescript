import { Outlet } from "react-router";
import Navbar from "./common/navbar";
import Picsgrid from "./common/picsgrid";
import Footer from "./common/footer";
import BibleVerse from "./common/BibleVerse";
import Widget from "./common/Widget";

const layout = () => {
  return (
    <>
      <Navbar />

      <Outlet />
      <Widget />
      <Picsgrid />
      <Footer />
    </>
  );
};

export default layout;
