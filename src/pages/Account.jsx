import { Link, NavLink, Outlet } from "react-router-dom";

const Account = () => {
  return (
    <div className="my-16 text-sm md:text-base">
      <div className="flex justify-between mb-10 gap-8 ">
        <div className="text-sm font-normal">
          <Link to="/" className="text-gray-500">
            Home /
          </Link>
          <Link to="/account" className="">
            My Acount
          </Link>
        </div>
        <div>
          <span>Welcome/ </span>
          <span className="text-secondary font-medium">Mohamed Ali</span>
        </div>
      </div>
      <div className="flex justify-between  gap-4">
        <div className="nav_account flex flex-col gap-2">
          <div className="flex flex-col gap-2">
            <button className="font-semibold">Manage My Account</button>
            <NavLink
              to={"/account/profile"}
              className={({ isActive }) =>
                isActive
                  ? "text-secondary ml-3 md:ml-8 "
                  : "ml-3 md:ml-8 text-gray-500"
              }
            >
              My Profile
            </NavLink>
            <NavLink
              to={"/account/address"}
              className={({ isActive }) =>
                isActive
                  ? "text-secondary ml-3 md:ml-8 "
                  : "ml-3 md:ml-8 text-gray-500"
              }
            >
              Address Book
            </NavLink>
            <NavLink
              to={"/account/payment"}
              className={({ isActive }) =>
                isActive
                  ? "text-secondary ml-3 md:ml-8 "
                  : "ml-3 md:ml-8 text-gray-500"
              }
            >
              My Payment Options
            </NavLink>
          </div>
          <div className="flex flex-col gap-2 my-2">
            <h2 className="font-medium">
              <Link to={"/account/myreturns"}>My Orders</Link>{" "}
            </h2>
            <NavLink
              to={"/account/myreturns"}
              className={({ isActive }) =>
                isActive
                  ? "text-secondary ml-3 md:ml-8 "
                  : "ml-3 md:ml-8 text-gray-500"
              }
            >
              My Returns
            </NavLink>
            <NavLink
              to={"/account/mycancelation"}
              className={({ isActive }) =>
                isActive
                  ? "text-secondary ml-3 md:ml-8 "
                  : "ml-3 md:ml-8 text-gray-500"
              }
            >
              My Cancelations
            </NavLink>
          </div>
          <div className="my-2">
            <NavLink to={"/wishlist"} className="font-medium">
              My WishList
            </NavLink>
          </div>
        </div>
        <div className="col-span-2 border border-solid flex-1">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};
export default Account;
