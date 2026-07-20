import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCategories } from "../../services/categoryApi";
import Banner from "../../components/Banner";

const Home = () => {

  const [categories, setCategories] = useState([]);

  const loadCategories = async () => {
    const data = await getCategories();
    setCategories(data);
  };

  useEffect(() => {
    loadCategories();
  }, []);

  return (
    <>
      <Banner />

      <div className="max-w-7xl mx-auto px-6 py-8">

        <h1 className="text-4xl font-bold mb-10">
          Shop By Categories
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">

          {categories.map((item) => (
            <Link
              key={item}
              to={`/category/${item}`}
              className="bg-white border rounded-xl h-28 flex items-center justify-center font-semibold shadow-sm hover:shadow-lg hover:bg-pink-500 hover:text-white duration-300"
            >
              {item}
            </Link>
          ))}

        </div>

      </div>
    </>
  );
};

export default Home;