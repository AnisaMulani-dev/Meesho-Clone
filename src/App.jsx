import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import ProductDetails from "./pages/ProductDetails";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Category from "./pages/Category";
import Footer from "./components/Footer/Footer";
import Search from "./pages/Search";
import ThankYou from "./pages/ThankYou";
import Wishlist from "./pages/Wishlist";
import OrderHistory from "./pages/OrderHistory";
import Profile from "./pages/Profile";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/thankyou" element={<ThankYou />} />
        <Route path="/login" element={<Login />} />
        <Route path="/category/:categoryName" element={<Category />} />
        <Route path="*" element={<NotFound />} />
        <Route
  path="/profile"
  element={<Profile />}
/>
        <Route
  path="/orders"
  element={<OrderHistory />}
/>
        <Route
  path="/wishlist"
  element={<Wishlist />}
/>
        <Route
  path="/search/:keyword"
  element={<Search />}
/>
      </Routes>
      
      <Footer/>
    </>
  );
}

export default App;