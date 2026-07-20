import { Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../../redux/slices/cartSlice";

const Checkout = () => {

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const cartItems = useSelector(
    (state) => state.cart.cartItems
  );

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");
  const [payment, setPayment] = useState("COD");

  const isLogin = localStorage.getItem("isLogin");

  if (!isLogin) {
    return <Navigate to="/login" />;
  }

  const handlePlaceOrder = () => {

    if (name.trim() === "") {
      alert("Please Enter Name");
      return;
    }

    if (mobile.trim() === "") {
      alert("Please Enter Mobile Number");
      return;
    }

    if (address.trim() === "") {
      alert("Please Enter Address");
      return;
    }

    if (city.trim() === "") {
      alert("Please Enter City");
      return;
    }

    if (pincode.trim() === "") {
      alert("Please Enter Pincode");
      return;
    }

    const orders =
      JSON.parse(localStorage.getItem("orders")) || [];

    orders.push({
      id: Date.now(),
      items: cartItems,
      total: cartItems.reduce(
        (total, item) =>
          total + item.price * item.quantity,
        0
      ),
      name,
      mobile,
      address,
      city,
      pincode,
      payment,
    });

    localStorage.setItem(
      "orders",
      JSON.stringify(orders)
    );

    dispatch(clearCart());

    alert("Order Placed Successfully");

    navigate("/thankyou");

  };

  return (

    <div className="max-w-6xl mx-auto p-8">

      <h1 className="text-4xl font-bold mb-10">
        Checkout
      </h1>

      <div className="grid md:grid-cols-2 gap-10">

        <div>

          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border p-3 rounded-lg mb-4"
          />

          <input
            type="text"
            placeholder="Mobile Number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            className="w-full border p-3 rounded-lg mb-4"
          />

          <textarea
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full border p-3 rounded-lg mb-4"
          />

          <input
            type="text"
            placeholder="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="w-full border p-3 rounded-lg mb-4"
          />

          <input
            type="text"
            placeholder="Pincode"
            value={pincode}
            onChange={(e) => setPincode(e.target.value)}
            className="w-full border p-3 rounded-lg"
          />

          <h2 className="text-2xl font-bold mt-8 mb-4">
            Payment Method
          </h2>

          <label className="block">

            <input
              type="radio"
              value="COD"
              checked={payment === "COD"}
              onChange={(e) => setPayment(e.target.value)}
            />

            <span className="ml-2">
              Cash On Delivery
            </span>

          </label>

          <label className="block mt-2">

            <input
              type="radio"
              value="UPI"
              checked={payment === "UPI"}
              onChange={(e) => setPayment(e.target.value)}
            />

            <span className="ml-2">
              UPI
            </span>

          </label>

          <label className="block mt-2">

            <input
              type="radio"
              value="Card"
              checked={payment === "Card"}
              onChange={(e) => setPayment(e.target.value)}
            />

            <span className="ml-2">
              Credit Card
            </span>

          </label>

        </div>

        <div>

          <h2 className="text-2xl font-bold mb-6">
            Order Summary
          </h2>

          {cartItems.map((item) => (

            <div
              key={item.id}
              className="flex justify-between border-b py-3"
            >

              <p>{item.title}</p>

              <p>
                ₹ {item.price} × {item.quantity}
              </p>

            </div>

          ))}

          <h2 className="text-3xl font-bold mt-8">

            Total : ₹ {

              cartItems.reduce(
                (total, item) =>
                  total + item.price * item.quantity,
                0
              )

            }

          </h2>

          <button
            onClick={handlePlaceOrder}
            className="w-full bg-pink-600 text-white py-3 rounded-lg mt-8 hover:bg-pink-700"
          >
            Place Order
          </button>

        </div>

      </div>

    </div>

  );

};

export default Checkout;