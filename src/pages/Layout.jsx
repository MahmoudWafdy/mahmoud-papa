import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useEffect } from "react";

const Layout = () => {
  // useEffect(() => {
  // const backToTopButton = document.getElementById("back-to-top");
  // const contentContainer = document.getElementById("content");

  // const handleScroll = () => {
  //   if (contentContainer.scrollTop > 500) {
  //     contentContainer.classList.add("scrolled");
  //   } else {
  //     contentContainer.classList.remove("scrolled");
  //   }
  // };

  // const handleBackToTopClick = () => {
  //   contentContainer.scrollTo({ top: 0, behavior: "smooth" });
  // };

  // contentContainer.addEventListener("scroll", handleScroll);
  // backToTopButton.addEventListener("click", handleBackToTopClick);

  // // return () => {
  // //   contentContainer.removeEventListener("scroll", handleScroll);
  // //   backToTopButton.removeEventListener("click", handleBackToTopClick);
  // // };
  // // }, []);

  return (
    <div className="font-poppins" id="content">
      <button
        id="back-to-top"
        className="w-12 h-12 p-3 transition-opacity duration-200 fixed bottom-8 right-10 bg-secondary text-white
         shadow-2xl rounded-full hover:scale-105 hover:shadow-md"
      >
        <i className="material-icons">arrow_upward</i>
      </button>

      <Header />
      <div
        id="layout_container"
        className="container mx-auto px-2 flex-col md:px-5 md:text-sm "
      >
        <Outlet></Outlet>
      </div>
      <Footer />
    </div>
  );
};
export default Layout;
