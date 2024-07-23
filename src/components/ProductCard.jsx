import { useContext, useState } from "react";
import { WishCartListContext } from "./WishCartListContext";
import { Link } from "react-router-dom";

const ProductCard = ({
  images,
  title,
  discountPercentage,
  price,
  review,
  deleteButton,
  category,
  stock,
  description,
  shrink,
}) => {
  // console.log(review);
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
          quantity: 1,
        },
      ]);
    } else {
      handleAddToCartList(cartList.filter((product) => product.id !== title));
    }
    setIsInCartList(!isInCartList);
  };

  const handleDeleteWishListButton = () => {
    handleAddToWishList(wishList.filter((product) => product.id !== title));
    setIsInWishList(false);
  };

  return (
    <Link
      to={`/${category}/${title}`}
      state={{
        product: {
          images,
          title,
          discountPercentage,
          price,
          review,
          category,
          description,
          stock,
        },
      }}
    >
      <div
        className={
          shrink
            ? `w-56  border-solid flex flex-col flex-shrink-0`
            : `w-11/12  md:w-56  border-solid`
        }
      >
        <div className="flex justify-center items-center group relative bg-gray-100 h-40 md:h-56 ">
          <img
            src={images[0]}
            alt={title}
            className="object-cover h-5/6 object-center hover:scale-110 hover:shadow-md hover:opacity-95 transition duration-300 ease-in-out"
          />
          <div className="absolute top-1 left-1 py-1 px-3 rounded bg-secondary text-white text-xs  md:text-base">
            {discountPercentage ? `-${discountPercentage}% ` : ""}
          </div>

          <div
            className=" absolute right-1 top-1 flex flex-col gap-2"
            onClick={(event) => {
              event.preventDefault();
            }}
          >
            <button
              className={`wish_List_Delete_Button svg_container ${
                !deleteButton ? "hidden" : ""
              }`}
              onClick={() =>
                handleDeleteWishListButton(
                  images,
                  title,
                  discountPercentage,
                  price,
                  category,
                  review
                )
              }
            >
              <svg
                className="delet_SVG hover_svg"
                width="34"
                height="34"
                viewBox="0 0 34 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  className="hover_svg_circle"
                  cx="17"
                  cy="17"
                  r="17"
                  fill="white"
                />
                <path
                  className="hover_svg_path"
                  d="M25 10.5714H10.3333L11.6667 26H22.3333L23.6667 10.5714H9M17 14.4286V22.1429M20.3333 14.4286L19.6667 22.1429M13.6667 14.4286L14.3333 22.1429M14.3333 10.5714L15 8H19L19.6667 10.5714"
                  stroke="black"
                  strokeWidth="1.56"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <button
              className={`wish_List_Button svg_container ${
                deleteButton ? "hidden" : ""
              } `}
              onClick={() =>
                handleClickWishListButton({
                  images,
                  title,
                  discountPercentage,
                  price,
                  category,
                  review,
                })
              }
            >
              <svg
                className={`hover_svg ${
                  isInWishList ? "fill-secondary" : "fill-none"
                }`}
                width="34"
                height="34"
                viewBox="0 0 34 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  className={`hover_svg_circle ${
                    isInWishList ? "fill-secondary" : "fill-white"
                  }`}
                  cx="17"
                  cy="17"
                  r="17"
                  fill="white"
                />
                <path
                  className={`hover_svg_path ${
                    isInWishList ? "stroke-white" : "stroke-black"
                  }`}
                  d="M13 10C10.7912 10 9 11.7396 9 13.8859C9 15.6185 9.7 19.7305 16.5904 23.8873C16.7138 23.961 16.8555 24 17 24C17.1445 24 17.2862 23.961 17.4096 23.8873C24.3 19.7305 25 15.6185 25 13.8859C25 11.7396 23.2088 10 21 10C18.7912 10 17 12.3551 17 12.3551C17 12.3551 15.2088 10 13 10Z"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <button
              className={`cart_list_button  svg_container ${
                deleteButton ? "hidden" : ""
              }`}
              onClick={() =>
                handleClickCartListButton({
                  images,
                  title,
                  discountPercentage,
                  price,
                  category,
                  review,
                })
              }
            >
              <svg
                className={`hover_svg ${
                  isInCartList ? "fill-secondary" : "fill-none"
                }`}
                width="34"
                height="34"
                viewBox="0 0 34 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  className={`hover_svg_circle ${
                    isInCartList ? "fill-secondary" : "fill-white"
                  }`}
                  cx="17"
                  cy="17"
                  r="17"
                  fill="white"
                />
                <path
                  className={`hover_svg_path ${
                    isInCartList ? "stroke-white" : "stroke-black"
                  }`}
                  d="M26.257 15.962C26.731 16.582 26.731 17.419 26.257 18.038C24.764 19.987 21.182 24 17 24C12.818 24 9.23601 19.987 7.74301 18.038C7.51239 17.7411 7.38721 17.3759 7.38721 17C7.38721 16.6241 7.51239 16.2589 7.74301 15.962C9.23601 14.013 12.818 10 17 10C21.182 10 24.764 14.013 26.257 15.962V15.962Z"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  className={`hover_svg_path ${
                    isInCartList ? "stroke-white" : "stroke-black"
                  }`}
                  d="M17 20C18.6569 20 20 18.6569 20 17C20 15.3431 18.6569 14 17 14C15.3431 14 14 15.3431 14 17C14 18.6569 15.3431 20 17 20Z"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          <div
            className="absolute left-0 right-0 bottom-0"
            onClick={(event) => {
              event.preventDefault();
            }}
          >
            <button
              className="bg-black  text-white text-center w-full
           opacity-0 group-hover:opacity-100 transition-opacity duration-500 cursor-pointer py-2"
            >
              Add to Cart
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-2 mt-3">
          <h2 className="text-sm md:text-lg font-bold mt-2 text-left">
            {title}
          </h2>
          <p className="flex gap-3 text-xs md:text-base">
            <span className="text-gray-600 ">{price}$</span>
            <span className="line-through">
              {discountPercentage
                ? `$ ${(price - (price * discountPercentage) / 100).toFixed(2)}`
                : ""}
            </span>
          </p>
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
            <p className="text-xs md:text-base">({review})</p>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default ProductCard;
