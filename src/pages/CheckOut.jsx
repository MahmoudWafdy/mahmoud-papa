import { useContext } from "react";
import { Link } from "react-router-dom";
import { WishCartListContext } from "../components/WishCartListContext";

const CheckOut = () => {
  const { cartList } = useContext(WishCartListContext);
  const subTotalAll = cartList.reduce((subtotal, cartProduct) => {
    return subtotal + cartProduct.total_Price;
  }, 0);
  const total = parseInt(
    JSON.parse(localStorage.getItem("cartListTotalPrice")),
    10
  );
  const shipping = localStorage.getItem("shipping");
  const appliedCoupon = localStorage.getItem("applyedCoupon");

  return (
    <div className="flex flex-col my-10 gap-8 ">
      <div className="text-sm font-normal">
        <Link to="/" className="text-gray-500">
          Home /
        </Link>
        <Link to={`/account`} className="text-gray-500">
          Account /
        </Link>
        <Link to={`/account/myacount`} className="text-gray-500">
          My Account /
        </Link>
        <Link to={`/`} className="text-gray-500">
          Product /
        </Link>
        <Link to={`/cart`} className="underline">
          View Cart
        </Link>
      </div>

      <div className="flex flex-col md:flex-row gap-5 md:gap-10 lg:gap-16">
        <form className="left_checkout">
          <label htmlFor="firstName" className="text-gray-400">
            First Name<span className="text-secondary">*</span>
          </label>
          <input
            className="bg-gray-200 w-full h-10 rounded outline-none p-2 my-2"
            type="firstName"
            name="firstName"
            id="firstName"
          />
          {/* {errors.email && touched.email && errors.email} */}
          <label htmlFor="companyName" className="text-gray-400 ">
            Company Name<span className="text-secondary">*</span>
          </label>
          <input
            className="bg-gray-200 w-full h-10 rounded outline-none p-2 my-2"
            type="companyName"
            name="companyName"
            id="companyName"
          />
          {/* {errors.password && touched.password && errors.password} */}
          <label htmlFor="streetAdress" className="text-gray-400 ">
            Street Address<span className="text-secondary">*</span>
          </label>
          <input
            className="bg-gray-200 w-full h-10 rounded outline-none p-2 my-2"
            type="streetAdress"
            name="streetAdress"
            id="streetAdress"
          />
          {/* {errors.password && touched.password && errors.password} */}
          <label htmlFor="apartmentFloor" className="text-gray-400  ">
            Apartment Floor,etc (optional)
          </label>
          <input
            className="bg-gray-200 w-full h-10 rounded outline-none p-2 my-2"
            type="apartmentFloor"
            name="apartmentFloor"
            id="apartmentFloor"
          />
          {/* {errors.password && touched.password && errors.password} */}
          <label htmlFor="townCity" className="text-gray-400 ">
            Town/city<span className="text-secondary">*</span>
          </label>
          <input
            className="bg-gray-200 w-full h-10 rounded outline-none p-2 my-2"
            type="townCity"
            name="townCity"
            id="townCity"
          />
          {/* {errors.password && touched.password && errors.password} */}
          <label htmlFor="phonNumber" className="text-gray-400">
            Phone Number<span className="text-secondary">*</span>
          </label>
          <input
            className="bg-gray-200 w-full h-10 rounded outline-none p-2 my-2"
            type="phonNumber"
            name="phonNumber"
            id="phonNumber"
          />
          {/* {errors.password && touched.password && errors.password} */}
          <label htmlFor="email" className="text-gray-400 ">
            Email Address<span className="text-secondary">*</span>
          </label>
          <input
            className="bg-gray-200 w-full h-10 rounded outline-none p-2 my-2"
            type="email"
            name="email"
            id="email"
          />
          <input type="checkbox" id="check" className="mr-3" />
          <label htmlFor="check" className="text-xs">
            Save this information for faster check-out next time
          </label>
        </form>
        <div className="right_checkout">
          {cartList.slice(0, 2).map((product) => (
            <div
              key={product.id}
              className="relative grou flex justify-between items-center py-4 text-xs sm-md:text-sm"
            >
              <div className="flex  flex-row items-center w-52">
                <img
                  src={product.images[0]}
                  alt={product.title}
                  className="w-14 object-cover mb-1 md:mr-1"
                />
                <h2>{product.title}</h2>
              </div>

              <p className="price w-16">{product.price}$</p>
            </div>
          ))}

          <div className="flex justify-between py-2 border-b-2">
            <span>Subtotal</span>
            <span>{subTotalAll.toFixed(2)}$</span>
          </div>
          <div className="flex justify-between py-2 border-b-2">
            <span>Shipping</span>
            <span>{shipping}$</span>
          </div>
          <div className="flex justify-between py-2">
            <span>Total</span>
            <span>{total}$</span>
            {/* <span>{totalPrice}$</span> */}
          </div>
          <form action="" className=" my-5">
            <input
              type="radio"
              id="card"
              name="paymentMethod"
              className="mr-2 mb-5"
            />
            <label
              htmlFor="card"
              className="inline-flex items-center justify-between w-11/12"
            >
              bank
              <div className="inline-flex items-center justify-end">
                <img
                  src="/images/bakash.png"
                  alt="bakash"
                  className="w-10 inline"
                />
                <img src="/images/visa.png" alt="visa" className="h-3 inline" />
                <img
                  src="/images/mastercard.png"
                  alt="mastercard"
                  className="h-3 inline"
                />
                <img
                  src="/images/dfff.png"
                  alt="bakash"
                  className="w-10 inline"
                />
              </div>
            </label>
            <br></br>
            <input
              type="radio"
              id="card"
              name="paymentMethod"
              className="mr-2"
            />
            <label htmlFor="card">Cash on Delivery</label>
          </form>

          <form className="flex justify-between gap-1 sm-md:gap-2 my-2">
            <input
              type="text"
              placeholder="Coupon Code"
              className="w-44 sm-md:w-auto border-solid border-2 rounded outline-none p-2 "
              disabled={appliedCoupon}
            ></input>
            <button
              disabled={appliedCoupon}
              className={`p-2 md:min-w-32 text-sm sm-md:font-medium 
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
            >
              Apply Coupon
            </button>
          </form>
          <button
            type="submit"
            className=" justify-self-start font-medium mt-1 py-2 w-32 mx-auto md:h-12 bg-secondary text-white sm-md:w-40 rounded border-2
                      border-secondary hover:bg-transparent hover:text-gray-700 hover:border-gray-200 transition-all duration-300 "
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};
export default CheckOut;
