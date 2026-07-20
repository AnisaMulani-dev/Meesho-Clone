import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {

  const [search, setSearch] = useState("");

  const navigate = useNavigate();
  const isLogin = localStorage.getItem("isLogin");

  const cartItems = useSelector(
    (state) => state.cart.cartItems
  );
  const wishlistItems = useSelector(
  (state) => state.wishlist.wishlistItems
);

  return (
    <nav className="bg-white shadow-md">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link to="/">
          <h1 className="text-3xl font-bold text-pink-600">
            TrendCart
          </h1>
        </Link>

        {/* Search */}
        <input
          type="text"
          placeholder="Search Products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              navigate(`/search/${search}`);
            }
          }}
          className="border rounded-lg px-4 py-2 w-96 outline-none"
        />

        {/* Right Side */}
        <div className="flex items-center gap-4">

          {
  isLogin ? (

    <button
      onClick={() => {

        localStorage.removeItem("isLogin");

        window.location.reload();

      }}
      className="border px-5 py-2 rounded-lg hover:bg-red-500 hover:text-white transition"
    >
      Logout
    </button>

  ) : (

    <Link
      to="/login"
      className="border px-5 py-2 rounded-lg hover:bg-pink-500 hover:text-white transition"
    >
      Login
    </Link>

  )
}
<Link
  to="/profile"
  className="font-semibold hover:text-pink-600"
>
  👤 Profile
</Link>
<Link
  to="/wishlist"
  className="font-semibold hover:text-pink-600"
>
  ❤️ Wishlist ({wishlistItems.length})
</Link>
        <Link
  to="/orders"
  className="font-semibold hover:text-pink-600"
>
  📦 Orders
</Link> 
         
          <Link
            to="/cart"
            className="font-semibold hover:text-pink-600"
          >
            Cart ({cartItems.length})
          </Link>

        </div>

      </div>

    </nav>
  );
};

export default Navbar;