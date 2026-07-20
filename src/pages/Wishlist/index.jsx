import { useSelector, useDispatch } from "react-redux";
import { removeFromWishlist } from "../../redux/slices/wishlistSlice";

const Wishlist = () => {

  const wishlistItems = useSelector(
    (state) => state.wishlist.wishlistItems
  );

  const dispatch = useDispatch();

  return (

    <div className="max-w-7xl mx-auto p-6">

      <h1 className="text-3xl font-bold mb-8">
        My Wishlist
      </h1>

      {
        wishlistItems.length === 0 ? (

          <h2 className="text-xl font-semibold">
            Wishlist Is Empty
          </h2>

        ) : (

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

            {
              wishlistItems.map((item) => (

                <div
                  key={item.id}
                  className="border rounded-xl p-4 shadow"
                >

                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="h-48 w-full object-cover rounded-lg"
                  />

                  <h2 className="font-bold mt-3">
                    {item.title}
                  </h2>

                  <p className="text-pink-600 font-bold mt-2">
                    ₹ {item.price}
                  </p>

                  <button
                    onClick={() => dispatch(removeFromWishlist(item.id))}
                    className="w-full mt-4 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600"
                  >
                    Remove
                  </button>

                </div>

              ))
            }

          </div>

        )
      }

    </div>

  );

};

export default Wishlist;