import { Link, NavLink } from "react-router-dom";
import SearchInput from "./SearchInput";
import { useContext } from "react";
import { WishCartListContext } from "./WishCartListContext";

const HeaderNavigation = () => {
  const { wishListCount, cartListCount } = useContext(WishCartListContext);

  const handleClickMenu = () => {
    document.querySelector(".nav_link--mobile").style.opacity = 1;
    document.querySelector(".burger_menu").style.display = "none";
    document.querySelector(".close_menu").style.display = "block";
  };
  const handleClickCloseButton = () => {
    document.querySelector(".nav_link--mobile").style.opacity = 0;
    document.querySelector(".close_menu").style.display = "none";
    document.querySelector(".burger_menu").style.display = "block";
  };

  return (
    <div className="w-full border-b-2 py-3 ">
      <div className="container relative mx-auto px-2 flex gap-2 items-center justify-between text-xs md:px-5 md:text-sm">
        <button
          htmlFor="menu"
          className="burger_menu"
          onClick={handleClickMenu}
        >
          <i className="material-icons text-4xl inline-block">menu</i>
        </button>
        <button
          className="close_menu self-start hidden md:hidden"
          onClick={handleClickCloseButton}
        >
          <i className="material-icons text-4xl">close</i>
        </button>
        <div
          className={` nav_link--mobile md:hidden absolute top-full left-0 right-1/2 bg-gray-950
         text-gray-50 flex gap-2 flex-col p-4 opacity-0 transition-all ease-in-out duration-300 `}
        >
          <ul className="flex flex-col gap-2 text-sm ">
            <li>
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  isActive ? "border-b-2 border-gray-400 " : " "
                }
              >
                Home
              </NavLink>{" "}
            </li>
            <li>
              <NavLink
                to={"/Contact"}
                className={({ isActive }) =>
                  isActive ? "border-b-2 border-gray-400 " : ""
                }
              >
                Contact
              </NavLink>{" "}
            </li>
            <li>
              <NavLink
                to={"/About"}
                className={({ isActive }) =>
                  isActive ? "border-b-2 border-gray-400 " : ""
                }
              >
                About
              </NavLink>{" "}
            </li>
            <li>
              <NavLink
                to={"/SignUp"}
                className={({ isActive }) =>
                  isActive ? "border-b-2 border-gray-400 " : ""
                }
              >
                Sign Up
              </NavLink>{" "}
            </li>
          </ul>

          <p className=" font-semibold text-base my-3 underline">Exclusive</p>

          <ul className=" flex flex-wrap flex-col gap-1 text-sm">
            <li className="flex justify-between items-center gap-3 relative">
              <Link to={"/womanfasion"}>Woman’s Fashion</Link>
              <button className="womanDropDown">
                <svg
                  width="8"
                  height="13"
                  viewBox="0 0 8 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.95 6.63597L0 1.68597L1.414 0.271973L7.778 6.63597L1.414 13L0 11.586L4.95 6.63597Z"
                    fill="black"
                  />
                </svg>
              </button>

              <ul
                className={`absolute left-[106%] top-2 w-[90px] bg-gray-800 text-white p-2 pr-3 transition-all duration-500 ease-in-out overflow-hidden ${"opacity-0 max-h-0"}`}
              >
                <li>
                  <Link to={"/category/Shoes"}>Shoes</Link>
                </li>
                <li>
                  <Link to={"/category/Shoes"}>T-shirt</Link>
                </li>
                <li>
                  <Link to={"/category/Shoes"}>bags</Link>
                </li>
              </ul>
            </li>
            <li className="flex justify-between items-center gap-3 ">
              <Link to={"/mensfasion"}>Men’s Fashion</Link>
              <button className="">
                <svg
                  width="8"
                  height="13"
                  viewBox="0 0 8 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.95 6.63597L0 1.68597L1.414 0.271973L7.778 6.63597L1.414 13L0 11.586L4.95 6.63597Z"
                    fill="black"
                  />
                </svg>
              </button>
            </li>
            <li>
              <Link to={"/electronics"}>Electronics</Link>
            </li>
            <li>
              <Link to={"/homelifestyle"}>Home & Lifestyle</Link>
            </li>
            <li>
              <Link to={"/medicin"}>Medicine</Link>
            </li>
            <li>
              <Link to={"/sports"}>Sports & Outdoor</Link>
            </li>
            <li>
              <Link to={"/baby"}>Baby’s & Toys</Link>
            </li>
            <li>
              <Link to={"/groceries"}>Groceries & Pets</Link>
            </li>
            <li>
              <Link to={"/health"}>Health & Beauty</Link>
            </li>
          </ul>
        </div>

        <div className="hidden md:flex gap-2 md:w-full md:justify-between py-3 md:order-1 md:py-0 ">
          <p className="order-2 md:order-1">Exclusive</p>
          <ul className="hidden md:flex md:gap-2 md:order-2">
            <li>
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  isActive ? "border-b-2 border-gray-400" : ""
                }
              >
                Home
              </NavLink>{" "}
            </li>
            <li>
              <NavLink
                to={"/Contact"}
                className={({ isActive }) =>
                  isActive ? "border-b-2 border-gray-400" : ""
                }
              >
                Contact
              </NavLink>{" "}
            </li>
            <li>
              <NavLink
                to={"/About"}
                className={({ isActive }) =>
                  isActive ? "border-b-2 border-gray-400" : ""
                }
              >
                About
              </NavLink>{" "}
            </li>
            <li>
              <NavLink
                to={"/SignUp"}
                className={({ isActive }) =>
                  isActive ? "border-b-2 border-gray-400" : ""
                }
              >
                Sign Up
              </NavLink>{" "}
            </li>
          </ul>
        </div>

        <div className="flex justify-around w-full gap-2 order-1 md:order-2">
          <SearchInput />
          <div className="flex justify-center items-center gap-2">
            <NavLink
              to={"/wishlist"}
              className="flex items-center justify-center"
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 7C8.239 7 6 9.216 6 11.95C6 14.157 6.875 19.395 15.488 24.69C15.6423 24.7839 15.8194 24.8335 16 24.8335C16.1806 24.8335 16.3577 24.7839 16.512 24.69C25.125 19.395 26 14.157 26 11.95C26 9.216 23.761 7 21 7C18.239 7 16 10 16 10C16 10 13.761 7 11 7Z"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="-ml-3 bg-secondary text-white px-1 text-xs -mt-3 rounded-full">
                {wishListCount}
              </span>
            </NavLink>
            <Link to={"/cart"} className="flex items-center justify-center">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 27C11.5523 27 12 26.5523 12 26C12 25.4477 11.5523 25 11 25C10.4477 25 10 25.4477 10 26C10 26.5523 10.4477 27 11 27Z"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M25 27C25.5523 27 26 26.5523 26 26C26 25.4477 25.5523 25 25 25C24.4477 25 24 25.4477 24 26C24 26.5523 24.4477 27 25 27Z"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3 5H7L10 22H26"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 16.6667H25.59C25.7056 16.6667 25.8177 16.6267 25.9072 16.5535C25.9966 16.4802 26.0579 16.3782 26.0806 16.2648L27.8806 7.26479C27.8951 7.19222 27.8934 7.11733 27.8755 7.04552C27.8575 6.97371 27.8239 6.90678 27.7769 6.84956C27.73 6.79234 27.6709 6.74625 27.604 6.71462C27.5371 6.68299 27.464 6.66661 27.39 6.66666H8"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="-ml-3 bg-secondary text-white px-1 text-xs -mt-3 rounded-full">
                {cartListCount}
              </span>
            </Link>
            <NavLink
              to={"/account"}
              className={({ isActive }) =>
                isActive
                  ? "clickedButtonStyle text-white bg-secondary rounded-full "
                  : ""
              }
            >
              <svg
                // className={({ isActive }) =>
                //   isActive ? "clickedSvgStyle" : ""
                // }
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  // className={({ isActive }) =>
                  //   isActive ? "clickedSvgPathStyle" : ""
                  // }
                  d="M24 27V24.3333C24 22.9188 23.5224 21.5623 22.6722 20.5621C21.8221 19.5619 20.669 19 19.4667 19H11.5333C10.331 19 9.17795 19.5619 8.32778 20.5621C7.47762 21.5623 7 22.9188 7 24.3333V27"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  // className={({ isActive }) =>
                  //   isActive ? "clickedSvgPathStyle" : ""
                  // }
                  d="M16.5 14C18.9853 14 21 11.9853 21 9.5C21 7.01472 18.9853 5 16.5 5C14.0147 5 12 7.01472 12 9.5C12 11.9853 14.0147 14 16.5 14Z"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeaderNavigation;
