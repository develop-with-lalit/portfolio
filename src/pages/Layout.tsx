import { Outlet } from "react-router-dom";
import NavBar from "../components/Navbar";

const Layout = () => {
  return (
    <>
      <NavBar />
      <div className="mt-16 w-4/5 mx-auto">
        <Outlet />{" "}
      </div>
    </>
  );
};

export default Layout;
