import { useEffect, useState } from "react";
import api from "../../services/api";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await api.get("/products/category-list");
      setCategories(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-7xl mx-auto py-10">
      <h2 className="text-3xl font-bold mb-8">
        Shop By Category
      </h2>

      <div className="grid grid-cols-4 gap-4">
        {categories.map((item) => (
          <div
            key={item}
            className="border rounded-lg p-4 text-center shadow hover:bg-pink-100 cursor-pointer"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;