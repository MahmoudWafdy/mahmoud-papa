import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import VoucherHome from "../components/VoucherHome";
import FlashSale from "../components/FlashSale";
import Category from "../components/Category";
import BestSelling from "../components/BestSelling";
import MusicExclusive from "../components/MusicExclusive";
import OurProducts from "../components/OurProducts";
import NewArrival from "../components/NewArriaval";
import { WishCartListContext } from "../components/WishCartListContext";

const Home = () => {
  const [isWomanDropdownVisible, setIisWomanDropdownVisible] = useState(false);
  const { handleAddToWishList } = useContext(WishCartListContext);

  const handleOnClickWomanDrop = () => {
    setIisWomanDropdownVisible(!isWomanDropdownVisible);
  };
  return (
    <>
      <div className="flex flex-col md:flex-row w-full">
        <div className=" md:border-r md:w-1/3">
          <ul className="flex-row flex-wrap py-6 pr-2 flex md:flex-col gap-4 text-xs">
            <li className="flex justify-between items-center gap-3 relative">
              <Link to={"/womanfasion"}>Woman’s Fashion</Link>
              <button
                className="womanDropDown"
                onClick={handleOnClickWomanDrop}
              >
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
                className={`absolute left-[106%] top-2 w-[90px] bg-gray-800 text-white p-2 pr-3 transition-all duration-500 ease-in-out overflow-hidden ${
                  isWomanDropdownVisible
                    ? "opacity-100 max-h-40"
                    : "opacity-0 max-h-0"
                }`}
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
        {/* <VoucherHome /> */}
      </div>
      <VoucherHome />

      <FlashSale />
      <Category />
      <BestSelling />
      <MusicExclusive />
      <OurProducts handleAddToWishList={handleAddToWishList} />
      <NewArrival />

      <div className="services flex flex-col justify-center md:flex-row gap-4 md:gap-8 py-10 ">
        <div className="flex flex-col justify-center text-center items-center gap-3">
          <div className="svg">
            <svg
              width="81"
              height="80"
              viewBox="0 0 81 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.3"
                d="M80.5 40C80.5 62.0914 62.5914 80 40.5 80C18.4086 80 0.5 62.0914 0.5 40C0.5 17.9086 18.4086 0 40.5 0C62.5914 0 80.5 17.9086 80.5 40ZM11.4071 40C11.4071 56.0675 24.4325 69.0929 40.5 69.0929C56.5675 69.0929 69.5929 56.0675 69.5929 40C69.5929 23.9325 56.5675 10.9071 40.5 10.9071C24.4325 10.9071 11.4071 23.9325 11.4071 40Z"
                fill="#2F2E30"
              />
              <circle cx="40.5" cy="40" r="29" fill="black" />
              <g clipPath="url(#clip0_6682_3513)">
                <path
                  d="M32.1663 51.6667C34.0073 51.6667 35.4997 50.1743 35.4997 48.3333C35.4997 46.4924 34.0073 45 32.1663 45C30.3254 45 28.833 46.4924 28.833 48.3333C28.833 50.1743 30.3254 51.6667 32.1663 51.6667Z"
                  stroke="#FAFAFA"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M48.8333 51.6667C50.6743 51.6667 52.1667 50.1743 52.1667 48.3333C52.1667 46.4924 50.6743 45 48.8333 45C46.9924 45 45.5 46.4924 45.5 48.3333C45.5 50.1743 46.9924 51.6667 48.8333 51.6667Z"
                  stroke="#FAFAFA"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M28.833 48.3335H27.4997C26.3951 48.3335 25.4997 47.4381 25.4997 46.3335V41.6668M23.833 28.3335H40.1663C41.2709 28.3335 42.1663 29.2289 42.1663 30.3335V48.3335M35.4997 48.3335H45.4997M52.1663 48.3335H53.4997C54.6042 48.3335 55.4997 47.4381 55.4997 46.3335V38.3335M55.4997 38.3335H42.1663M55.4997 38.3335L51.0823 30.9712C50.7208 30.3688 50.0698 30.0002 49.3673 30.0002H42.1663"
                  stroke="#FAFAFA"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M28.5 48H27.1667C26.0621 48 25.1667 47.1046 25.1667 46V41.3333M23.5 28H39.8333C40.9379 28 41.8333 28.8954 41.8333 30V48M35.5 48H45.1667M52.5 48H53.1667C54.2712 48 55.1667 47.1046 55.1667 46V38M55.1667 38H41.8333M55.1667 38L50.7493 30.6377C50.3878 30.0353 49.7368 29.6667 49.0343 29.6667H41.8333"
                  stroke="#FAFAFA"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M25.5 31.8181H32.1667"
                  stroke="#FAFAFA"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M22.3184 35.4546H28.985"
                  stroke="#FAFAFA"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M25.5 39.0908H32.1667"
                  stroke="#FAFAFA"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_6682_3513">
                  <rect
                    width="40"
                    height="40"
                    fill="white"
                    transform="translate(20.5 20)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
          <h2 className="font-semibold text-xl">FREE AND FAST DELIVERY</h2>
          <p className="text-sm">Free delivery for all orders over $140</p>
        </div>
        <div className="flex flex-col justify-center text-center items-center gap-3">
          <div className="svg">
            <svg
              width="81"
              height="80"
              viewBox="0 0 81 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.3"
                d="M80.5 40C80.5 62.0914 62.5914 80 40.5 80C18.4086 80 0.5 62.0914 0.5 40C0.5 17.9086 18.4086 0 40.5 0C62.5914 0 80.5 17.9086 80.5 40ZM11.4071 40C11.4071 56.0675 24.4325 69.0929 40.5 69.0929C56.5675 69.0929 69.5929 56.0675 69.5929 40C69.5929 23.9325 56.5675 10.9071 40.5 10.9071C24.4325 10.9071 11.4071 23.9325 11.4071 40Z"
                fill="#2F2E30"
              />
              <circle cx="40.5" cy="40" r="29" fill="black" />
              <g clipPath="url(#clip0_6682_3513)">
                <path
                  d="M32.1663 51.6667C34.0073 51.6667 35.4997 50.1743 35.4997 48.3333C35.4997 46.4924 34.0073 45 32.1663 45C30.3254 45 28.833 46.4924 28.833 48.3333C28.833 50.1743 30.3254 51.6667 32.1663 51.6667Z"
                  stroke="#FAFAFA"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M48.8333 51.6667C50.6743 51.6667 52.1667 50.1743 52.1667 48.3333C52.1667 46.4924 50.6743 45 48.8333 45C46.9924 45 45.5 46.4924 45.5 48.3333C45.5 50.1743 46.9924 51.6667 48.8333 51.6667Z"
                  stroke="#FAFAFA"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M28.833 48.3335H27.4997C26.3951 48.3335 25.4997 47.4381 25.4997 46.3335V41.6668M23.833 28.3335H40.1663C41.2709 28.3335 42.1663 29.2289 42.1663 30.3335V48.3335M35.4997 48.3335H45.4997M52.1663 48.3335H53.4997C54.6042 48.3335 55.4997 47.4381 55.4997 46.3335V38.3335M55.4997 38.3335H42.1663M55.4997 38.3335L51.0823 30.9712C50.7208 30.3688 50.0698 30.0002 49.3673 30.0002H42.1663"
                  stroke="#FAFAFA"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M28.5 48H27.1667C26.0621 48 25.1667 47.1046 25.1667 46V41.3333M23.5 28H39.8333C40.9379 28 41.8333 28.8954 41.8333 30V48M35.5 48H45.1667M52.5 48H53.1667C54.2712 48 55.1667 47.1046 55.1667 46V38M55.1667 38H41.8333M55.1667 38L50.7493 30.6377C50.3878 30.0353 49.7368 29.6667 49.0343 29.6667H41.8333"
                  stroke="#FAFAFA"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M25.5 31.8181H32.1667"
                  stroke="#FAFAFA"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M22.3184 35.4546H28.985"
                  stroke="#FAFAFA"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M25.5 39.0908H32.1667"
                  stroke="#FAFAFA"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_6682_3513">
                  <rect
                    width="40"
                    height="40"
                    fill="white"
                    transform="translate(20.5 20)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
          <h2 className="font-semibold text-xl">24/7 CUSTOMER SERVICE</h2>
          <p className="text-sm">Friendly 24/7 customer support</p>
        </div>
        <div className="flex flex-col justify-center text-center items-center gap-3">
          <div className="svg">
            <svg
              width="81"
              height="80"
              viewBox="0 0 81 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.3"
                d="M80.5 40C80.5 62.0914 62.5914 80 40.5 80C18.4086 80 0.5 62.0914 0.5 40C0.5 17.9086 18.4086 0 40.5 0C62.5914 0 80.5 17.9086 80.5 40ZM11.4071 40C11.4071 56.0675 24.4325 69.0929 40.5 69.0929C56.5675 69.0929 69.5929 56.0675 69.5929 40C69.5929 23.9325 56.5675 10.9071 40.5 10.9071C24.4325 10.9071 11.4071 23.9325 11.4071 40Z"
                fill="#2F2E30"
              />
              <circle cx="40.5" cy="40" r="29" fill="black" />
              <g clipPath="url(#clip0_6682_3513)">
                <path
                  d="M32.1663 51.6667C34.0073 51.6667 35.4997 50.1743 35.4997 48.3333C35.4997 46.4924 34.0073 45 32.1663 45C30.3254 45 28.833 46.4924 28.833 48.3333C28.833 50.1743 30.3254 51.6667 32.1663 51.6667Z"
                  stroke="#FAFAFA"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M48.8333 51.6667C50.6743 51.6667 52.1667 50.1743 52.1667 48.3333C52.1667 46.4924 50.6743 45 48.8333 45C46.9924 45 45.5 46.4924 45.5 48.3333C45.5 50.1743 46.9924 51.6667 48.8333 51.6667Z"
                  stroke="#FAFAFA"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M28.833 48.3335H27.4997C26.3951 48.3335 25.4997 47.4381 25.4997 46.3335V41.6668M23.833 28.3335H40.1663C41.2709 28.3335 42.1663 29.2289 42.1663 30.3335V48.3335M35.4997 48.3335H45.4997M52.1663 48.3335H53.4997C54.6042 48.3335 55.4997 47.4381 55.4997 46.3335V38.3335M55.4997 38.3335H42.1663M55.4997 38.3335L51.0823 30.9712C50.7208 30.3688 50.0698 30.0002 49.3673 30.0002H42.1663"
                  stroke="#FAFAFA"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M28.5 48H27.1667C26.0621 48 25.1667 47.1046 25.1667 46V41.3333M23.5 28H39.8333C40.9379 28 41.8333 28.8954 41.8333 30V48M35.5 48H45.1667M52.5 48H53.1667C54.2712 48 55.1667 47.1046 55.1667 46V38M55.1667 38H41.8333M55.1667 38L50.7493 30.6377C50.3878 30.0353 49.7368 29.6667 49.0343 29.6667H41.8333"
                  stroke="#FAFAFA"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M25.5 31.8181H32.1667"
                  stroke="#FAFAFA"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M22.3184 35.4546H28.985"
                  stroke="#FAFAFA"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M25.5 39.0908H32.1667"
                  stroke="#FAFAFA"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_6682_3513">
                  <rect
                    width="40"
                    height="40"
                    fill="white"
                    transform="translate(20.5 20)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
          <h2 className="font-semibold text-xl">MONEY BACK GUARANTEE</h2>
          <p className="text-sm">We reurn money within 30 days</p>
        </div>
      </div>
    </>
  );
};
export default Home;
