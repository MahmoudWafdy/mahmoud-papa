import { useContext } from "react";
import { WishCartListContext } from "../components/WishCartListContext";
import ProductCard from "../components/ProductCard";
import RelatedWishListProduct from "../components/RelatedWishListProducts";

const WishList = () => {
  const { wishList, cartList, handleAddToCartList, wishListCount } =
    useContext(WishCartListContext);
  const handleClickButton = () => {
    if (wishList.length > 0) {
      wishList.forEach((wishListProduct) => {
        const isInCartList = cartList.some(
          (cartProduct) => cartProduct.id === wishListProduct.id
        );
        if (!isInCartList) {
          handleAddToCartList([...cartList, wishListProduct]);
        }
      });
    }
  };

  return (
    <div className="wishList  w-full my-10 ">
      <div className="flex justify-between items-center w-full">
        <div>
          <span className="text-xl">WishList</span>
          <span className="text-xl">{`(${wishListCount})`}</span>
        </div>
        <button
          className="w-36 font-medium h-10 md:h-14 md:w-60 border border-solid border-gray-300 
        hover:bg-secondary hover:text-white transition-all duration-300 "
          onClick={handleClickButton}
        >
          Move All to Bag
        </button>
      </div>

      <div className="my-20 grid  grid-cols-2 gap-2 sm-md:grid-cols-3 lg:grid-cols-5">
        {wishList?.length === 0 ? (
          <div className="flex justify-center font-semibold text-secondary w-full h-7 col-span-3 ">
            <span>There is no product</span>
          </div>
        ) : (
          wishList?.map((product) => (
            <ProductCard
              key={product?.id}
              title={product?.title}
              images={product?.images}
              price={product?.price}
              discountPercentage={product?.discountPercentage}
              review={product?.reviews?.length}
              category={product.category}
              deleteButton={"true"}
            />
          ))
        )}
      </div>

      <div className="flex justify-between items-center w-full mt-8">
        <div className="flex justify-start items-center gap-3 mb-3">
          <span className="w-5 h-10 bg-secondary inline-block rounded"></span>
          <span className="font-semibold text-secondary">Just For You</span>
        </div>
        <button className="font-medium h-12 w-40 border border-solid border-gray-300 hover:bg-secondary hover:text-white transition-all duration-300 ">
          See All
        </button>
      </div>
      <RelatedWishListProduct />
    </div>
  );
};
export default WishList;
