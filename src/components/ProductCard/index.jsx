import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice";
import { addToWishlist } from "../../redux/slices/wishlistSlice";

const ProductCard = ({ product }) => {

  const dispatch = useDispatch();

  const handleWishlist = () => {
  dispatch(addToWishlist(product));
};

  const handleAddCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="border rounded-xl p-4 shadow hover:shadow-lg duration-300">

<Link to={`/product/${product.id}`}>

  <img
    src={product.thumbnail}
    alt={product.title}
    className="h-48 w-full object-cover rounded-lg"
  />

  <h2 className="font-bold mt-3">
    {product.title}
  </h2>

</Link>

      <p className="text-pink-600 font-bold mt-2">
        ₹ {product.price}
      </p>
<button
  onClick={handleWishlist}
  className="w-full mt-4 border border-pink-600 text-pink-600 py-2 rounded-lg hover:bg-pink-600 hover:text-white"
>
  ❤️ Add To Wishlist
</button>

      <button
        onClick={handleAddCart}
        className="w-full mt-4 bg-pink-600 text-white py-2 rounded-lg hover:bg-pink-700"
      >
        Add To Cart
      </button>

    </div>
  );
};

export default ProductCard;