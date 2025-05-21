import { Outlet } from "react-router";
import Navbar from "./common/navbar";

const layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default layout;
