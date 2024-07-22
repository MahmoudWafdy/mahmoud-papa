import { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import RelatedWishListProduct from "../components/RelatedWishListProducts";
import { WishCartListContext } from "../components/WishCartListContext";

const Product = () => {
  const location = useLocation();
  const productOnpage = location.state.product; //to collect data from clicked product itself
  // console.log(product);
  const {
    id,
    images,
    title,
    discountPercentage,
    price,
    review,
    category,
    stock,
    description,
  } = productOnpage;

  const Size = ["XS", "SM", "M", "L", "XL"];
  const colors = ["bg-slate-400", "bg-secondary"];
  const [displayedImg, setDisplayedImg] = useState(images[0]);

  const [sizeClicked, setSizeClicked] = useState("");
  const handleSizeClick = (size) => {
    setSizeClicked(size);
  };
  const [colorClicked, setColorClicked] = useState("");
  const handleColorClick = (color) => {
    setColorClicked(color);
  };

  const handleClick = (imgSrc) => {
    setDisplayedImg(imgSrc);
  };

  const [prouductCount, setProuductCount] = useState(1);
  const handleClickMinus = () => {
    prouductCount > 0 && setProuductCount(prouductCount - 1);
  };
  const handleClickAdd = () => {
    setProuductCount(prouductCount + 1);
  };
  //////
  const { handleAddToWishList, wishList, handleAddToCartList, cartList } =
    useContext(WishCartListContext);

  const [isInWishList, setIsInWishList] = useState(
    wishList.some((product) => product.id === title)
  );

  const [isInCartList, setIsInCartList] = useState(
    cartList.some((product) => product.id === title)
  );

  const handleClickWishListButton = () => {
    if (!isInWishList) {
      handleAddToWishList([
        ...wishList,
        {
          id: title,
          images,
          title,
          discountPercentage,
          price,
          review,
          category,
        },
      ]);
    } else {
      handleAddToWishList(wishList.filter((product) => product.id !== title));
    }
    setIsInWishList(!isInWishList);
  };

  const handleClickCartListButton = () => {
    if (!isInCartList) {
      handleAddToCartList([
        ...cartList,
        {
          id: title,
          images,
          title,
          discountPercentage,
          price,
          review,
          category,
        },
      ]);
    } else {
      handleAddToCartList(cartList.filter((product) => product.id !== title));
    }
    setIsInCartList(!isInCartList);
  };
  return (
    <div className="flex flex-col my-10 gap-8 ">
      <div className="text-sm font-normal">
        <Link to="/" className="text-gray-500">
          Home /
        </Link>
        <Link to={`/${category}`} className="text-gray-500">
          {` ${category}`} /
        </Link>
        <Link to={`/${title}`} className="underline">
          {`  ${title}`}
        </Link>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className=" flex gap-2 w-full">
          <div className="img_container flex flex-col gap-2  justify-start w-28">
            {productOnpage.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={title}
                className="w-full object-contain object-center bg-gray-100 cursor-pointer"
                onClick={() => handleClick(img)}
              />
            ))}
          </div>
          <div className="w-full">
            <div className="display">
              <img
                src={displayedImg}
                alt="displayed-img"
                className="bg-gray-100 w-full h-full object-contain object-center"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 w-full">
          <h2 className="font-semibold text-xl">{title}</h2>
          <div className="flex gap-2">
            <div className="flex gap-1">
              <svg
                width="16"
                height="15"
                viewBox="0 0 16 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.673 7.17173C15.7437 6.36184 15.1709 4.65517 13.8284 4.65517H11.3992C10.7853 4.65517 10.243 4.25521 10.0617 3.66868L9.33754 1.32637C8.9309 0.0110567 7.0691 0.0110564 6.66246 1.32637L5.93832 3.66868C5.75699 4.25521 5.21469 4.65517 4.60078 4.65517H2.12961C0.791419 4.65517 0.215919 6.35274 1.27822 7.16654L3.39469 8.78792C3.85885 9.1435 4.05314 9.75008 3.88196 10.3092L3.11296 12.8207C2.71416 14.1232 4.22167 15.1704 5.30301 14.342L7.14861 12.9281C7.65097 12.5432 8.34903 12.5432 8.85139 12.9281L10.6807 14.3295C11.7636 15.159 13.2725 14.1079 12.8696 12.8046L12.09 10.2827C11.9159 9.71975 12.113 9.10809 12.5829 8.75263L14.673 7.17173Z"
                  fill="#FFAD33"
                />
              </svg>
              <svg
                width="16"
                height="15"
                viewBox="0 0 16 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.673 7.17173C15.7437 6.36184 15.1709 4.65517 13.8284 4.65517H11.3992C10.7853 4.65517 10.243 4.25521 10.0617 3.66868L9.33754 1.32637C8.9309 0.0110567 7.0691 0.0110564 6.66246 1.32637L5.93832 3.66868C5.75699 4.25521 5.21469 4.65517 4.60078 4.65517H2.12961C0.791419 4.65517 0.215919 6.35274 1.27822 7.16654L3.39469 8.78792C3.85885 9.1435 4.05314 9.75008 3.88196 10.3092L3.11296 12.8207C2.71416 14.1232 4.22167 15.1704 5.30301 14.342L7.14861 12.9281C7.65097 12.5432 8.34903 12.5432 8.85139 12.9281L10.6807 14.3295C11.7636 15.159 13.2725 14.1079 12.8696 12.8046L12.09 10.2827C11.9159 9.71975 12.113 9.10809 12.5829 8.75263L14.673 7.17173Z"
                  fill="#FFAD33"
                />
              </svg>
              <svg
                width="16"
                height="15"
                viewBox="0 0 16 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.673 7.17173C15.7437 6.36184 15.1709 4.65517 13.8284 4.65517H11.3992C10.7853 4.65517 10.243 4.25521 10.0617 3.66868L9.33754 1.32637C8.9309 0.0110567 7.0691 0.0110564 6.66246 1.32637L5.93832 3.66868C5.75699 4.25521 5.21469 4.65517 4.60078 4.65517H2.12961C0.791419 4.65517 0.215919 6.35274 1.27822 7.16654L3.39469 8.78792C3.85885 9.1435 4.05314 9.75008 3.88196 10.3092L3.11296 12.8207C2.71416 14.1232 4.22167 15.1704 5.30301 14.342L7.14861 12.9281C7.65097 12.5432 8.34903 12.5432 8.85139 12.9281L10.6807 14.3295C11.7636 15.159 13.2725 14.1079 12.8696 12.8046L12.09 10.2827C11.9159 9.71975 12.113 9.10809 12.5829 8.75263L14.673 7.17173Z"
                  fill="#FFAD33"
                />
              </svg>
              <svg
                width="16"
                height="15"
                viewBox="0 0 16 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.673 7.17173C15.7437 6.36184 15.1709 4.65517 13.8284 4.65517H11.3992C10.7853 4.65517 10.243 4.25521 10.0617 3.66868L9.33754 1.32637C8.9309 0.0110567 7.0691 0.0110564 6.66246 1.32637L5.93832 3.66868C5.75699 4.25521 5.21469 4.65517 4.60078 4.65517H2.12961C0.791419 4.65517 0.215919 6.35274 1.27822 7.16654L3.39469 8.78792C3.85885 9.1435 4.05314 9.75008 3.88196 10.3092L3.11296 12.8207C2.71416 14.1232 4.22167 15.1704 5.30301 14.342L7.14861 12.9281C7.65097 12.5432 8.34903 12.5432 8.85139 12.9281L10.6807 14.3295C11.7636 15.159 13.2725 14.1079 12.8696 12.8046L12.09 10.2827C11.9159 9.71975 12.113 9.10809 12.5829 8.75263L14.673 7.17173Z"
                  fill="gray"
                />
              </svg>
            </div>
            <p>({review} Review)</p>
            <p className="text-green-500 text-xs">{`|  ${
              stock > 0 ? "  In Stock" : "Not Available"
            }`}</p>
          </div>
          <p>{description}</p>
          <span className="w-full h-[2px] bg-gray-400 my-2"></span>
          <div className="color flex gap-1 items-center">
            <span>Colors:</span>
            <div className="flex gap-2 ml-5 ">
              {colors.map((color) => (
                <button
                  className={`w-4 h-4 ${color} rounded-full ${
                    colorClicked === color
                      ? "border-[1px] border-gray-900 border-solid w-[18px] h-[18px]"
                      : ""
                  }`}
                  key={color}
                  onClick={() => handleColorClick(color)}
                ></button>
              ))}
            </div>
          </div>
          <div className="size flex items-center">
            <span>Size:</span>
            <div className="flex gap-2 ml-5 text-xs">
              {Size.map((size) => (
                <button
                  key={id}
                  className={`p-1 rounded border-gray-400 border-solid border-2 w-8 h-8 hover:border-secondary
                    transition-colors duration-200 ${
                      sizeClicked === size
                        ? "bg-secondary border-secondary text-white"
                        : ""
                    }`}
                  onClick={() => handleSizeClick(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          <div className="flex justify-between">
            <div className="count flex  rounded font-medium">
              <button
                className="w-8 h-8 border-solid border-2 border-gray-400 rounded-l hover:bg-secondary hover:border-secondary hover:text-white"
                onClick={handleClickMinus}
              >
                -
              </button>
              <span className="w-10 h-8 border-solid border-y-2 border-gray-400 text-center">
                {prouductCount}
              </span>
              <button
                className="w-8 h-8 border-solid -2 border-2 border-gray-400 rounded-r font-medium hover:bg-secondary hover:border-secondary hover:text-white"
                onClick={handleClickAdd}
              >
                +
              </button>
            </div>

            <button
              className="cartBtn w-24 h-8 border-solid border-2 bg-secondary text-white border-secondary rounded 
                         hover:bg-transparent hover:border-gray-400 hover:text-gray-700"
              onClick={() =>
                handleClickCartListButton(
                  title,
                  images,
                  title,
                  discountPercentage,
                  price,
                  review,
                  category
                )
              }
            >
              Buy
            </button>
            <button
              className="wishBtn svg_container border border-gray-400 border-solid h-8 rounded"
              onClick={() =>
                handleClickWishListButton(
                  title,
                  images,
                  title,
                  discountPercentage,
                  price,
                  review,
                  category
                )
              }
            >
              <svg
                className={` hover_svg ${
                  isInWishList ? "fill-secondary" : "fill-none"
                }
                `}
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className={`hover_svg_path ${
                    isInWishList ? "stroke-white" : "stroke-black"
                  } `}
                  d="M11 7C8.239 7 6 9.216 6 11.95C6 14.157 6.875 19.395 15.488 24.69C15.6423 24.7839 15.8194 24.8335 16 24.8335C16.1806 24.8335 16.3577 24.7839 16.512 24.69C25.125 19.395 26 14.157 26 11.95C26 9.216 23.761 7 21 7C18.239 7 16 10 16 10C16 10 13.761 7 11 7Z"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          <div className="flex flex-col border border-gray-400 border-solid  ">
            <div className="flex gap-2 items-center p-5">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_261_4843)">
                  <path
                    d="M11.6673 31.6667C13.5083 31.6667 15.0007 30.1743 15.0007 28.3333C15.0007 26.4924 13.5083 25 11.6673 25C9.82637 25 8.33398 26.4924 8.33398 28.3333C8.33398 30.1743 9.82637 31.6667 11.6673 31.6667Z"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M28.3333 31.6667C30.1743 31.6667 31.6667 30.1743 31.6667 28.3333C31.6667 26.4924 30.1743 25 28.3333 25C26.4924 25 25 26.4924 25 28.3333C25 30.1743 26.4924 31.6667 28.3333 31.6667Z"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.33398 28.3335H7.00065C5.89608 28.3335 5.00065 27.4381 5.00065 26.3335V21.6668M3.33398 8.3335H19.6673C20.7719 8.3335 21.6673 9.22893 21.6673 10.3335V28.3335M15.0007 28.3335H25.0007M31.6673 28.3335H33.0007C34.1052 28.3335 35.0007 27.4381 35.0007 26.3335V18.3335M35.0007 18.3335H21.6673M35.0007 18.3335L30.5833 10.9712C30.2218 10.3688 29.5708 10.0002 28.8683 10.0002H21.6673"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 28H6.66667C5.5621 28 4.66667 27.1046 4.66667 26V21.3333M3 8H19.3333C20.4379 8 21.3333 8.89543 21.3333 10V28M15 28H24.6667M32 28H32.6667C33.7712 28 34.6667 27.1046 34.6667 26V18M34.6667 18H21.3333M34.6667 18L30.2493 10.6377C29.8878 10.0353 29.2368 9.66667 28.5343 9.66667H21.3333"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5 11.8182H11.6667"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M1.81836 15.4545H8.48503"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5 19.0909H11.6667"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_261_4843">
                    <rect width="40" height="40" fill="white" />
                  </clipPath>
                </defs>
              </svg>

              <div>
                <h2 className="font-medium">Free Delivery</h2>
                <p>Enter your postal code for Delivery Availability</p>
              </div>
            </div>

            <div className="flex gap-2 items-center p-5  border-gray-400 border-t border-solid">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_261_4865)">
                  <path
                    d="M33.3327 18.3334C32.9251 15.4004 31.5645 12.6828 29.4604 10.5992C27.3564 8.51557 24.6256 7.18155 21.6888 6.80261C18.752 6.42366 15.7721 7.02082 13.208 8.5021C10.644 9.98337 8.6381 12.2666 7.49935 15M6.66602 8.33335V15H13.3327"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6.66602 21.6667C7.07361 24.5997 8.43423 27.3173 10.5383 29.4009C12.6423 31.4845 15.3731 32.8185 18.3099 33.1974C21.2467 33.5764 24.2266 32.9792 26.7907 31.4979C29.3547 30.0167 31.3606 27.7335 32.4994 25M33.3327 31.6667V25H26.666"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_261_4865">
                    <rect width="40" height="40" fill="white" />
                  </clipPath>
                </defs>
              </svg>

              <div>
                <h2 className="font-medium">Return Delivery</h2>
                <p>Free 30 Days Delivery Returns. Details</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center w-full mt-8">
        <div className="flex justify-start items-center gap-3 mb-3">
          <span className="w-5 h-10 bg-secondary inline-block rounded"></span>
          <span className="font-semibold text-secondary">Related Items</span>
        </div>
      </div>
      <RelatedWishListProduct />
    </div>
  );
};
export default Product;
