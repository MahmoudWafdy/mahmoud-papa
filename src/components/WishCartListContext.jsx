import { createContext, useEffect, useState } from "react";

const WishCartListContext = createContext();

const WishCartListProvider = ({ children }) => {
  //wishList
  const [wishList, setWishlist] = useState([]);
  const [wishListCount, setWishListCount] = useState(0);
  //cartList
  const [cartList, setCartlist] = useState([]);
  const [cartListCount, setCartListCount] = useState(0);
  //wishList

  const handleAddToWishList = (updatedWishList) => {
    setWishlist(updatedWishList);
    setWishListCount(updatedWishList.length);
    localStorage.setItem("wishList", JSON.stringify(updatedWishList));
    localStorage.setItem("wishListCount", updatedWishList.length);
  };
  //cartList

  const handleAddToCartList = (updatedCartList) => {
    setCartlist(updatedCartList);
    setCartListCount(updatedCartList.length);
    localStorage.setItem("cartList", JSON.stringify(updatedCartList));
    localStorage.setItem("cartListCount", updatedCartList.length);
  };

  useEffect(() => {
    //wishlist
    const storedWishListCount = localStorage.getItem("wishListCount");
    const storedWishList = localStorage.getItem("wishList");

    //cartList
    const storedCartListCount = localStorage.getItem("cartListCount");
    const storedCartList = localStorage.getItem("cartList");

    //wishList
    if (storedWishListCount) {
      setWishListCount(parseInt(storedWishListCount));
    }
    if (storedWishList) {
      setWishlist(JSON.parse(storedWishList));
    }

    //cartList
    if (storedCartListCount) {
      setCartListCount(parseInt(storedCartListCount));
    }
    if (storedCartList) {
      setCartlist(JSON.parse(storedCartList));
    }
  }, []);

  return (
    <WishCartListContext.Provider
      value={{
        wishList,
        handleAddToWishList,
        setWishListCount,
        wishListCount,

        cartList,
        setCartlist,
        handleAddToCartList,
        setCartListCount,
        cartListCount,
      }}
    >
      {children}
    </WishCartListContext.Provider>
  );
};

export { WishCartListContext, WishCartListProvider };
