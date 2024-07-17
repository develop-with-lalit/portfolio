import { Outlet } from "react-router-dom";
import MyNav from "../components/MyNav";

const Layout = () => {
  return (
    <>
      <div className="fixed top-0 w-full z-10 mb-2 h-12">
        <MyNav />
      </div>
      <Outlet />
    </>
  );
};

export default Layout;
