import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { searchProducts } from "../../services/productApi";
import ProductCard from "../../components/ProductCard";

const Search = () => {

  const { keyword } = useParams();

  const [products, setProducts] = useState([]);

  async function loadProducts() {

    const data = await searchProducts(keyword);

    setProducts(data);

  }

  useEffect(() => {

    loadProducts();

  }, [keyword]);

  return (

    <div className="max-w-7xl mx-auto p-6">

      <h1 className="text-3xl font-bold mb-8">
        Search Result : {keyword}
      </h1>

      {
        products.length === 0 ? (

          <h2 className="text-xl font-semibold text-center">
            No Products Found
          </h2>

        ) : (

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

            {products.map((product) => (

              <ProductCard
                key={product.id}
                product={product}
              />

            ))}

          </div>

        )
      }

    </div>

  );

};

export default Search;