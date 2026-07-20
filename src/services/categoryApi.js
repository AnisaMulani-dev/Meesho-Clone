import api from "./api";

export const getCategories = async () => {
  const response = await api.get("/products/category-list");
  return response.data;
};

export const getCategoryProducts = async (category) => {
  const response = await api.get(`/products/category/${category}`);
  return response.data.products;
};