import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCategoryProducts } from "../../services/categoryApi";
import ProductCard from "../../components/ProductCard";

const Category = () => {

  const { categoryName } = useParams();

  const [products, setProducts] = useState([]);

  const [sort, setSort] = useState("");
  const [rating, setRating] = useState("");
  const [stock, setStock] = useState("");

  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const [brand, setBrand] = useState("");
  const [discount, setDiscount] = useState("");

  const [page, setPage] = useState(1);

  const productsPerPage = 8;

  async function loadProducts() {
    const data = await getCategoryProducts(categoryName);
    setProducts(data);
  }

  useEffect(() => {
    loadProducts();
    setPage(1);
  }, [categoryName]);

  let filteredProducts = [...products];

  // Sort
  if (sort === "low") {
    filteredProducts.sort((a, b) => a.price - b.price);
  }

  if (sort === "high") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  // Rating
  if (rating !== "") {
    filteredProducts = filteredProducts.filter(
      (item) => item.rating >= Number(rating)
    );
  }

  // Stock
  if (stock === "instock") {
    filteredProducts = filteredProducts.filter(
      (item) => item.stock > 0
    );
  }

  // Min Price
  if (minPrice !== "") {
    filteredProducts = filteredProducts.filter(
      (item) => item.price >= Number(minPrice)
    );
  }

  // Max Price
  if (maxPrice !== "") {
    filteredProducts = filteredProducts.filter(
      (item) => item.price <= Number(maxPrice)
    );
  }

  // Brand
  if (brand !== "") {
    filteredProducts = filteredProducts.filter(
      (item) => item.brand === brand
    );
  }

  // Discount
  if (discount !== "") {
    filteredProducts = filteredProducts.filter(
      (item) => item.discountPercentage >= Number(discount)
    );
  }

  const totalPages = Math.ceil(
    filteredProducts.length / productsPerPage
  );

  const startIndex = (page - 1) * productsPerPage;

  const endIndex = startIndex + productsPerPage;

  return (
    <div className="max-w-7xl mx-auto p-6">

      <h1 className="text-3xl font-bold mb-8 capitalize">
        {categoryName}
      </h1>

      <div className="flex gap-4 mb-8 flex-wrap">

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="border p-2 rounded-lg"
        >
          <option value="">Sort By</option>
          <option value="low">Price Low To High</option>
          <option value="high">Price High To Low</option>
        </select>

        <select
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          className="border p-2 rounded-lg"
        >
          <option value="">Rating</option>
          <option value="4">4★ & Above</option>
          <option value="3">3★ & Above</option>
        </select>

        <select
          value={stock}
          onChange={(e) => setStock(e.target.value)}
          className="border p-2 rounded-lg"
        >
          <option value="">Stock</option>
          <option value="instock">In Stock</option>
        </select>

        <input
          type="number"
          placeholder="Min Price"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          className="border p-2 rounded-lg"
        />

        <input
          type="number"
          placeholder="Max Price"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          className="border p-2 rounded-lg"
        />

        <select
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
          className="border p-2 rounded-lg"
        >
          <option value="">Brand</option>

          {[...new Set(products.map((item) => item.brand))].map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>

        <select
          value={discount}
          onChange={(e) => setDiscount(e.target.value)}
          className="border p-2 rounded-lg"
        >
          <option value="">Discount</option>
          <option value="5">5% & Above</option>
          <option value="10">10% & Above</option>
          <option value="15">15% & Above</option>
        </select>

        <button
          onClick={() => {
            setSort("");
            setRating("");
            setStock("");
            setMinPrice("");
            setMaxPrice("");
            setBrand("");
            setDiscount("");
            setPage(1);
          }}
          className="bg-gray-600 text-white px-5 py-2 rounded-lg hover:bg-gray-700"
        >
          Reset Filters
        </button>

      </div>

      {filteredProducts.length === 0 ? (

        <h2 className="text-2xl font-bold text-center mt-10">
          No Products Found
        </h2>

      ) : (

        <>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

            {filteredProducts
              .slice(startIndex, endIndex)
              .map((product) => (

                <ProductCard
                  key={product.id}
                  product={product}
                />

              ))}

          </div>

          <div className="flex justify-center gap-4 mt-8">

            <button
              disabled={page === 1}
              onClick={() => setPage(page - 1)}
              className="bg-gray-600 text-white px-6 py-2 rounded disabled:opacity-50"
            >
              Previous
            </button>

            <span className="font-bold text-xl">
              {page} / {totalPages || 1}
            </span>

            <button
              disabled={page === totalPages || totalPages === 0}
              onClick={() => setPage(page + 1)}
              className="bg-pink-600 text-white px-6 py-2 rounded disabled:opacity-50"
            >
              Next
            </button>

          </div>

        </>

      )}

    </div>
  );

};

export default Category;