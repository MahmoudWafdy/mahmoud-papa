import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { WishCartListContext } from "../components/WishCartListContext";

const Cart = () => {
  const coupon = [{ MESS10: 10 }, { MESS15: 15 }];
  const shipping = 15;
  const appliedCoupon = localStorage.getItem("applyedCoupon");

  const { cartList, handleAddToCartList, setCartlist } =
    useContext(WishCartListContext);
  const [isInCartList, setIsInCartList] = useState(
    cartList.some((product) => product.id === product.title)
  );

  const handleInputChange = (product, event) => {
    const newQuantity = parseInt(event.target.value, 10);
    const totalPrice = newQuantity * product.price;
    const updatedProduct = {
      ...product,
      quantity: newQuantity,
      total_Price: totalPrice,
    };

    const updatedCartList = cartList.map((cartProduct) => {
      if (cartProduct.title === product.title) {
        return updatedProduct;
      }
      return cartProduct;
    });
    setCartlist(updatedCartList);
    // Update localStorage
    localStorage.setItem("cartList", JSON.stringify(updatedCartList));
    localStorage.setItem("shipping", JSON.stringify(shipping));
  };

  const handleClickDeleteButton = (product) => {
    handleAddToCartList(
      cartList.filter((ProductCart) => ProductCart.id != product.title)
    );
    setIsInCartList(!isInCartList);
  };

  const hanleClickbuttonRefresh = () => {
    handleAddToCartList([...cartList]);
  };

  let subTotalAll = cartList.reduce((total, CartProduct) => {
    return total + CartProduct.total_Price;
  }, 0); //true

  const [finalTotal, setFinalTotal] = useState(0);

  const handleCouponClickedButton = (e) => {
    e.preventDefault();
    const couponinput = document.querySelector('input[id="coupon"]').value;
    const couponDiscount = coupon.find((couponItem) => {
      return Object.keys(couponItem)[0] === couponinput;
    });

    if (couponDiscount) {
      const discountAmount =
        (finalTotal.toFixed(2) *
          couponDiscount[Object.keys(couponDiscount)[0]]) /
        100;

      setFinalTotal(finalTotal.toFixed(2) - discountAmount);
      localStorage.setItem(
        "cartListTotalPrice",
        JSON.stringify(finalTotal.toFixed(2))
      );
      localStorage.setItem("applyedCoupon", "true");
      localStorage.setItem("applyedCouponCode", couponinput);
    } else {
      document.querySelector("#coupon-error").textContent =
        "Invalid coupon code";
    }
  };
  const getAppliedCouponCode = localStorage.getItem("applyedCouponCode");
  const couponDiscount = coupon.find((couponItem) => {
    return Object.keys(couponItem)[0] === getAppliedCouponCode;
  });
  const discountPercentage = couponDiscount
    ? couponDiscount[getAppliedCouponCode]
    : 0;
  const discountAmount = (finalTotal.toFixed(2) * discountPercentage) / 100;

  useEffect(() => {
    setFinalTotal(
      subTotalAll.toFixed(2) + (shipping ? shipping : 0) - discountAmount
    );
    localStorage.setItem(
      "cartListTotalPrice",
      JSON.stringify(finalTotal.toFixed(2))
    );
  }, [cartList, discountPercentage, shipping, finalTotal]); //true

  return (
    <div className="cart  my-10">
      <div className="text-sm font-normal">
        <Link to="/" className="text-gray-500">
          Home /
        </Link>
        <Link to="/cart" className="">
          Cart
        </Link>
      </div>

      <div className="flex flex-col gap-5 my-10 ">
        <div className="sm-md:px-8">
          <ul className="flex justify-between shadow py-3 ">
            <li className="w-24 sm-md:w-36">Product</li>
            <li className="w-14">Price</li>
            <li className="w-14">Quantity</li>
            <li className="w-14">Subtotal</li>
          </ul>

          <div className="cart_product">
            {cartList.length === 0 ? (
              <div className="flex justify-center font-semibold text-secondary w-full h-7 col-span-3 my-10 ">
                <span>There is no product</span>
              </div>
            ) : (
              cartList.map((product) => (
                <div
                  className={`relative group hover:bg-gray-100 transition-colors duration-200 flex justify-between 
                    items-center py-4 text-xs sm-md:text-sm `}
                  key={product.id}
                >
                  <div
                    className={`flex flex-col w-24 sm-md:flex-row items-center sm-md:w-36 `}
                  >
                    <button onClick={() => handleClickDeleteButton(product)}>
                      <svg
                        className="absolute top-1 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
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
                      src={product.images[0]}
                      alt={product.title}
                      className="w-10 object-cover mb-1 md:mr-1"
                    />
                    <h2>{product.title}</h2>
                  </div>

                  <p className="w-14">{product.price}$</p>
                  <form action="" className="w-14">
                    <input
                      type="number"
                      className="w-full border border-solid "
                      id="quantity"
                      min="0"
                      max="1000"
                      defaultValue={product.quantity}
                      onChange={(event) => handleInputChange(product, event)}
                    />
                  </form>

                  <p className="price w-14">{product.total_Price}$</p>
                </div>
              ))
            )}
          </div>
        </div>

        <div className="flex justify-between items-center ">
          <Link to={"/"}>
            <button
              className="font-medium p-2 w-36  md:h-12  sm-md:w-40 border border-solid border-gray-300 
          hover:bg-secondary hover:text-white transition-all duration-300 "
            >
              Return To Shop
            </button>
          </Link>

          <button
            className="font-normal sm-md:font-medium p-2 w-32 sm-md:h-12 sm-md:w-40 border border-solid border-gray-300 
          hover:bg-secondary hover:text-white transition-all duration-300 "
            onClick={hanleClickbuttonRefresh}
          >
            Update Cart
          </button>
        </div>

        <div className="relative flex flex-col sm-md:flex-row gap-2 justify-between my-12 py-5">
          <form className=" flex gap-1 justify-between sm-md:gap-2 sm-md:justify-start ">
            <span
              id="coupon-error"
              className={`text-secondary absolute top-0 left-0 ${
                appliedCoupon ? "hidden" : ""
              }`}
            ></span>

            <input
              type="text"
              id="coupon"
              placeholder={`${
                appliedCoupon
                  ? getAppliedCouponCode
                  : "Coupon Code for ex: MESS10"
              }`}
              disabled={appliedCoupon}
              className="border border-spacing-2 h-12 w-36 sm-md:w-60 p-2"
            ></input>

            <button
              className={`font-medium py-2 w-32  md:h-12 bg-secondary text-white sm-md:w-40 rounded
              ${
                appliedCoupon
                  ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                  : "bg-secondary text-white"
              }
              rounded transition-all duration-300 
              ${
                appliedCoupon
                  ? ""
                  : "hover:bg-white hover:text-black hover:border-2 hover:border-solid"
              }`}
              onClick={handleCouponClickedButton}
            >
              Apply Coupon
            </button>
          </form>

          <div className="flex flex-col justify-center border-2 border-solid p-2 sm-md:w-72 ">
            <p className="font-medium mb-4">Cart Total</p>
            <div className="flex justify-between py-2 border-b-2">
              <span>Subtotal</span>
              <span>{subTotalAll.toFixed(2)}$</span>
            </div>
            <div className="flex justify-between py-2 border-b-2">
              <span>Shipping</span>
              <span>{shipping ? shipping : "Free"}$</span>
            </div>
            <div className="flex justify-between py-2">
              <span>Total</span>
              <span>{finalTotal.toFixed(2)}$</span>
            </div>
            {cartList.length > 0 ? (
              <Link to="/checkout" className="mx-auto">
                <button
                  className="font-medium mt-1 py-2 w-48 mx-auto md:h-12 bg-secondary text-white sm-md:w-40 rounded
                     hover:bg-white hover:text-black transition-all duration-300"
                >
                  Procees to checkout
                </button>
              </Link>
            ) : (
              <button className="font-medium mt-1 py-2 w-48 mx-auto md:h-12 bg-gray-200 text-gray-500 cursor-not-allowed sm-md:w-40 rounded">
                Procees to checkout
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cart;
