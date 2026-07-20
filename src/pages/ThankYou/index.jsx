import { Link } from "react-router-dom";

const ThankYou = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-pink-50">

      <div className="bg-white shadow-xl rounded-xl p-10 text-center">

        <h1 className="text-5xl mb-5">
          🎉
        </h1>

        <h2 className="text-3xl font-bold text-pink-600">
          Order Placed Successfully
        </h2>

        <p className="mt-4 text-gray-600">
          Thank you for shopping with us.
        </p>

        <Link
          to="/"
          className="inline-block mt-8 bg-pink-600 text-white px-8 py-3 rounded-lg hover:bg-pink-700"
        >
          Continue Shopping
        </Link>

      </div>

    </div>
  );
};

export default ThankYou;