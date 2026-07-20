import { useSelector, useDispatch } from "react-redux";
import { Navigate, Link } from "react-router-dom";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../../redux/slices/cartSlice";

const Cart = () => {

  const isLogin = localStorage.getItem("isLogin");

  const cartItems = useSelector((state) => state.cart.cartItems);

  const dispatch = useDispatch();

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  if (!isLogin) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="max-w-7xl mx-auto p-6">

      <h1 className="text-3xl font-bold mb-8">
        Shopping Cart
      </h1>

      {cartItems.length === 0 ? (
        <h2 className="text-xl font-semibold">
          Your Cart Is Empty
        </h2>
      ) : (
        <>
          <div className="space-y-5">

            {cartItems.map((item) => (

              <div
                key={item.id}
                className="flex items-center justify-between border rounded-xl p-4 shadow hover:shadow-lg"
              >

                <div className="flex items-center gap-4">

                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-24 h-24 object-cover rounded-lg"
                  />

                  <div>

                    <h2 className="font-bold text-lg">
                      {item.title}
                    </h2>

                    <p className="text-pink-600 font-bold">
                      ₹ {item.price}
                    </p>

                    <div className="flex items-center gap-3 mt-3">

                      <button
                        onClick={() => dispatch(decreaseQuantity(item.id))}
                        className="bg-gray-300 px-3 py-1 rounded"
                      >
                        -
                      </button>

                      <span className="font-bold">
                        {item.quantity}
                      </span>

                      <button
                        onClick={() => dispatch(increaseQuantity(item.id))}
                        className="bg-pink-600 text-white px-3 py-1 rounded"
                      >
                        +
                      </button>

                    </div>

                    <button
                      onClick={() => dispatch(removeFromCart(item.id))}
                      className="mt-3 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                    >
                      Remove
                    </button>

                  </div>

                </div>

              </div>

            ))}

          </div>

          <div className="mt-8 text-right">

            <h2 className="text-2xl font-bold">
              Total : ₹ {totalPrice.toFixed(2)}
            </h2>

            <Link
              to="/checkout"
              className="inline-block mt-5 bg-pink-600 text-white px-8 py-3 rounded-lg rounded-lg hover:bg-pink-700"
            >
              Proceed To Checkout
            </Link>

          </div>

        </>
      )}

    </div>
  );

};

export default Cart;