import { Link, NavLink } from "react-router-dom";

const NoPage = () => {
  return (
    <div className=" flex flex-col py-12 gap-12 md:py-24 ">
      <div className="text-sm font-normal">
        <NavLink to={"/"} className="text-gray-500">
          Home /
        </NavLink>
        <NavLink to={"/NoPage"} className="underline">
          404 Error
        </NavLink>
      </div>
      <div className="flex justify-center gap-3  flex-col items-center h-auto">
        <h2 className="text-[30px] md:text-8xl ">404 Not Found</h2>
        <p className="text-sm md:text-[16px] font-normal text-center">
          Your visited page not found. You may go home page.
        </p>

        <Link to={"home"}>
          <button className="bg-secondary py-4 px-12 rounded mt-8 mb-8 md:mt-14 md:mb-14">
            Back to home page
          </button>
        </Link>
      </div>
    </div>
  );
};
export default NoPage;
