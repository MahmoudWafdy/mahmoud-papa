import { createContext, useEffect, useState } from "react";

const CartListContext = createContext();

const CartListProvider = ({ children }) => {
  const [CartList, setCartlist] = useState([]);
  const [CartListCount, setCartListCount] = useState(0);

  const handleAddToCartList = (updatedCartList) => {
    setCartlist(updatedCartList);
    setCartListCount(updatedCartList.length);
    localStorage.setItem("CartList", JSON.stringify(updatedCartList));
    localStorage.setItem("CartListCount", updatedCartList.length);
  };

  useEffect(() => {
    const storedCount = localStorage.getItem("CartListCount");
    const storedCartList = localStorage.getItem("CartList");

    if (storedCount) {
      setCartListCount(parseInt(storedCount));
    }
    if (storedCartList) {
      setCartlist(JSON.parse(storedCartList));
    }
  }, []);

  return (
    <CartListContext.Provider
      value={{ CartList, handleAddToCartList, setCartListCount, CartListCount }}
    >
      {children}
    </CartListContext.Provider>
  );
};

export { CartListContext, CartListProvider };
