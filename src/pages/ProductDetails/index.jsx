import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice";
import {
  getProductDetails,
  getAllProducts,
} from "../../services/productApi";
import ProductCard from "../../components/ProductCard";

const ProductDetails = () => {

  const { id } = useParams();

  const dispatch = useDispatch();

  const [product, setProduct] = useState(null);

  const [relatedProducts, setRelatedProducts] = useState([]);

  async function loadProduct() {

    const data = await getProductDetails(id);

    setProduct(data);

    const allProducts = await getAllProducts();

    const related = allProducts.filter(
      (item) =>
        item.category === data.category &&
        item.id !== data.id
    );

    setRelatedProducts(related);

  }

  useEffect(() => {

    loadProduct();

  }, [id]);

  if (!product) {

    return <h1>Loading...</h1>;

  }

  return (

    <div className="max-w-6xl mx-auto p-8">

      <div className="grid md:grid-cols-2 gap-10">

        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full rounded-xl"
        />

        <div>

          <h1 className="text-4xl font-bold">
            {product.title}
          </h1>

          <p className="text-pink-600 text-3xl font-bold mt-5">
            ₹ {product.price}
          </p>

          <p className="mt-5">
            ⭐ {product.rating}
          </p>

          <p className="mt-5 text-gray-600">
            {product.description}
          </p>

          <button
            onClick={() => dispatch(addToCart(product))}
            className="mt-8 bg-pink-600 text-white px-8 py-3 rounded-lg hover:bg-pink-700"
          >
            Add To Cart
          </button>

        </div>

      </div>

      <h2 className="text-3xl font-bold mt-16 mb-8">
        Related Products
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

        {relatedProducts.slice(0, 4).map((item) => (

          <ProductCard
            key={item.id}
            product={item}
          />

        ))}

      </div>

    </div>

  );

};

export default ProductDetails;