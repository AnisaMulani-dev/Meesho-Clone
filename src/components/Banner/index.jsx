const Banner = () => {
  return (
    <section className="bg-gradient-to-r from-pink-100 via-pink-50 to-white">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-2 items-center gap-12">

          {/* Left */}

          <div>

            <span className="bg-red-500 text-white px-5 py-2 rounded-full text-sm font-semibold">
              🔥 NEW ARRIVAL
            </span>

            <h1 className="text-6xl font-extrabold mt-6 leading-tight">

              MEGA

              <span className="text-pink-600 block">
                FASHION SALE
              </span>

            </h1>

            <h2 className="text-5xl font-bold mt-5">

              UP TO

              <span className="text-red-500">
                {" "}70% OFF
              </span>

            </h2>

            <p className="text-gray-600 mt-8 text-lg leading-8">

              Upgrade your wardrobe with the latest
              Dresses, Jewellery, Handbags,
              Beauty Products & Accessories.

            </p>

            <div className="flex gap-5 mt-10">

              <button className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-4 rounded-xl text-lg font-semibold duration-300 shadow-lg">

                🛒 Shop Now

              </button>

              <button className="border-2 border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-white px-8 py-4 rounded-xl text-lg font-semibold duration-300">

                Explore

              </button>

            </div>

            <div className="flex gap-10 mt-12">

              <div>

                <h2 className="text-3xl font-bold text-pink-600">
                  20K+
                </h2>

                <p className="text-gray-500">
                  Happy Customers
                </p>

              </div>

              <div>

                <h2 className="text-3xl font-bold text-pink-600">
                  500+
                </h2>

                <p className="text-gray-500">
                  Premium Brands
                </p>

              </div>

              <div>

                <h2 className="text-3xl font-bold text-pink-600">
                  24/7
                </h2>

                <p className="text-gray-500">
                  Support
                </p>

              </div>

            </div>

          </div>

          {/* Right */}

          <div className="relative flex justify-center">

            <div className="absolute -top-4 -left-4 bg-white rounded-2xl shadow-xl px-5 py-3">

              💎 Premium Jewellery

            </div>

            <img
              src="/fashion-banner.png"
              alt="Fashion Banner"
              className="rounded-[40px] shadow-2xl w-full max-w-xl"
            />

            <div className="absolute bottom-5 right-0 bg-pink-600 text-white rounded-2xl px-6 py-4 shadow-xl">

              <h3 className="font-bold">
                Flat 70% OFF
              </h3>

              <p className="text-sm">
                Limited Time Offer
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Banner;