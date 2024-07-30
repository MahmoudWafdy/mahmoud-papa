/* eslint-disable */

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import Contact from "./pages/Contact";
import About from "./pages/About";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import CategoryPage from "./pages/CategoryPage";
import WishList from "./pages/WishList";
import Account from "./pages/Account";
import Cart from "./pages/Cart";
import { WishCartListProvider } from "./components/WishCartListContext";
import Profile from "./pages/Profile";
import Address from "./pages/Address";
import PaymentOptions from "./pages/PaymentOptions";
import MyReturns from "./pages/MyReturns";
import MyCancelation from "./pages/MyCancelation";
import Product from "./pages/Product";
import CheckOut from "./pages/CheckOut";
import PasswordReset from "./pages/PasswordReset";
import { UserProvider } from "./components/UserContext";

function App() {
  return (
    <UserProvider>
      <WishCartListProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="contact" element={<Contact />} />
              <Route path="about" element={<About />} />
              <Route path="signup" element={<SignUp />} />
              <Route path="login" element={<LogIn />} />
              <Route path="reset-password" element={<PasswordReset />} />
              <Route path="wishlist" element={<WishList />} />
              <Route path="cart" element={<Cart />} />
              <Route path="account" element={<Account />}>
                <Route path="/account/profile" element={<Profile />} />
                <Route path="/account/address" element={<Address />} />
                <Route path="/account/payment" element={<PaymentOptions />} />
                <Route path="/account/myreturns" element={<MyReturns />} />

                <Route
                  path="/account/mycancelation"
                  element={<MyCancelation />}
                />
              </Route>
              <Route path="/checkout" element={<CheckOut />} />

              <Route path="/:category" element={<CategoryPage />} />
              <Route path="/:category/:product" element={<Product />} />

              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </WishCartListProvider>
    </UserProvider>
  );
}

export default App;
