import { useContext, useRef, useState } from "react";
import { WishCartListContext } from "./WishCartListContext";

const CartProductCard = ({ images, title, price }) => {
  const { handleAddToCartList, setCartList, cartList } =
    useContext(WishCartListContext);
  const [isInCartList, setIsInCartList] = useState(
    cartList.some((product) => product.id === title)
  );

  const inputRef = useRef(null);
  const [inputValue, setInputValue] = useState(1); // i want add quantity in cartList try later

  const handleInputChange = () => {
    const newQuantity = parseInt(inputRef.target.value);
    const updatedCartList = cartList.map((product) => {
      if (product.title === title) {
        product.quantity = newQuantity;
      }
      return product;
    });
    setCartList(updatedCartList);
    setInputValue(newQuantity);
    // setInputValue();
  };
  const handleClickDeleteButton = () => {
    handleAddToCartList(cartList.filter((product) => product.id != title));
    setIsInCartList(!isInCartList);
  };

  return (
    <div
      className={`relative group hover:bg-gray-100 transition-colors duration-200 flex justify-between items-center 
     py-4 text-xs sm-md:text-sm `}
    >
      <div
        className={`flex flex-col w-24 sm-md:flex-row items-center sm-md:w-36 `}
      >
        <button onClick={handleClickDeleteButton}>
          <svg
            className="absolute top-1 left-0 opacity-0 
          group-hover:opacity-100 transition-opacity duration-200"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="12" r="9" fill="#DB4444" />
            <path
              d="M9 15L12 12M15 9L11.9994 12M11.9994 12L9 9M12 12L15 15"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <img
          src={images}
          alt={title}
          className="w-10 object-cover mb-1 md:mr-1"
        />
        <h2>{title}</h2>
      </div>

      <div>
        <p className="w-14">{price}$</p>
        <form action="" className="w-14">
          <input
            ref={inputRef}
            type="number"
            className="w-full border border-solid "
            id="quantity"
            min="0"
            max="1000"
            value={inputValue}
            onChange={handleInputChange}
          />
        </form>
      </div>

      <p className="price w-14">
        {inputRef.current ? parseInt(inputValue) * parseInt(price) : price}$
      </p>
    </div>
  );
};
export default CartProductCard;
