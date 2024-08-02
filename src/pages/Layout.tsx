import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <>
      <div className="fixed top-0 w-full z-10 mb-2 h-12">
        <Header />
      </div>
      <div className="mt-10 sm:mt-5 p-2 sm:p-12 w-full flex flex-col min-h-[65vh]">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
