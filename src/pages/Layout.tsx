// import { Outlet } from "react-router-dom";
import MyNav from "../components/MyNav";
import Home from "../pages/Home";

const Layout = () => {
  return (
    <>
      <div className="fixed top-0 w-full z-10 mb-2 h-12">
        <MyNav />
      </div>
      {/* <Outlet /> */}
      <Home />
    </>
  );
};

export default Layout;
