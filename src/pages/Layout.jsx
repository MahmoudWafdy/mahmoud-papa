import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Layout = () => {
  return (
    <div className="font-poppins">
      <Header />
      <div className="container mx-auto px-2 flex-col md:px-5 md:text-sm ">
        <Outlet></Outlet>
      </div>
      <Footer />
    </div>
  );
};
export default Layout;
