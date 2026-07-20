const OrderHistory = () => {

  const orders =
    JSON.parse(localStorage.getItem("orders")) || [];

  return (

    <div className="max-w-6xl mx-auto p-8">

      <h1 className="text-4xl font-bold mb-8">
        Order History
      </h1>

      {orders.length === 0 ? (

        <h2 className="text-2xl">
          No Orders Found
        </h2>

      ) : (

        orders.map((order) => (

          <div
            key={order.id}
            className="border rounded-xl p-6 mb-6 shadow"
          >

            <h2 className="font-bold text-xl mb-3">
              Order ID : {order.id}
            </h2>

            <p>
              <b>Name :</b> {order.name}
            </p>

            <p>
              <b>Mobile :</b> {order.mobile}
            </p>

            <p>
              <b>City :</b> {order.city}
            </p>

            <p>
              <b>Payment :</b> {order.payment}
            </p>

            <h3 className="font-bold mt-4 mb-2">
              Products
            </h3>

            {order.items.map((item) => (

              <div
                key={item.id}
                className="flex justify-between border-b py-2"
              >

                <p>{item.title}</p>

                <p>
                  ₹ {item.price} × {item.quantity}
                </p>

              </div>

            ))}

            <h2 className="text-2xl font-bold mt-4">
              Total : ₹ {order.total}
            </h2>

          </div>

        ))

      )}

    </div>

  );

};

export default OrderHistory;